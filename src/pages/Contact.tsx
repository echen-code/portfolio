import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
  color: #ff7f22; /* placeholder for orange */
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
  color: #ff7f22; /* placeholder for orange */
  margin-bottom: 0.5rem;
`;

const InfoText = styled.div`
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 0.2rem;
`;

const Link = styled.a`
  font-size: 1.2rem;
  color: #1ecbe1; /* placeholder for blue */
  text-decoration: underline;
  font-weight: 500;
  margin-top: 0.2rem;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactLabel>Contact Me</ContactLabel>
      <MainHeading>I'd Love To Connect!</MainHeading>
      <SubHeading>Let have a chat!</SubHeading>
      <InfoGrid>
        <InfoBlock>
          <IconPlaceholder>📍</IconPlaceholder>
          <InfoTitle>Where to find me</InfoTitle>
          <InfoText>Delta</InfoText>
          <InfoText>Vancouver, BC</InfoText>
          <InfoText>Canada</InfoText>
        </InfoBlock>
        <InfoBlock>
          <IconPlaceholder>✉️</IconPlaceholder>
          <InfoTitle>Email Me At</InfoTitle>
          <InfoText>iethan1688@gmail.com</InfoText>
        </InfoBlock>
        <InfoBlock>
          <IconPlaceholder>in</IconPlaceholder>
          <InfoTitle>Let's Connect</InfoTitle>
          <Link
            href="https://linkedin.com"
            target="https://www.linkedin.com/in/ethan-chen-1983141b3/"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </Link>
        </InfoBlock>
      </InfoGrid>
    </ContactContainer>
  );
};

export default Contact;
