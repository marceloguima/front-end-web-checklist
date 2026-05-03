"use client";

import { useState } from "react";

import Input from "@/src/components/Input";
import Botao from "@/src/components/Botao";
import BotaoFecharModal from "@/src/components/BotaoFecharModal";
import { GrupoAcoesTabela } from "@/src/components/GrupoAcoesTabela";
import { Settings, Trash2, Plus, KeyRound } from "lucide-react";

import {
    Table,
    TableHeader,
    TableHead,
    TableCell,
    TableRow,
} from "@/src/components/Tabela";
import Cadastro from "../../(auth)/Cadastro/page";
import { ModalAcoes } from "@/src/components/ModalAcoes";
import { DropdownPerfil } from "@/src/components/Dropdownperfil";
import CardTop from "@/src/components/CardsTop";

interface Membro {
    id: number;
    nome: string;
    email: string;
    funcao: string;
}
const mockEquipe: Membro[] = [
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

    const [abreDropdown, setAbreDropdown] = useState(false);
    const [abreModalApagaMembro, setAbreModalApagaMembro] = useState(false);
    const [idSelecionado, setIdSelecionado] = useState<number | null>(null);

    const abrirDropdouwConfiguracoes = (idMembro: number) => {
        setAbreDropdown(true);
        setIdSelecionado(idMembro);
    };

    const membroSelecionado = mockEquipe.find(
        (membro) => membro.id === idSelecionado,
    );

    const confirmaExclusao = () => {
        alert("Membro apagado");
        setAbreModalApagaMembro(false);
    };

    const gerarAcesso = () => {
        alert("Gerando acesso, aguarde...");
    };

    console.log("1. ID na memória:", idSelecionado);
    console.log("2. Membro encontrado pelo React:", membroSelecionado);

    return (
        <main className="pr-1">
            {abreDropdown && membroSelecionado && (
                <DropdownPerfil
                    onClickFechar={() => setAbreDropdown(false)}
                    nome={membroSelecionado.nome}
                    email={membroSelecionado.email}
                    labelBotao1="Gerar novo acesso"
                    iconeBotao1={<KeyRound />}
                    onClickBotão1={() => gerarAcesso()}
                    iconeBotao2={<Trash2 />}
                    labelBotao2="Excluir membro"
                    onClickBotão2={() => setAbreModalApagaMembro(true)}
                />
            )}

            {abreModalApagaMembro && (
                <>
                    {/* modal para confirmação de exclusão de membro */}
                    <div
                        className="absolute z-5 inset-0 bg-black/70"
                        onClick={() => setAbreModalApagaMembro(false)}
                    ></div>
                    <ModalAcoes
                        classVariant="top-80 right-70"
                        texto={`Tem certeza que quer apagar o(a) ${membroSelecionado?.nome || "este membro"} do seu sistema? Ele(a) perderá todo acesso ao aplicativo.`}
                    >
                        <Botao
                            classVariant="bg-gray-400"
                            onClick={() => setAbreModalApagaMembro(false)}
                        >
                            Cancelar
                        </Botao>
                        <Botao
                            classVariant="bg-red-500"
                            onClick={() => confirmaExclusao()}
                        >
                            Sim, apagar
                        </Botao>
                    </ModalAcoes>
                </>
            )}

            <div className="w-full flex justify-between items-end p-5 ">
               
                <CardTop color1="text-sky-400" color2="text-sky-700" background="bg-sky-50" borderColor="border-sky-400" texto="Entradas de hoje" valor="04"/>
                <CardTop color1="text-red-400" color2="text-red-400" background="bg-red-50" borderColor="border-red-300" texto="Total em pátio" valor="06"/>
                <CardTop color1="text-green-500" color2="text-green-700" background="bg-green-50" borderColor="border-green-500" texto="Finalizados hoje" valor="10"/>

        
                <div className=" max-[222px]">
                    <Botao onClick={() => setMostraFormCadastraMembro(true)}>
                        <Plus />
                        Cadastrar um membro
                    </Botao>
                </div>
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
                                        onClick1={() =>
                                            abrirDropdouwConfiguracoes(
                                                equipe.id,
                                            )
                                        }
                                        corHover1="hover:text-sky-600"
                                        corIcon1="text-sky-700"
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
