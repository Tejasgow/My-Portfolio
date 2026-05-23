import portfolioData from "../data/portfolioData";

export default function Skills() {
  return (
    <section style={styles.container}>
      {/* Heading */}
      <div>
        {/* <p style={styles.tag}>SKILLS</p> */}

        <h2 style={styles.heading}>
          Technologies & Tools I Work With
        </h2>
      </div>

      {/* Skills Grid */}
      <div style={styles.grid}>
        {portfolioData.skills.map((group) => (
          <div key={group.category} style={styles.card}>
            <div style={styles.categoryTitle}>
              {group.category}
            </div>

            <div style={styles.tagRow}>
              {group.items.map((item) => (
                <span key={item} style={styles.skillTag}>
                  {item}
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
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "14px",
  },

  card: {
    background: "#f8f7f4",
    border: "1px solid #ece8df",
    borderRadius: "14px",
    padding: "1rem",
    transition: "0.2s ease",
  },

  categoryTitle: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "12px",
  },

  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  skillTag: {
    fontSize: "12px",
    fontFamily: "monospace",
    padding: "5px 10px",
    background: "#ffffff",
    borderRadius: "8px",
    color: "#444",
    border: "1px solid #ddd",
    fontWeight: "500",
  },
};