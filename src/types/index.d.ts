// Common types for the SABA Marble info site

export interface NavLink {
    href: string;
    label: string;
    isButton?: boolean;
}

export interface StrengthCard {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface ServiceCard {
    title: string;
    description: string;
    features?: string[];
}

export interface GameShowcase {
    image: string;
    title: string;
    description: string;
    alt: string;
}

export interface AboutSection {
    title: string;
    subtitle: string;
    items: {
        title: string;
        description: string;
    }[];
}

export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface SocialLink {
    href: string;
    label: string;
}

// Component props interfaces
export interface HeaderProps {
    navLinks: NavLink[];
}

export interface HeroSectionProps {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
}

export interface StrengthsSectionProps {
    title: string;
    subtitle: string;
    strengths: StrengthCard[];
}

export interface ServicesSectionProps {
    title: string;
    subtitle: string;
    services: ServiceCard[];
}

export interface GameShowcaseProps {
    title: string;
    subtitle: string;
    games: GameShowcase[];
    demoLinks: {
        sabaSports: string;
        sabaPlay: string;
    };
}

export interface AboutSectionProps {
    title: string;
    subtitle: string;
    about: AboutSection;
}

export interface ContactSectionProps {
    title: string;
    subtitle: string;
    onSubmit: (data: ContactForm) => void;
}

export interface FooterProps {
    socialLinks: SocialLink[];
    copyright: string;
}

// UI Component props
export interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export interface InputProps {
    type: "text" | "email" | "textarea";
    name: string;
    placeholder: string;
    required?: boolean;
    className?: string;
    rows?: number;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface IconProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}
