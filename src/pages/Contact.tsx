import { type FC } from "react";
import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Types
interface ContactInfo {
  icon: string | React.ReactNode;
  title: string;
  content: string[];
  link?: {
    url: string;
    text: string;
  };
}

// Constants
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "📍",
    title: "Where to find me",
    content: ["Delta", "Vancouver, BC", "Canada"],
  },
  {
    icon: "✉️",
    title: "Email Me At",
    content: ["iethan1688@gmail.com"],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    title: "Let's Connect",
    content: [],
    link: {
      url: "https://www.linkedin.com/in/ethan-chen-1983141b3/",
      text: "LinkedIn Profile",
    },
  },
];

// Styled components
const ContactContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0 2rem 0;
  text-align: center;
  background: #181818;
`;

const ContactLabel = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
  color: #ff7f22;
`;

const MainHeading = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #fff;
`;

const SubHeading = styled.p`
  font-size: 2rem;
  color: #b0b0b0;
  margin-bottom: 3.5rem;
`;

const InfoGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: nowrap;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const InfoBlock = styled.div`
  flex: 1 1 250px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconPlaceholder = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const InfoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff7f22;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.div`
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 0.2rem;
`;

const Link = styled.a`
  font-size: 1.2rem;
  color: #1ecbe1;
  text-decoration: underline;
  font-weight: 500;
  margin-top: 0.2rem;
`;

// Subcomponents
const ContactInfoBlock: FC<ContactInfo> = ({ icon, title, content, link }) => (
  <InfoBlock>
    <IconPlaceholder>{icon}</IconPlaceholder>
    <InfoTitle>{title}</InfoTitle>
    {content.map((text, index) => (
      <InfoText key={index}>{text}</InfoText>
    ))}
    {link && (
      <Link href={link.url} target="_blank" rel="noopener noreferrer">
        {link.text}
      </Link>
    )}
  </InfoBlock>
);

// Main component
const Contact: FC = () => {
  return (
    <ContactContainer id="contact">
      <ContactLabel>Contact Me</ContactLabel>
      <MainHeading>I'd Love To Connect!</MainHeading>
      <SubHeading>Let have a chat!</SubHeading>
      <InfoGrid>
        {CONTACT_INFO.map((info, index) => (
          <ContactInfoBlock key={index} {...info} />
        ))}
      </InfoGrid>
    </ContactContainer>
  );
};

export default Contact;
