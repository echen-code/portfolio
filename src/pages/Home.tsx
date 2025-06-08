import styled from "@emotion/styled";
import { motion } from "framer-motion";

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
  background: #181818;
  min-height: 100vh;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #b0b0b0;
  max-width: 600px;
  line-height: 1.6;
`;

const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to My Portfolio
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I'm a passionate developer creating meaningful digital experiences.
        Explore my work and get in touch to collaborate.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
