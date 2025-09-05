import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { COPYRIGHT_TEXT, NAV_LINKS } from "@/constants";
import React from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-900">
            <Header navLinks={NAV_LINKS} />
            <main>{children}</main>
            <Footer copyright={COPYRIGHT_TEXT} />
        </div>
    );
};

export default MainLayout;
