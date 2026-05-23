import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

// Map section names to their components
const SECTIONS = {
  About,
  Skills,
  Projects,
  Experience,
  Certifications,
  Contact,
};

export default function App() {
  const [activeSection, setActiveSection] = useState("About");

  // Get the active component dynamically
  const ActiveComponent = SECTIONS[activeSection];

  return (
    <div style={styles.root}>
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <main style={styles.main}>
        <Header setActiveSection={setActiveSection} />

        <div style={styles.content}>
          {/* Section Title */}
          <h2 style={styles.sectionTitle}>
            {activeSection}
          </h2>

          {/* Active Section */}
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    background: "#f8f7f4",
    color: "#1a1a1a",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  content: {
    flex: 1,
    padding: "2rem 2.5rem",
  },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "800",
    letterSpacing: "-0.8px",
    marginBottom: "1.5rem",
  },
};