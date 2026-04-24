import { ReactNode } from "react";

interface botaoProps {
    children: ReactNode;
    onClick: () => void;
    classVariant?: string;
}

export default function Botao({ children, classVariant, onClick }: botaoProps) {
    const corAlinePadrao = "bg-sky-600 hover:bg-sky-800 text-white justify-center shadow-xl";
    const corAlineDoBotao = classVariant || corAlinePadrao;

    return (
        <button
            onClick={onClick}
            className={`flex  gap-2 font-medium   min-w-50 h-12 p-3 rounded-md  cursor-pointer  ${corAlineDoBotao}`}
        >
            {children}
        </button>
    );
}
