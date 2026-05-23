import portfolioData from "../data/portfolioData";

export default function Certifications() {
  return (
    <section style={styles.container}>
      <div>
        
        <h2 style={styles.heading}>
          Certifications & Professional Learning
        </h2>
      </div>

      {/* Certifications Grid */}
      <div style={styles.grid}>
        {portfolioData.certifications.map((c) => (
          <div key={c.name} style={styles.card}>
            <div style={styles.icon}>🏅</div>

            <div>
              <div style={styles.name}>{c.name}</div>

              <div style={styles.org}>
                {c.org} · {c.year}
              </div>
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
    maxWidth: "760px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "14px",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    background: "#f8f7f4",
    border: "1px solid #ece8df",
    borderRadius: "14px",
    padding: "1rem",
    transition: "0.2s ease",
  },

  icon: {
    fontSize: "24px",
    minWidth: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid #ece8df",
  },

  name: {
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "4px",
    color: "#1a1a1a",
  },

  org: {
    fontSize: "12px",
    color: "#777",
    lineHeight: "1.5",
  },
};