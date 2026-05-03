"use client";

import BtnLinkNavgation from "@/src/components/BtnLinkNavigation";
import { LayoutPanelLeft, Settings, History, Users, LogOut } from "lucide-react";
import { useState, useEffect } from "react";

export default function BarraLateral() {
    // Estado para armazenar a largura atual da janela
    const [larguraTela, setLarguraTela] = useState<number | null>(null);
    // Estado booleano que define se a tela é grande (> 980px) ou pequena (≤ 980px)
    const [telaGrande, setTelaGrande] = useState(false);

    // Hook para detectar mudanças de tamanho da janela
    useEffect(() => {
        // Define a largura inicial quando o componente monta
        setLarguraTela(window.innerWidth);
        // Verifica se a largura inicial é maior que 980px para exibir texto
        setTelaGrande(window.innerWidth > 980); 

        // Função que é chamada sempre que a janela é redimensionada
        const manipularRedimensionamento = () => {
            const largura = window.innerWidth;
            setLarguraTela(largura);
            // Se a largura for maior que 980px, a sidebar fica grande com texto
            // Caso contrário, fica estreita mostrando apenas os ícones
            setTelaGrande(largura > 980);
        };

        // Adiciona o listener para o evento de redimensionamento
        window.addEventListener("resize", manipularRedimensionamento);
        // Remove o listener quando o componente é desmontado
        return () => window.removeEventListener("resize", manipularRedimensionamento);
    }, []);

    // Evita erros de hidratação: só renderiza após o cliente carregar a largura da tela
    if (larguraTela === null) {
        return null;
    }

    return (
        // Barra lateral com largura responsiva
        // Quando telaGrande = true: largura 240px (w-60)
        // Quando telaGrande = false: largura 80px (w-20) - apenas ícones
        <aside className={`bg-sky-700 row-span-2 shadow-md transition-all duration-300 h-screen flex flex-col ${telaGrande ? "w-60" : "w-20"}`}>
            <header className="flex flex-col justify-center items-center border-b-2  border-gray-400 h-30 text-white">
                <h1>Logo</h1>
            </header>
            <nav className="flex-1">
                <ul className="flex flex-col gap-5 p-5 mt-5 w-full">
                    <li className="w-full h-10">
                        <BtnLinkNavgation className="" href="/PainelPrincipal">
                            <LayoutPanelLeft /> 
                            {/* O texto aparece apenas em telas maiores que 980px */}
                            {telaGrande && <span>Painel</span>}
                        </BtnLinkNavgation>
                    </li>
                    <li className="w-full h-10">
                        <BtnLinkNavgation className="" href="/Historico">
                            <History /> 
                            {telaGrande && <span>Histórico</span>}
                        </BtnLinkNavgation>
                    </li>
                   
                    <li className="w-full h-10">
                        <BtnLinkNavgation className="" href="/Equipe">
                            <Users />
                            {telaGrande && <span>Minha Equipe</span>}
                        </BtnLinkNavgation>
                    </li>
                </ul>
            </nav>
            {/* Rodapé da barra lateral com botões de ação */}
            <footer className="w-full border-t-2 border-gray-400 p-10 mt-auto ">
                <ul className="w-full flex gap-6 flex-col items-center">
                    {/* Botão de Configurações */}
                    <li className="w-full">
                        <button className="flex gap-2 items-center justify-center w-full h-10 text-gray-300 cursor-pointer rounded-md hover:bg-sky-800">
                            <Settings />
                            {telaGrande && <span>Configurações</span>}
                        </button>
                    </li>
                    {/* Botão de Logout */}
                    <li className="w-full">
                        <button className="flex gap-2 items-center justify-center w-full h-10 bg-red-50 text-red-500 rounded-md cursor-pointer shadow-xl">
                            <LogOut />
                            {telaGrande && <span>Sair</span>}
                        </button>
                    </li>
                </ul>
            </footer>
        </aside>
    );
}
