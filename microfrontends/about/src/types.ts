export interface AboutSection {
    title: string;
    subtitle: string;
    items: {
        title: string;
        description: string;
    }[];
}

export interface AboutSectionProps {
    title: string;
    subtitle: string;
    about: AboutSection;
}
