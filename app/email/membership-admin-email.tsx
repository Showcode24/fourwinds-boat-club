import {
  Body, Container, Head, Heading, Html,
  Section, Text, Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface Props {
  name: string;
  email: string;
  phone: string;
  membershipType: string;
  message: string;
  newsletter: boolean;
}

export default function MembershipAdminEmail({
  name, email, phone, membershipType, message, newsletter,
}: Props) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto max-w-[600px] p-4">
            <Section className="bg-white rounded-sm shadow-lg p-8">

              <Heading className="text-xl font-bold text-gray-800 mb-2">
                New Membership Application
              </Heading>
              <Text className="text-gray-500 text-sm mb-8">
                A new inquiry has been submitted via the Four Winds Club website.
              </Text>

              {/* Applicant Info */}
              <Section className="bg-gray-50 rounded-sm p-6 mb-6">
                <Heading className="text-sm font-semibold text-gray-700 uppercase tracking-widest mb-4">
                  Applicant Details
                </Heading>
                {[
                  ["Name", name],
                  ["Email", email],
                  ["Phone", phone || "Not provided"],
                  ["Membership Tier", membershipType.charAt(0).toUpperCase() + membershipType.slice(1)],
                  ["Newsletter Opt-in", newsletter ? "✓ Yes — add to Inner Circle list" : "No"],
                ].map(([label, val]) => (
                  <Section key={label} className="mb-3">
                    <Text className="text-xs text-gray-400 mb-0.5">{label}</Text>
                    <Text className="text-gray-800 font-medium">{val}</Text>
                  </Section>
                ))}
              </Section>

              {/* Message */}
              {message && (
                <Section className="bg-gray-50 rounded-sm p-6 mb-6">
                  <Heading className="text-sm font-semibold text-gray-700 uppercase tracking-widest mb-4">
                    Message
                  </Heading>
                  <Text className="text-gray-700 whitespace-pre-line">{message}</Text>
                </Section>
              )}

              <Hr className="border-gray-200 my-6" />

              <Text className="text-xs text-gray-400 italic">
                Automated notification — Four Winds Club membership form.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}