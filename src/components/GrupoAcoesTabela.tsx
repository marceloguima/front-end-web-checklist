// import { ReactNode } from "react";

// interface GrupoAcoesTabelaProps{
//     iconEsquerda: ReactNode
//     iconDireita: ReactNode
//     textoHoverEsquerda: string
//     textoHoverDireita: string
//     classVariant?: string
//     onClick: ()=> void

// }

// export function GrupoAcoesTabela({iconDireita, iconEsquerda, textoHoverEsquerda, textoHoverDireita, classVariant, onClick}: GrupoAcoesTabelaProps) {
//     return (
//         <div className="w-20 flex items-center justify-center gap-5">
//             <div className="relative group w-fit">
//                 <div
//                     className={`absolute rigth-full right-10 ml-2 top-1/2 -translate-y-1/2
//                                             text-sm px-2 py-1 rounded
//                                             hidden group-hover:block transition whitespace-nowrap ${classVariant}`}
//                 >
//                     <span>{textoHoverEsquerda}</span>
//                 </div>
//                 <button
//                     className={`${classVariant} cursor-pointer`}
//                     onClick={onClick}
//                 >
//                 {iconEsquerda}
//                 </button>
//             </div>

//             <div className="relative group w-fit">
//                 <div
//                     className="absolute rigth-full left-10 ml-2 top-1/2 -translate-y-1/2
//                                             bg-sky-600 text-white text-sm px-2 py-1 rounded
//                                             hidden group-hover:block transition whitespace-nowrap"
//                 >
//                     <span>{textoHoverDireita}</span>
//                 </div>
//                 <button className="text-green-600 cursor-pointer">
//                     {iconDireita}
//                 </button>
//             </div>
//         </div>
//     );
// }

import { ReactNode } from "react";

// Tipagem genérica: Serve para o Pátio, para a Equipe, para qualquer lugar!
interface GrupoAcoesProps {
    icon1: ReactNode;
    textoHover1: string;
    onClick1: () => void; // Clique do primeiro ícone
    corHover1?: string; // Opcional: para você poder mudar a cor do hover se quiser
    corIcon1: string;

    icon2: ReactNode;
    textoHover2: string;
    onClick2: () => void; // Clique do segundo ícone
    corHover2?: string;
    corIcon2: string;
}

export function GrupoAcoesTabela({
    icon1,
    textoHover1,
    onClick1,
    corHover1 = "hover:text-sky-600", // Azul por padrão
    icon2,
    textoHover2,
    onClick2,
    corHover2 = "hover:text-red-600", // Vermelho por padrão
    corIcon1,
    corIcon2,
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

            {/* Botão 2 */}
            <div className="relative group flex items-center justify-center">
                <div className="absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
                    {textoHover2}
                </div>
                <button
                    onClick={onClick2}
                    className={`${corIcon2} transition-colors ${corHover2}`}
                >
                    {icon2}
                </button>
            </div>
        </div>
    );
}
