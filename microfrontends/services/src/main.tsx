import React from "react";
import ReactDOM from "react-dom/client";
import ServicesSection from "./ServicesSection.tsx";
import "./index.css";

// For standalone development
const App = () => {
    return (
        <div>
            <ServicesSection
                title="Our Services"
                subtitle="Comprehensive solutions for your iGaming platform."
                services={[
                    {
                        title: "Extensive Odds Feed",
                        description:
                            "We provide a diverse range of betting markets to keep your players engaged. Our feed is fast, reliable, and covers all aspects of the game.",
                        features: [
                            "Handicap",
                            "Over/Under",
                            "Odd/Even",
                            "1X2",
                            "Home Team O/U",
                            "Away Team O/U",
                            "1H Handicap",
                            "1H Over/Under",
                            "1H Odd/Even",
                            "1H 1X2",
                            "1H Home Team O/U",
                            "1H Away Team O/U",
                        ],
                    },
                    {
                        title: "Exclusive Game Content Creation",
                        description:
                            "Our service delivers high-quality, custom-designed video simulations that create a dynamic and visually engaging experience for players. We also provide tailored content services, designing unique video experiences to match your brand and audience.",
                    },
                ]}
            />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
