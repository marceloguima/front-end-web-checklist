import { CircleUserRound, Trash2 } from "lucide-react";
import Botao from "./Botao";
import { ReactNode } from "react";

interface DropdownPerfilProp {
    onClickFechar: () => void;
    nome: string;
    email: string;
    labelBotao1: string;
    iconeBotao1:ReactNode
    onClickBotão1: ()=> void
    labelBotao2: string;
    iconeBotao2:ReactNode
    onClickBotão2: ()=> void
    children?: ReactNode;
    classVariant?: string;
}

export function DropdownPerfil({
    onClickFechar,
    nome,
    email,
    classVariant,
    children,
    labelBotao1,
    iconeBotao1,
    onClickBotão1,
    labelBotao2,
    iconeBotao2,
    onClickBotão2
}: DropdownPerfilProp) {
    const posicaoPadrao = "top-80 left-280";

    const posicao = classVariant || posicaoPadrao;

    return (
        <div className="absolute z-8 inset-0 " onClick={onClickFechar}>
            <div
                className={`absolute z-10  w-70 p-5 bg-white border-2 border-gray-300 rounded-md shadow-xl ${posicao}`}
            >
                {children}
                <div className="flex flex-col items-center">
                    <CircleUserRound size={36} className="text-gray-800" />
                    <span className="font-medium text-lg text-gray-800">
                        {nome}
                    </span>
                    <span className="text-gray-500">{email}</span>
                </div>
                <div className="w-full border-t-2 border-b-2 border-gray-300 mt-3 flex flex-col gap-4 pt-4 pb-4 mb-5">
                    <Botao
                        classVariant="bg-transparent text-gray-800 shadow-none hover:bg-gray-200"
                        onClick={onClickBotão1}
                    >
                        {iconeBotao1}
                        {labelBotao1}
                    </Botao>
                </div>
                <Botao
                    classVariant="bg-transparent text-gray-700 shadow-none hover:bg-red-100"
                    onClick={onClickBotão2}
                >
                    {iconeBotao2}
                    {labelBotao2}
                </Botao>
            </div>
        </div>
    );
}
