export interface ServiceCard {
    title: string;
    description: string;
    features?: string[];
}

export interface ServicesSectionProps {
    title: string;
    subtitle: string;
    services: ServiceCard[];
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
}
