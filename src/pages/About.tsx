import { type FC } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Types
interface ButtonProps {
  onClick: () => void;
}

// Constants
const SKILLS = [
  "JavaScript",
  "TypeScript",
  "C++",
  "Rust",
  "C",
  "Python",
  "Java",
  "Kotlin",
  "Ruby",
  "HTML",
  "CSS",
  "React",
  "React Native",
  "GraphQL",
  "Angular",
  "Node.js",
  "NestJS",
  "Express.js",
  "Ruby on Rails",
  "Firebase",
  "Git",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Firestore",
] as const;

// Styled components
const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333333;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  color: #666666;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`;

const Skill = styled.span`
  background-color: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #333333;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const Button = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const DownloadButton = styled(Button)`
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactButton = styled(Button)`
  background-color: #28a745;
  color: white;

  &:hover {
    background-color: #218838;
  }
`;

// Helper functions
const handleDownloadCV = (): void => {
  window.open("/path-to-your-cv.pdf", "_blank");
};

const scrollToContact = (): void => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// Main component
const About: FC = () => {
  return (
    <AboutContainer>
      <Section {...fadeInUp}>
        <Title>About Me</Title>
        <Text>
          I'm a passionate developer with a keen eye for creating elegant
          solutions to complex problems. With a background in software
          engineering, I bring a unique perspective to every project I work on.
        </Text>
        <ButtonContainer>
          <DownloadButton onClick={handleDownloadCV} {...buttonHover}>
            Download CV
          </DownloadButton>
          <ContactButton onClick={scrollToContact} {...buttonHover}>
            Contact Me
          </ContactButton>
        </ButtonContainer>
      </Section>

      <Section
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.2 }}
      >
        <Title>Skills</Title>
        <SkillsList>
          {SKILLS.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </SkillsList>
      </Section>
    </AboutContainer>
  );
};

export default About;
