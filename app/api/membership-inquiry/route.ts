import { Resend } from "resend";
import { type NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import MembershipConfirmationEmail from "@/app/email/membership-confirmation-email";
import MembershipAdminEmail from "@/app/email/membership-admin-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL!;
const fromEmail = process.env.FROM_EMAIL!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, membershipType, message, newsletter } = body;

    // 1. Confirmation to the applicant
    const userHtml = await render(
      MembershipConfirmationEmail({ name, membershipType, newsletter }),
    );

    const userResult = await resend.emails.send({
      from: `Four Winds Club <${fromEmail}>`,
      to: email,
      subject:
        "Your Membership Application Has Been Received — Four Winds Club",
      html: userHtml,
    });

    if (userResult.error) throw new Error(userResult.error.message);

    // 2. Admin notification
    const adminHtml = await render(
      MembershipAdminEmail({
        name,
        email,
        phone,
        membershipType,
        message,
        newsletter,
      }),
    );

    const adminResult = await resend.emails.send({
      from: `Four Winds Membership <${fromEmail}>`,
      to: adminEmail,
      subject: `New ${membershipType} Membership Application — ${name}`,
      html: adminHtml,
      replyTo: email,
    });

    if (adminResult.error) throw new Error(adminResult.error.message);

    // 3. Add to audience if they opted in
    if (newsletter) {
      await resend.contacts.create({
        audienceId: process.env.RESEND_AUDIENCE_ID!,
        email,
        firstName: name.split(" ")[0],
        lastName: name.split(" ").slice(1).join(" "),
        unsubscribed: false,
      });
    }

    return NextResponse.json({
      message: "Emails sent successfully",
      userEmailId: userResult.data?.id,
      adminEmailId: adminResult.data?.id,
    });
  } catch (error: any) {
    console.error("Membership inquiry email error:", error);
    return NextResponse.json(
      { error: error.message ?? "Unknown error" },
      { status: 500 },
    );
  }
}
