import Card from "@/components/ui/card";
import { ServicesSectionProps } from "@/types";
import React from "react";

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, subtitle, services }) => {
    return (
        <section id="services" className="section-padding">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="heading-lg text-white mb-2">{title}</h2>
                    <p className="text-gray-400 mt-2">{subtitle}</p>
                </div>

                <div className="grid-services">
                    {services.map((service, index) => (
                        <Card key={index} className="p-8">
                            <h3 className="heading-md text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.description}</p>

                            {service.features && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center">
                                            <span className="text-green-400 mr-2">✓</span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
