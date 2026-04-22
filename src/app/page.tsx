"use client";

import {
    Table,
    TableHeader,
    TableHead,
    TableCell,
    TableRow,
} from "../components/Tabela";

import { Eye, CheckLine } from "lucide-react";
import { useState } from "react";
import ModalDetalhesVeiculo from "@/src/components/ModalDetalhesVeiculo";
import { GrupoAcoesTabela } from "../components/GrupoAcoesTabela";

// Array com os dados falsos para testar o layout
const mockVeiculos = [
    {
        id: 1,
        placa: "ABC-1234",
        modelo: "Gol 1.0",
        atendente: "João Silva",
        tecnico: "João",
        dataEntrada: "Hoje, 09:30",
    },
    {
        id: 2,
        placa: "XYZ-9876",
        modelo: "Hilux SRV",
        atendente: "Marcelo",
        tecnico: "João",
        dataEntrada: "Hoje, 10:15",
    },
    {
        id: 3,
        placa: "NBF-5432",
        modelo: "Strada",
        atendente: "Ana Costa",
        tecnico: "João",
        dataEntrada: "Ontem, 16:45",
    },
    {
        id: 4,
        placa: "DEF-5678",
        modelo: "Civic EXL",
        atendente: "João Silva",
        tecnico: "João",
        dataEntrada: "20/04/2026",
    },
    {
        id: 5,
        placa: "GHI-9012",
        modelo: "Onix Plus",
        atendente: "Marcelo",
        tecnico: "Jonas",
        dataEntrada: "20/04/2026",
    },
    {
        id: 5,
        placa: "GHI-9012",
        modelo: "Onix Plus",
        atendente: "Marcelo",
        tecnico: "João",
        dataEntrada: "20/04/2026",
    },
    {
        id: 5,
        placa: "GHI-9012",
        modelo: "Onix Plus",
        atendente: "Marcelo",
        tecnico: "João",
        dataEntrada: "20/04/2026",
    },
    {
        id: 5,
        placa: "GHI-9012",
        modelo: "Onix Plus",
        atendente: "Marcelo",
        tecnico: "João",
        dataEntrada: "20/04/2026",
    },
    {
        id: 5,
        placa: "GHI-9012",
        modelo: "Onix Plus",
        atendente: "Marcelo",
        tecnico: "Marcos",
        dataEntrada: "20/04/2026",
    },
];

export default function Home() {
    interface Veiculo {
        id: number;
        placa: string;
        modelo: string;
        atendente: string;
        tecnico: string;
        dataEntrada: string;
    }

    const [carroEmDestaque, setCarroEmDestaque] = useState<Veiculo | null>();
    const [modalDetalhesAberto, setModalDetalhesAberto] = useState(false);
    const abrirDetalhes = (id: number) => {
        const carroEncontrado = mockVeiculos.find(
            (veiculo) => veiculo.id === id,
        );

        setCarroEmDestaque(carroEncontrado);
        setModalDetalhesAberto(true);
    };

    const darSaida = () => {
        alert("Saída");
    };

    return (
        <main className="pr-1">
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
                {modalDetalhesAberto && carroEmDestaque && (
                    <ModalDetalhesVeiculo
                        placa={carroEmDestaque.placa}
                        modelo={carroEmDestaque.modelo}
                        atendente={carroEmDestaque.atendente}
                        tecnico={carroEmDestaque?.tecnico}
                        data={carroEmDestaque?.dataEntrada}
                        onClick={() => setModalDetalhesAberto(false)}
                    />
                )}
                <Table titulo="Veículos no Pátio">
                    <TableHead>
                        <tr>
                            <TableHeader>Placa</TableHeader>
                            <TableHeader>Modelo</TableHeader>
                            <TableHeader>Data entrada</TableHeader>
                            <TableHeader>Atendente</TableHeader>
                            <TableHeader>Tecnico Exec.</TableHeader>
                            <TableHeader>Ações</TableHeader>
                        </tr>
                    </TableHead>
                    <tbody>
                        {mockVeiculos.map((veiculo) => (
                            <TableRow key={veiculo.id}>
                                <TableCell>{veiculo.placa}</TableCell>
                                <TableCell>{veiculo.modelo}</TableCell>
                                <TableCell>{veiculo.dataEntrada}</TableCell>
                                <TableCell>{veiculo.atendente}</TableCell>
                                <TableCell>{veiculo.tecnico}</TableCell>
                                <TableCell>
                                    {
                                        <GrupoAcoesTabela
                                            icon1={<Eye className="w-5 h-5" />}
                                            textoHover1="Visualizar"
                                            onClick1={() =>
                                                abrirDetalhes(veiculo.id)
                                            }
                                            corHover1="hover:text-sky-600" // Fica azul no hover
                                            corIcon1="text-sky-700"
                                            icon2={
                                                <CheckLine className="w-5 h-5" />
                                            }
                                            textoHover2="Finalizar"
                                            onClick2={() => darSaida()}
                                            corHover2="hover:text-green-600" // Fica verde no hover
                                            corIcon2="text-green-700"
                                        />
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </div>
        </main>
    );
}
