import React from "react";
import ReactDOM from "react-dom/client";
import GameShowcaseSection from "./GameShowcaseSection.tsx";
import "./index.css";

// For standalone development
const App = () => {
    return (
        <div>
            <GameShowcaseSection
                title="Our Games"
                subtitle="Functionally identical, aesthetically unique. Choose your style."
                games={[
                    {
                        image: "/src/assets/game-showcase/orginal.png",
                        title: "Original Theme",
                        description: "The original game design, with a colorful cartoon stadium and playful match visuals.",
                        alt: "SABA Marbles Original Theme",
                        link: "https://www.youtube.com/embed/6_7AdtN9xS8?si=En0zikNMT3pjKw1B",
                    },
                    {
                        image: "/src/assets/game-showcase/galaxy.png",
                        title: "Galaxy Theme",
                        description: "A futuristic, cosmic design for a modern gaming experience.",
                        alt: "SABA Marbles Galaxy Theme",
                        link: "https://www.youtube.com/embed/aGZnm-0Yulo?si=plvMrLOZV09igrTK",
                    },
                    {
                        image: "/src/assets/game-showcase/premier_league.png",
                        title: "Premier League Theme",
                        description: "Inspired by the English Premier League, designed for true football fans.",
                        alt: "SABA Marbles Premier League Theme",
                        link: "https://www.youtube.com/embed/M1bW2xtaikY?si=h-u49guHuypNyE5C",
                    },
                ]}
                demoLinks={{
                    sabaSports: "https://g943gp.pvm5062.net/en-US/live/9994",
                    sabaPlay: "https://www.sabaplay.top/13510",
                }}
            />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
