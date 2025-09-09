import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { ContactForm, ContactSectionProps } from "@/types";
import React, { useState } from "react";
import styles from "./contact-section.module.scss";

const ContactSection: React.FC<ContactSectionProps> = ({ title, subtitle, onSubmit }) => {
    const [formData, setFormData] = useState<ContactForm>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section id="contact" className={`${styles.sectionPadding} bg-gray-900`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`${styles.headingLg} text-white mb-2`}>{title}</h2>
                    <p className="text-brand mt-2">{subtitle}</p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                            <Input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <Input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />

                        <Input
                            type="textarea"
                            name="message"
                            placeholder="Your Message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <div className="text-center">
                            <Button type="submit" variant="primary" size="lg" className="font-bold rounded-full">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
