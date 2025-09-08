import Card from "@/components/ui/card";
import { ServicesSectionProps } from "@/types";
import React from "react";
import styles from "./services-section.module.scss";

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, subtitle, services }) => {
    return (
        <section id="services" className={styles.sectionPadding}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`${styles.headingLg} text-[#EF4444] mb-2 font-bold`}>{title}</h2>
                    <p className={`${styles.subtitle} text-gray-400 mt-2`}>{subtitle}</p>
                </div>

                <div className={styles.gridServices}>
                    {services.map((service, index) => (
                        <Card key={`service-${index}-${service.title.toLowerCase().replace(/\s+/g, "-")}`} className="p-8 h-full">
                            <h3 className={`${styles.cardTitle} mb-4`}>{service.title}</h3>
                            <p className={`${styles.cardDescription} mb-6`}>{service.description}</p>

                            {service.features && (
                                <div className={`${styles.features} text-gray-300`}>
                                    {service.features.map((feature, featureIndex) => (
                                        <div
                                            key={`service-feature-${index}-${featureIndex}-${feature.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="flex items-center"
                                        >
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#EF4444] mr-2"></span>
                                            <span className={styles.featureText}>{feature}</span>
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
