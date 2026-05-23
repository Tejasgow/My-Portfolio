import portfolioData from "../data/portfolioData";

export default function About() {
  const details = [
    ["🎓 Education", portfolioData.education],
    ["📍 Location", portfolioData.location],
    ["⭐ CGPA", portfolioData.cgpa],
    
  ];

  return (
    <section style={styles.container}>
        <div>

        <h2 style={styles.heading}>
          Building scalable backend applications with Python & Django.
        </h2>
      </div>

      {/* Bio */}
      <p style={styles.bio}>
        {portfolioData.bio}
      </p>

      {/* Info Cards */}
      <div style={styles.grid}>
        {details.map(([label, value]) => (
          <div key={label} style={styles.card}>
            <span style={styles.label}>{label}</span>
            <span style={styles.value}>{value}</span>
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
    maxWidth: "760px",
    display: "flex",
    flexDirection: "column",
    gap: "1.8rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
    transition: "0.3s ease",
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

  bio: {
    margin: 0,
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.9",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "14px",
  },

  card: {
    background: "#f8f7f4",
    border: "1px solid #ece8df",
    borderRadius: "14px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    transition: "0.2s ease",
  },

  label: {
    fontSize: "12px",
    color: "#8b8b8b",
    fontWeight: "500",
  },

  value: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#1a1a1a",
  },
};