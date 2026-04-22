import {X} from "lucide-react"

interface BotaoProps{
    onClick:()=> void
     classVariant?: string;
}

export default function BotaoFecharModal({onClick, classVariant}: BotaoProps){
    return(
         <button type="button"
                        className={` text-gray-500 bg-gray-200 p-0.5 flex justify-center items-center rounded-md shadow-md hover:text-gray-700 text-lg cursor-pointer ${classVariant}`}
                        onClick={onClick}
                    >
                        <X size={28} />
                    </button>
    )
}