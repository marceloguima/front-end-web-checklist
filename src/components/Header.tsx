"use client";

import { BellRing, Settings, LogIn  } from "lucide-react";
import { CircleUserRound, Search } from "lucide-react";
import { DropdownPerfil } from "./Dropdownperfil";
import { useState } from "react";

export default function Header() {

const configurar= ()=>{
    alert("Abrindo Configurações, aguarde...")
}

const excluirConta = ()=>{
alert("Excluindo sua conta...")
}

    const [abreDropPerfil, setAbreDropPerfil] = useState(false);

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
                <button className="w-10 h-9 flex items-center justify-center rounded-md absolute right-0">
                    <Search size={24} className="text-gray-600" />
                </button>
            </form>
            <div className="w-80  flex justify-center gap-2">
                <button
                    className="bg-green--300 ml-4 flex gap-2"
                    onClick={() => setAbreDropPerfil(true)}
                >
                    <CircleUserRound size={24} className="text-gray-600" />
                    <h3>Olá, João!</h3>
                </button>

                <button
                    className="bg-green--300 ml-4"
                >
                    <BellRing size={24} className="text-gray-600" />
                </button>
            </div>

            {abreDropPerfil && (
                <DropdownPerfil
                    nome="João"
                    email="joão@gmail.com"
                    onClickFechar={() => setAbreDropPerfil(false)}
                    classVariant="top-20 right-20"
                    iconeBotao1={<Settings />}
                    labelBotao1="Configurações"
                    onClickBotão1={()=> configurar()}
                    iconeBotao2={<LogIn />}
                    labelBotao2="Sair"
                    onClickBotão2={()=> excluirConta()}
                >
                    <div className="w-8 h-8 rounded-md bg-white absolute top-[-16]  left-30 rotate-45 border-t-2 border-l-2 border-gray-300">
                        
                    </div>
                </DropdownPerfil>
            )}
        </header>
    );
}
