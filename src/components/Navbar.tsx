import { type FC } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface NavbarProps {
  isVisible: boolean;
  className?: string;
}

interface NavLinkProps {
  label: string;
  sectionId: string;
}

// Styled components
const Nav = styled(motion.nav)`
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #666666;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #666666;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #333333;
    transition: width 0.2s ease;
  }

  &:hover {
    color: #333333;
    &:after {
      width: 100%;
    }
  }
`;

// Helper functions
const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Subcomponents
const NavigationLink: FC<NavLinkProps> = ({ label, sectionId }) => (
  <NavLink onClick={() => scrollToSection(sectionId)}>{label}</NavLink>
);

const navigationItems: NavLinkProps[] = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Experience", sectionId: "experience" },
  { label: "Contact", sectionId: "contact" },
];

// Main component
const Navbar: FC<NavbarProps> = ({ isVisible, className }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <Nav
          className={className}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <NavContainer>
            <Logo onClick={() => scrollToSection("home")}>Ethan Chen</Logo>
            <NavLinks>
              {navigationItems.map(({ label, sectionId }) => (
                <NavigationLink
                  key={sectionId}
                  label={label}
                  sectionId={sectionId}
                />
              ))}
            </NavLinks>
          </NavContainer>
        </Nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
