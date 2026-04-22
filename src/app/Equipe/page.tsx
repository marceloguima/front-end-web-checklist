"use client";

import { useState } from "react";

import Input from "@/src/components/Input";
import Botao from "@/src/components/Botao";
import BotaoFecharModal from "@/src/components/BotaoFecharModal";
import { GrupoAcoesTabela } from "@/src/components/GrupoAcoesTabela";
import { Settings, Trash2, Plus } from "lucide-react";

import {
    Table,
    TableHeader,
    TableHead,
    TableCell,
    TableRow,
} from "@/src/components/Tabela";
import Cadastro from "../Cadastro/page";
import { ModalAcoes } from "@/src/components/ModalAcoes";

const mockEquipe = [
    {
        id: 1,
        nome: "Marcelo Oliveira",
        email: "marcelo@oficina.com",
        funcao: "Mecânico",
    },
    {
        id: 2,
        nome: "João Silva",
        email: "joao.silva@oficina.com",
        funcao: "Alinhador",
    },
    {
        id: 3,
        nome: "Ana Costa",
        email: "ana@esteticaauto.com",
        funcao: "Pintora",
    },
    {
        id: 4,
        nome: "Carlos Mendes",
        email: "carlos@lavarapido.com",
        funcao: "Lavador",
    },
    {
        id: 5,
        nome: "Roberto Souza",
        email: "roberto@oficina.com",
        funcao: "Eletricista Automotivo",
    },
    {
        id: 6,
        nome: "Enzo",
        email: "enzo@oficina.com",
        funcao: "Borracheiro",
    },
    {
        id: 7,
        nome: "Marcos",
        email: "marcos@oficina.com",
        funcao: "Eletricista Automotivo",
    },
    {
        id: 8,
        nome: "Marcos",
        email: "marcos@oficina.com",
        funcao: "Eletricista Automotivo",
    },
    {
        id: 9,
        nome: "Marcos",
        email: "marcos@oficina.com",
        funcao: "Eletricista Automotivo",
    },
    {
        id: 10,
        nome: "David",
        email: "david@oficina.com",
        funcao: "Eletricista Automotivo",
    },
];

export default function Equipe() {
    const [mostraFormCadastraMembro, setMostraFormCadastraMembro] =
        useState(false);
    const [abreModalApagaMembro, setAbreModalApagaMembro] = useState(false);

    const abrirConfiguracoes = () => {
        alert("configurar");
    };

    const deletarMembro = () => {
        setAbreModalApagaMembro(true);
    };

    const confirmaExclusao = () => {
        alert("Membro apagado");
        setAbreModalApagaMembro(false);
    };

    const cadastrar = () => {};

    return (
        <main className="pr-1">
            {abreModalApagaMembro && (
                <>
                    <div className="absolute z-5 inset-0 bg-black/70"></div>
                    <ModalAcoes classVariant="top-80 right-70" texto="Tem certeza que quer apagar o João do seu sistema? Ele perderá todo acesso ao aplicativo.">
                        <Botao classVariant="bg-gray-400" onClick={() => setAbreModalApagaMembro(false)}>
                            Cancelar
                        </Botao>
                        <Botao classVariant="bg-red-500" onClick={() => confirmaExclusao()}>
                            Sim, apagar
                        </Botao>
                    </ModalAcoes>
                </>
            )}

            {mostraFormCadastraMembro && (
                <>
                    <div className="absolute z-5 inset-0 bg-black/70"></div>

                    <form className="w-100 absolute z-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z10 h-120 p-10 flex flex-col items-center gap-4 bg-white border-2 border-gray-200 rounded-md shadow-2xl">
                        <BotaoFecharModal
                            onClick={() => setMostraFormCadastraMembro(false)}
                            classVariant="absolute top-4 right-4"
                        />
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
                        <Botao classVariant="w-full mt-10" onClick={cadastrar}>
                            Cadastrar
                        </Botao>
                    </form>
                </>
            )}

            <div className="flex justify-between items-end pr-10 pl-10">
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
                <Botao onClick={() => setMostraFormCadastraMembro(true)}>
                    <Plus />
                    Cadastrar um membro
                </Botao>
            </div>
            <div className="mt-8 shadow-md bg-white rounded-md border-2 border-gray-200 mr-3 overflow-auto">
                <Table titulo="Minha equipe">
                    <TableHead>
                        <tr>
                            <TableHeader>Nome</TableHeader>
                            <TableHeader>Email</TableHeader>
                            <TableHeader>Função</TableHeader>
                            <TableHeader>Ação</TableHeader>
                        </tr>
                    </TableHead>
                    <tbody>
                        {mockEquipe.map((equipe) => (
                            <TableRow key={equipe.id}>
                                <TableCell>{equipe.nome}</TableCell>
                                <TableCell>{equipe.email}</TableCell>
                                <TableCell>{equipe.funcao}</TableCell>
                                <TableCell>
                                    <GrupoAcoesTabela
                                        icon1={<Settings className="w-5 h-5" />}
                                        textoHover1="Configurar"
                                        onClick1={() => abrirConfiguracoes()}
                                        corHover1="hover:text-sky-600"
                                        corIcon1="text-sky-700"
                                        icon2={<Trash2 className="w-5 h-5" />}
                                        textoHover2="Excluir Membro"
                                        onClick2={() => deletarMembro()}
                                        corHover2="hover:text-red-600"
                                        corIcon2="text-red-500"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </div>
        </main>
    );
}
