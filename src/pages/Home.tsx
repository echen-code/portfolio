import { type FC, useState, useEffect, useRef, useCallback, memo } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Import background images
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";
import bg5 from "../images/bg5.jpg";
import bg6 from "../images/bg6.jpg";

// Types
interface AnimationProps {
  delay?: number;
}

// Styled components
const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const BackgroundLayer = styled.div<{
  bgImage: string;
  isActive: boolean;
  isTransitioning: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(24, 24, 24, 0.7), rgba(24, 24, 24, 0.7)),
    url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${(props) => {
    if (props.isActive && !props.isTransitioning) return 1; // Current image, not transitioning
    if (props.isActive && props.isTransitioning) return 0; // Current image during transition (fading out)
    if (!props.isActive && props.isTransitioning) return 1; // New image during transition (fading in)
    return 0; // Default
  }};
  transition: opacity 7s ease-in-out;
  z-index: ${(props) => (props.isActive ? 2 : 1)};
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 3;
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
  margin-bottom: 1rem;
`;

const Attribution = styled(motion.p)`
  font-size: 1rem;
  color: #888;
  max-width: 600px;
  line-height: 1.4;
  margin-top: 0.5rem;
`;

const BottomRightText = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  font-size: 0.9rem;
  color: #666;
  text-align: right;
  max-width: 300px;
  line-height: 1.4;
  z-index: 4;
`;

// Animation variants
const fadeInUp = ({ delay = 0 }: AnimationProps) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

// Main component
const Home: FC = memo(() => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6];
  const currentIndexRef = useRef(0);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
    const newNextIndex =
      (currentIndexRef.current + 1) % backgroundImages.length;
    setNextBgIndex(newNextIndex);

    // After transition completes, update current index and stop transition
    setTimeout(() => {
      currentIndexRef.current = newNextIndex;
      setCurrentBgIndex(newNextIndex);
      setIsTransitioning(false);
    }, 7000); // Full transition time
  }, [backgroundImages.length]);

  useEffect(() => {
    const interval = setInterval(startTransition, 15000); // Change background every 15 seconds
    return () => clearInterval(interval);
  }, [startTransition]);

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <BackgroundLayer
        key={`current-${currentBgIndex}`}
        bgImage={backgroundImages[currentBgIndex]}
        isActive={true}
        isTransitioning={isTransitioning}
      />
      {isTransitioning && (
        <BackgroundLayer
          key={`next-${nextBgIndex}`}
          bgImage={backgroundImages[nextBgIndex]}
          isActive={false}
          isTransitioning={isTransitioning}
        />
      )}
      <ContentLayer>
        <Title {...fadeInUp({ delay: 0.2 })}>Welcome to My Portfolio</Title>
        <Subtitle {...fadeInUp({ delay: 0.4 })}>
          I'm a passionate developer creating meaningful digital experiences.
          Explore my work and get in touch to collaborate.
        </Subtitle>
        <Attribution {...fadeInUp({ delay: 0.6 })}>
          Background images are from pexels.com
        </Attribution>
      </ContentLayer>
      <BottomRightText {...fadeInUp({ delay: 0.8 })}>
        Taipei, Taiwan
      </BottomRightText>
    </HomeContainer>
  );
});

Home.displayName = "Home";

export default Home;
