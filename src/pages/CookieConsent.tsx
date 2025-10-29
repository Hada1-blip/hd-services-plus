import React, { useState, useEffect } from "react";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<{ analytics: boolean; marketing: boolean }>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    );
    setVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    );
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ necessary: true, ...preferences })
    );
    setShowModal(false);
    setVisible(false);
  };

  const handleToggle = (key: "analytics" | "marketing") => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!visible) return null;

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Nous utilisons des cookies pour personnaliser le contenu, diffuser des publicités et analyser le trafic. Vous pouvez accepter, refuser ou personnaliser vos choix.
      </p>

      <div style={styles.buttons}>
        <button style={{ ...styles.button, background: "#aaa" }} onClick={handleRejectAll}>Tout refuser</button>
        <button style={{ ...styles.button, background: "#007BFF" }} onClick={() => setShowModal(true)}>Personnaliser</button>
        <button style={{ ...styles.button, background: "#000" }} onClick={handleAcceptAll}>Tout accepter</button>
      </div>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Préférences de cookies</h2>

            <div style={styles.cookieOption}>
              <label style={styles.switchLabel}>
                Cookies nécessaires (obligatoires)
                <span style={{ ...styles.switch, ...styles.switchChecked, pointerEvents: "none" }}>
                  <span style={styles.knob}></span>
                </span>
              </label>
            </div>

            <div style={styles.cookieOption}>
              <label style={styles.switchLabel}>
                Cookies analytiques
                <span
                  style={{ ...styles.switch, backgroundColor: preferences.analytics ? "#4ade80" : "#ccc" }}
                  onClick={() => handleToggle("analytics")}
                >
                  <span
                    style={{
                      ...styles.knob,
                      transform: preferences.analytics ? "translateX(20px)" : "translateX(0)"
                    }}
                  ></span>
                </span>
              </label>
            </div>

            <div style={styles.cookieOption}>
              <label style={styles.switchLabel}>
                Cookies marketing
                <span
                  style={{ ...styles.switch, backgroundColor: preferences.marketing ? "#4ade80" : "#ccc" }}
                  onClick={() => handleToggle("marketing")}
                >
                  <span
                    style={{
                      ...styles.knob,
                      transform: preferences.marketing ? "translateX(20px)" : "translateX(0)"
                    }}
                  ></span>
                </span>
              </label>
            </div>

            <button style={{ ...styles.button, background: "#000", marginTop: "10px" }} onClick={handleSavePreferences}>
              Enregistrer mes choix
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "fixed",
    bottom: "20px",
    left: "50%",                 // centrer horizontalement
    transform: "translateX(-50%)", // ajuste pour centrer parfaitement
    background: "#fff",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 1000,
    maxWidth: "400px",
    width: "90%",                 // presque toute la largeur sur mobile
    boxSizing: "border-box",      // padding inclus dans la largeur
  },
  text: { margin: 0, fontSize: "14px", color: "#333" },
  buttons: {
    display: "flex",
    justifyContent: "space-between", // Tout refuser à gauche, Tout accepter à droite
    gap: "10px",
    flexWrap: "nowrap",
  },
  button: {
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
    flex: "1 1 auto",
    minWidth: "100px",
    maxWidth: "150px",
    textAlign: "center",
  },
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000 },
  modal: { background: "#fff", padding: "20px", borderRadius: "8px", minWidth: "300px" },
  cookieOption: { display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" },
  switchLabel: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", fontSize: "14px" },
  switch: { position: "relative", width: "40px", height: "20px", borderRadius: "20px", display: "inline-block", cursor: "pointer", transition: "background-color 0.2s" },
  switchChecked: { backgroundColor: "#4ade80" },
  knob: { position: "absolute", top: "0", left: "0", width: "20px", height: "20px", borderRadius: "50%", background: "#fff", transition: "transform 0.2s" },
};

export default CookieConsent;
// || Force redeploy Vercel ||
