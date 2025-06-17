import { type FC, type ReactNode } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Types
interface Experience {
  title: string;
  company: string;
  dates: string;
  description: ReactNode;
}

// Constants
const EXPERIENCES: Experience[] = [
  {
    title: "Full-Stack Developer Intern",
    company: "Auvik Networks",
    dates: "01/2024 – 08/2024",
    description: (
      <>
        <b>• Scaled enterprise authentication system</b> by implementing
        ReactJS-based SSO integration, enabling secure access for 2,500+ clients
        and increasing platform adoption by <b>35%</b>.<br />
        <b>• Architected and delivered</b> complete full-stack solution for
        application notes and tagging system using <b>NodeJS and PostgreSQL</b>,
        reducing data retrieval time by <b>60%</b>.<br />
        <b>• Optimized sprint productivity</b> through strategic code reviews
        and agile planning, directly contributing to <b>20%</b> increase in team
        delivery velocity and on-time product releases.
      </>
    ),
  },
  {
    title: "Full-Stack Developer Intern",
    company: "SAIRYŌ",
    dates: "05/2023 – 08/2023",
    description: (
      <>
        <b>• Transformed user experience</b> by rebuilding web portal with{" "}
        <b>Angular and TypeScript</b>, resulting in <b>40%</b> increased event
        bookings and <b>25%</b> higher donation conversion for 50+ artists.
        <br />
        <b>• Engineered high-performance GraphQL endpoints</b> that reduced API
        response time by <b>45%</b>, dramatically improving site interactivity
        and user retention for growing platform.
      </>
    ),
  },
  {
    title: "Full-Stack Developer Intern",
    company: "SkyView Suites",
    dates: "09/2022 – 12/2022",
    description: (
      <>
        <b>• Revolutionized admin dashboard UI/UX</b> using{" "}
        <b>ReactJS and TypeScript</b>, enabling efficient management of rental
        services for 1,000+ daily users and cutting administrative time by{" "}
        <b>30%</b>.<br />
        <b>• Designed and implemented RESTful API architecture</b> with{" "}
        <b>NestJS and PostgreSQL</b>, establishing core logistics infrastructure
        that processes 5,000+ daily transactions.
        <br />
        <b>• Spearheaded microservices transformation</b> for critical business
        functions including booking and invoicing, leveraging{" "}
        <b>RabbitMQ and AWS ECS</b> to achieve <b>99.9%</b> system uptime.
      </>
    ),
  },
  {
    title: "Mobile Developer Intern",
    company: "Archipelago Genomics",
    dates: "01/2022 – 04/2022",
    description: (
      <>
        <b>• Launched market-ready fitness application</b> from concept to
        deployment using <b>Expo with React Native and Firebase</b>, acquiring{" "}
        <b>250+ users</b> within first month and achieving <b>4.7/5</b> star
        rating.
        <br />
        <b>• Drove 35% increase in user retention</b> by implementing
        data-driven UI improvements based on user interviews and Figma
        prototyping, directly contributing to product-market fit.
      </>
    ),
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Sponsorpulse",
    dates: "05/2021 – 08/2021",
    description: (
      <>
        <b>• Delivered platform redesign</b> using{" "}
        <b>ReactJS, Ruby, and Figma</b> that connected 200+ users to 20,000+
        brands, increasing user engagement metrics by <b>42%</b>.<br />
        <b>• Created high-performance RESTful API</b> with <b>Ruby on Rails</b>{" "}
        that decreased property report generation time by <b>65%</b>, enabling
        real-time data access for client decision-making.
      </>
    ),
  },
];

// Styled components
const ExperienceContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff7f22;
  margin-bottom: 3rem;
`;

const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: #e0e0e0;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3.5rem;
  position: relative;
  justify-content: center;
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  background: #333;
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1;
  border: 3px solid #fff;
`;

const Left = styled.div`
  flex: 1;
  text-align: right;
  padding-right: 3rem;
  max-width: 50%;
`;

const JobTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #222;
`;

const JobDates = styled.div`
  font-size: 1rem;
  color: #888;
  margin-top: 0.2rem;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 3rem;
  max-width: 50%;
`;

const Company = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1ecbe1;
  margin-bottom: 0.2rem;
`;

const Description = styled.div`
  font-size: 1.05rem;
  color: #444;
  margin-top: 0.5rem;
`;

// Subcomponents
const ExperienceItem: FC<Experience> = ({
  title,
  company,
  dates,
  description,
}) => (
  <TimelineItem>
    <TimelineIcon>💼</TimelineIcon>
    <Left>
      <JobTitle>{title}</JobTitle>
      <JobDates>{dates}</JobDates>
    </Left>
    <Right>
      <Company>{company}</Company>
      <Description>{description}</Description>
    </Right>
  </TimelineItem>
);

// Main component
const Experience: FC = () => {
  return (
    <ExperienceContainer>
      <SectionTitle>Work Experience</SectionTitle>
      <Timeline>
        {EXPERIENCES.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
