import { useState, useEffect, useRef, type FC } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

// Types
interface SectionRefs {
  about: React.RefObject<HTMLElement | null>;
  experience: React.RefObject<HTMLElement | null>;
  mainContent: React.RefObject<HTMLElement | null>;
}

interface ScreenState {
  isNavbarVisible: boolean;
  isHomeScreen: boolean;
  isExperienceScreen: boolean;
}

// Helper functions
const getNavbarClass = (
  isHomeScreen: boolean,
  isExperienceScreen: boolean
): string => {
  if (isHomeScreen) return "home-screen";
  if (isExperienceScreen) return "experience-screen";
  return "";
};

const isElementInViewport = (element: HTMLElement | null): boolean => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top <= 0 && rect.bottom >= 0;
};

// Main component
const App: FC = () => {
  const [screenState, setScreenState] = useState<ScreenState>({
    isNavbarVisible: true,
    isHomeScreen: true,
    isExperienceScreen: false,
  });

  const refs: SectionRefs = {
    about: useRef<HTMLElement | null>(null),
    experience: useRef<HTMLElement | null>(null),
    mainContent: useRef<HTMLElement | null>(null),
  };

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = (): void => {
      const currentScrollY = refs.mainContent.current?.scrollTop ?? 0;
      const isScrollingDown = currentScrollY > lastScrollY;

      setScreenState((prev) => ({
        ...prev,
        isHomeScreen: currentScrollY < window.innerHeight,
        isExperienceScreen: isElementInViewport(refs.experience.current),
        isNavbarVisible: !(
          isElementInViewport(refs.about.current) && isScrollingDown
        ),
      }));

      lastScrollY = currentScrollY;
    };

    const mainContent = refs.mainContent.current;
    if (mainContent) {
      mainContent.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar
        isVisible={screenState.isNavbarVisible}
        className={getNavbarClass(
          screenState.isHomeScreen,
          screenState.isExperienceScreen
        )}
      />
      <main className="main-content" ref={refs.mainContent}>
        <section className="section" id="home">
          <Home />
        </section>
        <section className="section" id="about" ref={refs.about}>
          <About />
        </section>
        <section className="section" id="experience" ref={refs.experience}>
          <Experience />
        </section>
        {/* <section className="section" id="projects">
          <Projects />
        </section> */}
        <section className="section" id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
