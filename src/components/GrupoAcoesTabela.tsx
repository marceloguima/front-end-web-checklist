

import { ReactNode } from "react";

// Tipagem genérica: Serve para o Pátio, para a Equipe, para qualquer lugar!
interface GrupoAcoesProps {
    icon1: ReactNode;
    textoHover1: string;
    onClick1: () => void; // Clique do primeiro ícone
    corHover1?: string; // Opcional: para você poder mudar a cor do hover se quiser
    corIcon1: string;

    icon2?: ReactNode;
    textoHover2?: string;
    onClick2?: () => void; // Clique do segundo ícone
    corHover2?: string;
    corIcon2?: string;
}

export function GrupoAcoesTabela({
    icon1,
    corIcon1,
    textoHover1,
    onClick1,
    corHover1 = "hover:text-sky-600", 
   
}: GrupoAcoesProps) {
    return (
        <div className="flex items-center gap-4 w-fit">
            {/* Botão 1 */}
            <div className="relative group flex items-center justify-center">
                <div className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
                    {textoHover1}
                </div>
                <button
                    onClick={onClick1}
                    className={`${corIcon1} transition-colors ${corHover1}`}
                >
                    {icon1}
                </button>
            </div>

            
        </div>
    );
}
