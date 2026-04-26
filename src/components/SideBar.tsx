import BtnLinkNavgation from "@/src/components/BtnLinkNavigation";
import { LayoutPanelLeft, Settings, History, Users, LogOut } from "lucide-react";

export default function SideBar() {  
    return (
        <aside className="bg-sky-700 row-span-2 shadow-md flex flex-col h-full">
            <header className="flex flex-col justify-center items-center border-b-2  border-gray-400 h-30 text-white">
                <h1>Logo</h1>
                <span>MENU PRINCIPAL</span>
            </header>
            <nav className="flex-1">
                <ul className="flex flex-col gap-5 p-5 mt-5 w-full">
                    <li className="w-full h-10">
                        <BtnLinkNavgation className="" href="/PainelPrincipal">
                            <LayoutPanelLeft /> Painel
                        </BtnLinkNavgation>
                    </li>
                    <li className="w-full h-10">
                        <BtnLinkNavgation className="" href="/Historico">
                            <History /> Histórico
                        </BtnLinkNavgation>
                    </li>
                    <li className="w-full h-10">
                        <BtnLinkNavgation className="" href="/Cadastro">
                            <Users />Cadastre um membro
                        </BtnLinkNavgation>
                    </li>
                    <li className="w-full h-10">
                        <BtnLinkNavgation className="" href="/Equipe">
                            <Users />Minha Equipe
                        </BtnLinkNavgation>
                    </li>
                </ul>
            </nav>
            <footer className="w-full border-t-2 border-gray-400 p-10 mt-auto ">


                <ul className="w-full flex gap-6 flex-col items-center">
                    <li className="w-full">
                        <button className="flex gap-2 items-center justify-center w-full h-10 text-gray-300 cursor-pointer rounded-md hover:bg-sky-800">
                            <Settings />
                            Configurações
                        </button>
                    </li>
                    <li className="w-full">
                        <button className="flex gap-2 items-center justify-center w-full h-10 bg-red-50 text-red-500 rounded-md cursor-pointer shadow-xl"><LogOut/>Sair</button>
                    </li>
                </ul>
            </footer>
        </aside>
    );
}
