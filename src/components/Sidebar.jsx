import portfolioData from "../data/portfolioData";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import profileImage from "../assets/Tejas_Profile.png";

export default function Sidebar({
  activeSection,
  setActiveSection,
}) {
  const NAV_ITEMS = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Certifications",
    "Contact",
  ];

  return (
    <aside style={styles.sidebar}>
      {/* Main Container */}
      <div style={styles.container}>
        {/* Profile */}
        <div style={styles.profile}>
          <div style={styles.avatar}>
            <img
              src={profileImage}
              alt="Tejas"
              style={styles.avatarImage}
            />
          </div>

          <h2 style={styles.name}>
            {portfolioData.name}
          </h2>

          <p style={styles.title}>
            {portfolioData.title}
          </p>

          {/* Status */}
          <div style={styles.status}>
            <span style={styles.statusDot} />
            Available for Work
          </div>
        </div>

        {/* Navigation */}
        <nav style={styles.nav}>
          {NAV_ITEMS.map((item) => {
            const active =
              activeSection === item;

            return (
              <button
                key={item}
                onClick={() =>
                  setActiveSection(item)
                }
                style={{
                  ...styles.navBtn,
                  ...(active
                    ? styles.activeBtn
                    : {}),
                }}
              >
                <span
                  style={styles.dot(active)}
                />

                {item}
              </button>
            );
          })}
        </nav>

        {/* Stats */}
        <div style={styles.stats}>
          {portfolioData.stats.map((s) => (
            <div
              key={s.label}
              style={styles.statCard}
            >
              <div style={styles.statNumber}>
                {s.number}
              </div>

              <div style={styles.statLabel}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div style={styles.socials}>
          <a
            href={`mailto:${portfolioData.email}`}
            style={styles.socialLink}
          >
            <MdEmail />
          </a>

          <a
            href={`https://${portfolioData.github}`}
            target="_blank"
            rel="noreferrer"
            style={styles.socialLink}
          >
            <FaGithub />
          </a>

          <a
            href={`https://${portfolioData.linkedin}`}
            target="_blank"
            rel="noreferrer"
            style={styles.socialLink}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </aside>
  );
}

const styles = {
  sidebar: {
    width:
      window.innerWidth < 768
        ? "100%"
        : "300px",

    minHeight:
      window.innerWidth < 768
        ? "auto"
        : "100vh",

    padding: "1.5rem",
    background: "#f8f7f4",
  },

  container: {
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(12px)",
    border: "1px solid #ebe7df",
    borderRadius: "26px",
    padding: "2rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.8rem",
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.05)",

    position:
      window.innerWidth < 768
        ? "relative"
        : "sticky",

    top: "20px",
  },

  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid white",
    boxShadow:
      "0 8px 20px rgba(0,0,0,0.08)",
    marginBottom: "1rem",
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  name: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "800",
    color: "#111",
  },

  title: {
    marginTop: "6px",
    fontSize: "13px",
    color: "#777",
    textAlign: "center",
    lineHeight: "1.7",
  },

  status: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "12px",
    fontSize: "12px",
    color: "#0f6e56",
    background: "#e7f8f1",
    padding: "6px 12px",
    borderRadius: "999px",
    fontWeight: "600",
  },

  statusDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#0f6e56",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  navBtn: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    border: "none",
    background: "transparent",
    padding: "12px 14px",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    color: "#555",
    transition: "all 0.2s ease",
    textAlign: "left",
  },

  activeBtn: {
    background: "#eef4ff",
    color: "#185fa5",
    transform: "translateX(4px)",
  },

  dot: (active) => ({
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: active
      ? "#185fa5"
      : "#cfcfcf",
    flexShrink: 0,
  }),

  stats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },

  statCard: {
    background: "#f8f7f4",
    border: "1px solid #ece8df",
    borderRadius: "16px",
    padding: "14px",
    textAlign: "center",
  },

  statNumber: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#111",
  },

  statLabel: {
    fontSize: "11px",
    color: "#888",
    marginTop: "4px",
  },

  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    paddingTop: "1rem",
    borderTop: "1px solid #ece8df",
  },

  socialLink: {
    width: "46px",
    height: "46px",
    borderRadius: "14px",
    background: "#f8f7f4",
    border: "1px solid #ece8df",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#444",
    fontSize: "18px",
    textDecoration: "none",
    transition: "0.2s ease",
    boxShadow:
      "0 4px 10px rgba(0,0,0,0.04)",
  },
};