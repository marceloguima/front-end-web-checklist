import { ReactNode } from "react";

interface botaoProps {
    children: ReactNode;
    onClick?: () => void;
    classVariant?: string;
}

export default function Botao({ children, classVariant, onClick }: botaoProps) {
    const corAlinePadrao =
        "bg-sky-600 hover:bg-sky-700 text-white justify-center shadow-xl";
    const corAlineDoBotao = classVariant || corAlinePadrao;

    return (
        // Botão com largura de 100%, assim fica mais flexivel da pra controlar o tamanho envolvendo em uma div onde for usar
        <button
            onClick={onClick}
            className={`flex  gap-2 font-medium  w-full h-12 p-3 rounded-md  cursor-pointer  ${corAlineDoBotao}`}
        >
            {children}
        </button>
    );
}
