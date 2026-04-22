import { ReactNode } from "react"
import Botao from "./Botao"


interface ModalAcoesProps{
    texto: string
    children: ReactNode
    classVariant: string
}

export function ModalAcoes({texto, children, classVariant}: ModalAcoesProps){
    return(
        <div className={`flex flex-col gap-10 w-120 absolute z-10 p-4  bg-white border-2 border-gray-200 rounded-md shadow-2xl ${classVariant}`}>
           <p>{texto}</p> 
           <div className="flex justify-between">
         {children}
           </div>
        </div>
    )
}