import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


type ContactFormEmailProps = {
  message: string,
  senderEmail: string
};

function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Heading />
      <Preview>New message from your Portfolio website</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-bl" >
            <Container>
                <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                    <Heading className=" leading-tight ">You received the following message from the contact form  </Heading>
                    <Text> {message} </Text>
                    <Hr/>
                    <Text> The sender's email is: {senderEmail} </Text>
                </Section>
            </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactFormEmail;
