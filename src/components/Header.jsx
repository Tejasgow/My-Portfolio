import portfolioData from "../data/portfolioData";
import {
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

export default function Header({
  setActiveSection,
}) {
  return (
    <section style={styles.wrapper}>
      <header style={styles.header}>
        {/* Left Side */}
        <div style={styles.left}>
          {/* Badge */}
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            Open to Opportunities
          </div>

          {/* Name */}
          <h1 style={styles.name}>
            {portfolioData.name}
          </h1>

          {/* Title */}
          <p style={styles.title}>
            {portfolioData.title}
          </p>

          {/* Description */}
          <p style={styles.desc}>
            Passionate about building scalable
            backend systems, REST APIs, and
            modern web applications using
            Python & Django.
          </p>

          {/* Buttons */}
          <div style={styles.actions}>
            {/* Resume */}
            <a
              href={portfolioData.resume}
              download={portfolioData.resume}
              style={styles.resumeBtn}
            >
              <FaDownload />
              Download Resume
            </a>

            {/* Projects Button */}
            <button
              onClick={() =>
                setActiveSection(
                  "Projects"
                )
              }
              style={styles.projectBtn}
            >
              View Projects
              <FaArrowRight />
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

const styles = {
  wrapper: {
    padding: "2rem",
    background: "#f8f7f4",
  },

  header: {
    background:
      "linear-gradient(135deg,#ffffff,#f9fafb)",
    border: "1px solid #ebe7df",
    borderRadius: "28px",
    padding: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
    boxShadow:
      "0 12px 32px rgba(0,0,0,0.05)",
  },

  left: {
    flex: 1,
    minWidth: "280px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#0f6e56",
    background: "#e7f8f1",
    border: "1px solid #cdeee3",
    borderRadius: "999px",
    padding: "7px 15px",
    marginBottom: "1.2rem",
  },

  badgeDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#0f6e56",
  },

  name: {
    fontSize: "48px",
    fontWeight: "900",
    letterSpacing: "-2.5px",
    margin: "0 0 10px",
    color: "#111",
    lineHeight: "1.05",
  },

  title: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#185fa5",
    margin: 0,
    marginBottom: "1rem",
  },

  desc: {
    maxWidth: "620px",
    fontSize: "15px",
    lineHeight: "1.9",
    color: "#555",
    marginBottom: "2rem",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    flexWrap: "wrap",
  },

  resumeBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "13px 20px",
    background: "#111",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: "700",
    transition: "0.2s ease",
    boxShadow:
      "0 8px 20px rgba(0,0,0,0.12)",
  },

  projectBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "13px 20px",
    background: "#fff",
    color: "#111",
    borderRadius: "14px",
    fontSize: "14px",
    fontWeight: "700",
    border: "1px solid #e5e5e5",
    cursor: "pointer",
    transition: "0.2s ease",
  },
};