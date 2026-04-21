import { BellRing } from "lucide-react";
import { CircleUserRound, Search } from "lucide-react";

export default function Header() {
    return (
        <header
            className=" bg-white flex justify-between items-center pr-10 pl-10 shadow-md rounded-md
"
        >
            <form className="flex w-120 h-10 border-2 border-gray-200 rounded-md relative shadow-md">
                <input
                    className="w-full  bg-transparent pl-2 pr-10 rounded-md focus:bg-sky-50 focus:outline-sky-200"
                    type="text"
                    placeholder="Buscar por placa, ou modelo ou mecânico"
                />
                <button className="w-10 h-9 flex items-center justify-center rounded-md absolute right-0"><Search size={24} className="text-gray-600"/></button>
            </form>
            <div className="w-80  flex justify-center gap-2">
                <CircleUserRound size={24} className="text-gray-600"/>
                <h3>Olá, João!</h3>
            <button className="bg-green--300 ml-4">
                <BellRing size={24} className="text-gray-600"/>
            </button>
            </div>
        </header>
    );
}
