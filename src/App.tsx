import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  color: #333333;
`;

const MainContent = styled.main`
  width: 100%;
  margin: 0;
  padding: 6rem 0 2rem;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentScrollY = window.scrollY;
          const isScrollingDown = currentScrollY > lastScrollY;

          // Only hide navbar when scrolling down and About is visible
          if (entry.isIntersecting && isScrollingDown) {
            setIsNavbarVisible(false);
          } else if (!entry.isIntersecting || !isScrollingDown) {
            setIsNavbarVisible(true);
          }

          lastScrollY = currentScrollY;
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <AppContainer>
      <Navbar isVisible={isNavbarVisible} />
      <MainContent>
        <Section id="home">
          <Home />
        </Section>
        <Section id="about" ref={aboutRef}>
          <About />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        {/* <Section id="projects">
          <Projects />
        </Section> */}
        <Section id="contact">
          <Contact />
        </Section>
      </MainContent>
    </AppContainer>
  );
}

export default App;
