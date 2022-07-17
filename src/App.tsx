import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Bootstrap.css";
import "./Style.css";

function App() {
  return (
    <>
      <section className="landing-section" style={{ position: "relative" }}>
        <img
          className="floating"
          src="assets/wc-logo.png"
          width="50%"
          alt=""
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="App"></div>
      </section>
      <section className="story-section">
        <div className="App"></div>
      </section>
      <section className="roadmap-section">
        {/* <img src="assets/3. Roadmap.png" alt="" /> */}
        <div className="App"></div>
      </section>
      <section className="chamber-section">
        <div className="App"></div>
      </section>
      <section className="team-section">
        <div className="App"></div>
      </section>
      <section className="faq-section">
        <div className="App"></div>
      </section>
      <section className="footer-section">
        <div className="App"></div>
      </section>
    </>
  );
}

export default App;
