import styled from "@emotion/styled";
import { motion } from "framer-motion";

const ProjectsContainer = styled.div`
  max-width: 1200px;
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #f5f5f5;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #666666;
`;

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of your first project and its key features.",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Project Two",
    description:
      "Description of your second project highlighting its main functionalities.",
    tags: ["Python", "Django", "PostgreSQL"],
  },
  {
    title: "Project Three",
    description: "Overview of your third project and what makes it special.",
    tags: ["React Native", "Firebase", "Redux"],
  },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage>Project Image</ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </ProjectTags>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
