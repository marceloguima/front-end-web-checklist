import { ReactNode } from "react";

interface botaoProps {
    children: ReactNode
    onClick: ()=> void
    classVariant?: string;
}

export default function Botao({children, classVariant, onClick} : botaoProps) {
    return <button onClick={onClick} className={` flex justify-center gap-2 font-medium  text-white  min-w-50 h-12 p-3 rounded-md shadow-xl cursor-pointer bg-sky-600 ${classVariant}`}>{children}</button>;
}
