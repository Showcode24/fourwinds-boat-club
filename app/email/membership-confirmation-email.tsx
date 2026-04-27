import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface Props {
  name: string;
  membershipType: string;
  newsletter: boolean;
}

const tierDetails: Record<string, { label: string; description: string }> = {
  regular: {
    label: "Regular Member",
    description: "Full access to all club facilities and events.",
  },
  foreign: {
    label: "Foreign Member",
    description: "Tailored access for international residents.",
  },
  corporate: {
    label: "Corporate Member",
    description:
      "Exclusive benefits for corporate entities and their representatives.",
  },
};

export default function MembershipConfirmationEmail({
  name,
  membershipType,
  newsletter,
}: Props) {
  const tier = tierDetails[membershipType] ?? tierDetails.regular;

  return (
    <Html>
      <Head />
      <Preview>Your application to Four Winds Club has been received.</Preview>
      <Tailwind>
        <Body className="bg-[#f9fafb] font-sans">
          <Container className="mx-auto max-w-[600px] p-6">
            <Section className="bg-white border border-slate-200 p-10 rounded-sm shadow-sm">
              {/* Header accent */}
              <div className="w-12 h-px bg-[#af8f47] mb-8" />

              <Heading className="text-slate-900 text-2xl font-light tracking-tight mb-2">
                Welcome to the process, {name}.
              </Heading>
              <Text className="text-slate-600 text-sm font-light mb-8 leading-relaxed">
                Your application to Four Winds Club has been received. Our
                concierge team will review your inquiry and be in touch within
                24–48 hours.
              </Text>

              {/* Tier Summary */}
              <Section className="border border-slate-100 bg-slate-50/50 p-6 mb-8">
                <Text className="text-[10px] uppercase tracking-[0.4em] text-[#af8f47] mb-4 font-bold">
                  Selected Tier
                </Text>
                <Text className="text-slate-900 font-medium mb-1">
                  {tier.label}
                </Text>
                <Text className="text-slate-500 text-sm font-light">
                  {tier.description}
                </Text>
              </Section>

              {/* Newsletter confirmation */}
              {newsletter && (
                <Section className="border border-[#af8f47]/20 bg-[#af8f47]/5 p-6 mb-8">
                  <Text className="text-[10px] uppercase tracking-[0.4em] text-[#af8f47] mb-2 font-bold">
                    Inner Circle — Confirmed
                  </Text>
                  <Text className="text-slate-600 text-sm font-light leading-relaxed">
                    You've opted into exclusive updates and member previews.
                    Expect curated communications soon.
                  </Text>
                </Section>
              )}

              {/* Contact block */}
              <Section className="mb-8">
                <Text className="text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-4 font-bold">
                  Questions? Reach us directly
                </Text>
                <Text className="text-slate-600 text-sm font-medium">
                  josiyi@fourwinds.club
                  <br />
                  <span className="text-slate-500 font-light">
                    +234 (0) 800 FOURWINDS
                  </span>
                </Text>
              </Section>

              <Hr className="border-slate-100 mb-6" />

              <Text className="text-[11px] text-slate-400 font-light">
                © {new Date().getFullYear()} Four Winds Club Limited. Victoria
                Island, Lagos, Nigeria.
              </Text>
              <Text className="text-[11px] text-slate-400 font-light mt-2 italic">
                This is an automated confirmation. Please do not reply to this
                email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
