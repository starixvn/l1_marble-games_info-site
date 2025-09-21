export interface GameShowcase {
    image: string;
    title: string;
    description: string;
    alt: string;
    link: string;
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

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
