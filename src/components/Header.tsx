"use client";

import { BellRing, Settings, LogIn } from "lucide-react";
import { CircleUserRound, Search } from "lucide-react";
import { DropdownPerfil } from "./Dropdownperfil";
import { useState } from "react";

export default function Header() {
    const configurar = () => {
        alert("Abrindo Configurações, aguarde...");
    };

    const excluirConta = () => {
        alert("Excluindo sua conta...");
    };

    const [abreDropPerfil, setAbreDropPerfil] = useState(false);

    return (
        <header className="h-22 p-5 bg-white flex rounded-md shadow-md  items-center justify-between">
            <form className="relative flex w-100 items-center rounded-md border border-gray-200 bg-white shadow-sm ">
                <input
                    className="w-full bg-transparent px-3 py-2 rounded-md focus:bg-sky-50 focus:outline-none"
                    type="text"
                    placeholder="Buscar por placa, ou modelo ou mecânico"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-md text-gray-600">
                    <Search size={20} />
                </button>
            </form>
            <div className="flex w-60 flex-wrap items-center justify-center gap-2">
                <button
                    className="flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-gray-700 relative"
                    onClick={() => setAbreDropPerfil(!abreDropPerfil)}
                >
                    <CircleUserRound size={24} className="text-gray-600" />
                    <span>Olá, João!</span>
                    
            {abreDropPerfil && (
                <DropdownPerfil
                    nome="João"
                    email="joão@gmail.com"
                    onClickFechar={() => setAbreDropPerfil(false)}
                    classVariant="top-20 right-26"
                    iconeBotao1={<Settings />}
                    labelBotao1="Configurações"
                    onClickBotão1={() => configurar()}
                    iconeBotao2={<LogIn />}
                    labelBotao2="Sair"
                    onClickBotão2={() => excluirConta()}
                >
                    <div className="absolute top-[-16px] right-6 h-8 w-8 rotate-45 rounded-md bg-white border-t-2 border-l-2 border-gray-300" />
                </DropdownPerfil>
            )}
                </button>

                <button className="rounded-md bg-slate-100 p-2 text-gray-700">
                    <BellRing size={24} className="text-gray-600" />
                </button>
            </div>

        </header>
    );
}
