import portfolioData from "../data/portfolioData";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section style={styles.container}>
      {/* Heading */}
      <div>
        {/* <p style={styles.tag}>PROJECTS</p> */}

        <h2 style={styles.heading}>
          Featured Projects & Backend Applications
        </h2>
      </div>

      {/* Projects Grid */}
      <div style={styles.grid}>
        {portfolioData.projects.map((p) => (
          <div key={p.title} style={styles.card}>
            {/* Top */}
            <div style={styles.cardTop}>
              <div style={styles.emojiWrap}>
                <span style={styles.emoji}>
                  {p.emoji}
                </span>
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                style={styles.githubLink}
              >
                <FaGithub />
                GitHub
              </a>
            </div>

            {/* Title */}
            <div style={styles.title}>
              {p.title}
            </div>

            {/* Description */}
            <div style={styles.desc}>
              {p.desc}
            </div>

            {/* Tags */}
            <div style={styles.tagRow}>
              {p.tags.map((t) => (
                <span key={t} style={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    background: "#ffffff",
    border: "1px solid #ebe7df",
    borderRadius: "22px",
    padding: "2rem",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    gap: "1.8rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
  },

  tag: {
    margin: 0,
    marginBottom: "8px",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.14em",
    color: "#999",
  },

  heading: {
    margin: 0,
    fontSize: "28px",
    lineHeight: "1.3",
    fontWeight: "800",
    letterSpacing: "-1px",
    color: "#111",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px",
  },

  card: {
    background: "#f8f7f4",
    border: "1px solid #ece8df",
    borderRadius: "18px",
    padding: "1.3rem",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    transition: "0.2s ease",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  emojiWrap: {
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    background: "#fff",
    border: "1px solid #ece8df",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: "24px",
  },

  githubLink: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "600",
    color: "#185fa5",
    background: "#eef4ff",
    padding: "7px 12px",
    borderRadius: "10px",
  },

  title: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#111",
    letterSpacing: "-0.5px",
  },

  desc: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.8",
    flex: 1,
  },

  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  techTag: {
    fontSize: "11px",
    fontFamily: "monospace",
    padding: "5px 10px",
    background: "#ffffff",
    color: "#185fa5",
    borderRadius: "999px",
    border: "1px solid #d8e7fb",
    fontWeight: "600",
  },
};