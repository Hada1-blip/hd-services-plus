import React, { useState, useEffect } from "react";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = (): void => {
    localStorage.setItem("cookieConsent", "accepted_all");
    setVisible(false);
  };

  const handleRejectAll = (): void => {
    localStorage.setItem("cookieConsent", "rejected_all");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Nous utilisons des cookies pour personnaliser le contenu, diffuser des
        publicités et analyser le trafic. Vous pouvez accepter ou refuser vos choix.
      </p>
      <div style={styles.buttons}>
        <button
          style={{ ...styles.button, background: "#000" }}
          onClick={handleAcceptAll}
        >
          Tout accepter
        </button>
        <button
          style={{ ...styles.button, background: "#aaa" }}
          onClick={handleRejectAll}
        >
          Tout refuser
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#fff",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 1000,
    maxWidth: "340px",
  },
  text: {
    margin: 0,
    fontSize: "14px",
    color: "#333",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
    flexWrap: "wrap",
  },
  button: {
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default CookieConsent;
