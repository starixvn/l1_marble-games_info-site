import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { GameShowcaseProps } from "@/types";
import React from "react";

const GameShowcaseSection: React.FC<GameShowcaseProps> = ({ title, subtitle, games, demoLinks }) => {
    return (
        <section id="showcase" className="section-padding bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="heading-lg text-white mb-2">{title}</h2>
                    <p className="text-gray-400 mt-2">{subtitle}</p>
                </div>

                <div className="grid-showcase">
                    {games.map((game, index) => (
                        <Card key={index} className="rounded-lg overflow-hidden">
                            <img
                                src={game.image}
                                alt={game.alt}
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = "https://placehold.co/600x800/1d232a/ffffff?text=Image+Not+Found";
                                }}
                            />
                            <div className="p-6">
                                <h3 className="heading-md text-white mb-2">{game.title}</h3>
                                <p className="text-gray-400 mt-2">{game.description}</p>
                            </div>
                        </Card>
                    ))}

                    {/* Demo Links Section */}
                    <div className="md:col-span-3 text-center mt-12">
                        <h3 className="heading-md text-white mb-4">Try Our Demo Games Now</h3>
                        <p className="text-gray-400 mb-4">Play for free on:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button href={demoLinks.sabaSports} variant="primary" size="md" className="rounded-full">
                                SABA Sports Demo
                            </Button>
                            <Button href={demoLinks.sabaPlay} variant="primary" size="md" className="rounded-full">
                                SABAPlay Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameShowcaseSection;
