import { useState } from "react";
import portfolioData from "../data/portfolioData";
import {
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (
      form.name.trim() &&
      form.email.trim() &&
      form.message.trim()
    ) {
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const links = [
    [
      <MdEmail />,
      "Email",
      portfolioData.email,
    ],
    [
      <FaLinkedin />,
      "LinkedIn",
      portfolioData.linkedin,
    ],
    [
      <FaGithub />,
      "GitHub",
      portfolioData.github,
    ],
  ];

  return (
    <section style={styles.container}>
      {/* Heading */}
      <div>
        {/* <p style={styles.tag}>CONTACT</p> */}

        <h2 style={styles.heading}>
          Let’s Build Something Together
        </h2>
      </div>

      {/* Intro */}
      <p style={styles.intro}>
        I'm actively seeking full-time
        opportunities as a Python Developer
        where I can contribute, grow, and
        build scalable backend solutions.
        If you're looking for someone driven,
        adaptable, and passionate about
        development — let's connect.
      </p>

      {/* Contact Links */}
      <div style={styles.linksList}>
        {links.map(([icon, label, value]) => (
          <a
            key={label}
            href={
              label === "Email"
                ? `mailto:${value}`
                : value
            }
            target="_blank"
            rel="noreferrer"
            style={styles.linkRow}
          >
            <div style={styles.iconWrap}>
              <span style={styles.linkIcon}>
                {icon}
              </span>
            </div>

            <div>
              <div style={styles.linkLabel}>
                {label}
              </div>

              <div style={styles.linkValue}>
                {value}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Form */}
      <div style={styles.form}>
        <input
          style={styles.input}
          placeholder="Your name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          style={styles.input}
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <textarea
          style={{
            ...styles.input,
            height: "120px",
            resize: "none",
          }}
          placeholder="Your message..."
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
        />

        <button
          style={styles.sendBtn}
          onClick={handleSend}
        >
          <FaPaperPlane />

          {sent
            ? "Message Sent!"
            : "Send Message"}
        </button>
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
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.04)",
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

  intro: {
    margin: 0,
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.9",
  },

  linksList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  linkRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px",
    background: "#f8f7f4",
    border: "1px solid #ece8df",
    borderRadius: "14px",
    textDecoration: "none",
    color: "inherit",
    transition: "0.2s ease",
  },

  iconWrap: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "#fff",
    border: "1px solid #ece8df",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  linkIcon: {
    fontSize: "18px",
    color: "#185fa5",
  },

  linkLabel: {
    fontSize: "11px",
    color: "#999",
    marginBottom: "3px",
    fontWeight: "600",
    letterSpacing: "0.05em",
  },

  linkValue: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#1a1a1a",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  input: {
    width: "100%",
    padding: "14px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    fontSize: "14px",
    fontFamily: "inherit",
    background: "#fafafa",
    outline: "none",
    boxSizing: "border-box",
    transition: "0.2s ease",
  },

  sendBtn: {
    alignSelf: "flex-end",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 20px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow:
      "0 6px 18px rgba(0,0,0,0.12)",
  },
};