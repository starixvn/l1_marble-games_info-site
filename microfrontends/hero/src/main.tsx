import React from "react";
import ReactDOM from "react-dom/client";
import HeroSection from "./HeroSection.tsx";
import "./index.css";

// For standalone development
const App = () => {
    return (
        <div>
            <HeroSection
                title="Experience the Thrill of RNG Marble Games"
                description="SABA Marbles, powered by SABAPLAY, is a revolutionary RNG-simulated sports game designed for fast-paced entertainment and betting. Perfect for sports lovers seeking instant action and quick wins."
            />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
