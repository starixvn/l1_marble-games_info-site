import Card from "@/components/ui/card";
import { ServicesSectionProps } from "@/types";
import React from "react";
import styles from "./services-section.module.scss";

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, subtitle, services }) => {
    return (
        <section id="services" className={styles.sectionPadding}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`${styles.headingLg} text-white mb-2`}>{title}</h2>
                    <p className="text-gray-400 mt-2">{subtitle}</p>
                </div>

                <div className={styles.gridServices}>
                    {services.map((service, index) => (
                        <Card key={`service-${index}-${service.title.toLowerCase().replace(/\s+/g, "-")}`} className="p-8">
                            <h3 className={`${styles.headingMd} text-white mb-4`}>{service.title}</h3>
                            <p className="text-gray-400 mb-6">{service.description}</p>

                            {service.features && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
                                    {service.features.map((feature, featureIndex) => (
                                        <div
                                            key={`service-feature-${index}-${featureIndex}-${feature.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="flex items-center"
                                        >
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
