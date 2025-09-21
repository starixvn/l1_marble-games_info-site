// Type declarations for microfrontends
declare module "hero/HeroSection" {
    import { HeroSectionProps } from "@/types";
    import { ComponentType } from "react";

    const HeroSection: ComponentType<HeroSectionProps>;
    export default HeroSection;
}

declare module "about/AboutSection" {
    import { AboutSectionProps } from "@/types";
    import { ComponentType } from "react";

    const AboutSection: ComponentType<AboutSectionProps>;
    export default AboutSection;
}

declare module "services/ServicesSection" {
    import { ServicesSectionProps } from "@/types";
    import { ComponentType } from "react";

    const ServicesSection: ComponentType<ServicesSectionProps>;
    export default ServicesSection;
}

declare module "gameShowcase/GameShowcaseSection" {
    import { GameShowcaseProps } from "@/types";
    import { ComponentType } from "react";

    const GameShowcaseSection: ComponentType<GameShowcaseProps>;
    export default GameShowcaseSection;
}
