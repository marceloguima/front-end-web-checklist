"use client";

import { useState } from "react";

import Input from "@/src/components/Input";
import Botao from "@/src/components/Botao";


import {
    Table,
    TableHeader,
    TableHead,
    TableCell,
    TableRow,
    
} from "@/src/components/Tabela";


const mockEquipe = [
    { 
        id: 1, 
        nome: "Marcelo Oliveira", 
        email: "marcelo@oficina.com", 
        funcao: "Mecânico Sênior" 
    },
    { 
        id: 2, 
        nome: "João Silva", 
        email: "joao.silva@oficina.com", 
        funcao: "Responsável Técnico" 
    },
    { 
        id: 3, 
        nome: "Ana Costa", 
        email: "ana@esteticaauto.com", 
        funcao: "Detailer / Polidora" 
    },
    { 
        id: 4, 
        nome: "Carlos Mendes", 
        email: "carlos@lavarapido.com", 
        funcao: "Lavador" 
    },
    { 
        id: 5, 
        nome: "Roberto Souza", 
        email: "roberto@oficina.com", 
        funcao: "Eletricista Automotivo" 
    }
];



export default function Equipe() {
    const [cadastraMembro, setCadastraMembro] = useState(false);

    return (
        <main className="bg-white mr-4 pb-12">



            {cadastraMembro && (
                <form className="w-100 h-120 p-10 flex flex-col items-center gap-4 bg-white border-2 border-gray-200 rounded-md shadow-2xl">
                    <h3 className="text-xl">Prencha os dados</h3>
                    <Input
                        label="Nome:"
                        placeholder="Digite seu primeiro nome"
                        type="text"
                    />
                    <Input
                        label="Email:"
                        placeholder="Digite seu melhor email"
                        type="email"
                    />
                    <Input
                        label="Senha:"
                        placeholder="Crie uma senha"
                        type="password"
                    />
                    <Botao label="Cadastrar" classVariant="w-full mt-10" />
                </form>
            )}


             <div className="flex justify-between pr-10 pl-10">
                <div className="flex flex-col justify-center items-center gap-2 w-70 h-20 rounded-2xl border-2 border-sky-400 bg-sky-50">
                    <h3 className="text-xl font-bold text-sky-400">
                        Entradas de hoje
                    </h3>
                    <span className="text-3xl font-bold text-sky-700">04</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2 w-70 h-20 rounded-2xl border-2 border-red-300 bg-red-50">
                    <h3 className="text-xl font-bold text-red-400">
                        Total no pátio
                    </h3>
                    <span className="text-3xl font-bold text-red-400">10</span>
                </div>

                <div className="flex flex-col justify-center items-center gap-2 w-70 h-20 rounded-2xl border-2 border-green-500 bg-green-50">
                    <h3 className="text-xl font-bold text-green-500">
                        Finalizados hoje
                    </h3>
                    <span className="text-3xl font-bold text-green-700">
                        08
                    </span>
                </div>
            </div>
            <div className="mt-8 shadow-md bg-white rounded-md border-2 border-gray-200 mr-3 overflow-auto">
               
                <Table titulo="Minha equipe">
                    <TableHead>
                        <tr>
                            <TableHeader>Nome</TableHeader>
                            <TableHeader>Email</TableHeader>
                            <TableHeader>Função</TableHeader>
                           
                        </tr>
                    </TableHead>
                    <tbody>
                        {mockEquipe.map((equipe) => (
                            <TableRow key={equipe.id}>
                                <TableCell>{equipe.nome}</TableCell>
                                <TableCell>{equipe.email}</TableCell>
                                <TableCell>{equipe.funcao}</TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </div>
        </main>
    );
}
