import Header from "@/src/components/Header";
import SideBar from "@/src/components/SideBar";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="h-screen  w-screen flex  gap-8 relative">
            <SideBar />
            <div className="w-[86%]">
                <Header />
                {children}
            </div>
        </div>
    );
}
