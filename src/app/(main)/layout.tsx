import  Header  from "@/src/components/Header"
import SideBar from "@/src/components/SideBar"



interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="grid grid-cols-[260px_1fr] grid-rows-[90px_1fr] h-screen gap-8 relative">
      <SideBar/>
      <Header/>
      {children}
    </div>
  )
}