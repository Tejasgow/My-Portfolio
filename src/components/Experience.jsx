import portfolioData from "../data/portfolioData";

export default function Experience() {
  return (
    <section style={styles.container}>
      {/* Heading */}
      <div>
        {/* <p style={styles.tag}>EXPERIENCE</p> */}

        <h2 style={styles.heading}>
          Work Experience & Professional Journey
        </h2>
      </div>

      {/* Timeline */}
      <div style={styles.timeline}>
        {portfolioData.experience.map((e, index) => (
          <div key={index} style={styles.item}>
            {/* Timeline Dot */}
            <div style={styles.timelineLeft}>
              <div style={styles.dot} />
              {index !==
                portfolioData.experience.length - 1 && (
                <div style={styles.line} />
              )}
            </div>

            {/* Content */}
            <div style={styles.card}>
              <div style={styles.period}>
                {e.period}
              </div>

              <div style={styles.role}>
                {e.role}
              </div>

              <div style={styles.org}>
                {e.org} · {e.location}
              </div>

              <div style={styles.desc}>
                {e.desc}
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
    maxWidth: "850px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
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

  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  item: {
    display: "flex",
    gap: "1rem",
    position: "relative",
  },

  timelineLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "24px",
  },

  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#185fa5",
    marginTop: "8px",
  },

  line: {
    width: "2px",
    flex: 1,
    background: "#dbe5f0",
    marginTop: "6px",
  },

  card: {
    flex: 1,
    background: "#f8f7f4",
    border: "1px solid #ece8df",
    borderRadius: "16px",
    padding: "1.2rem",
  },

  period: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.08em",
    color: "#185fa5",
    background: "#e8f1fb",
    padding: "5px 10px",
    borderRadius: "999px",
    marginBottom: "12px",
  },

  role: {
    fontSize: "18px",
    fontWeight: "800",
    marginBottom: "5px",
    color: "#111",
  },

  org: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "12px",
  },

  desc: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.8",
  },
};