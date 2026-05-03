"use client";

import {
    Table,
    TableHeader,
    TableHead,
    TableCell,
    TableRow,
} from "@/src/components/Tabela";

import { Eye, CheckLine } from "lucide-react";
import { useState } from "react";
import ModalDetalhesVeiculo from "@/src/components/ModalDetalhesVeiculo";
import { GrupoAcoesTabela } from "@/src/components/GrupoAcoesTabela";
import CardTop from "@/src/components/CardsTop";

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
            <div className="w-full flex justify-between items-end p-5 ">
                          
                           <CardTop color1="text-sky-400" color2="text-sky-700" background="bg-sky-50" borderColor="border-sky-400" texto="Entradas de hoje" valor="04"/>
                           <CardTop color1="text-red-400" color2="text-red-400" background="bg-red-50" borderColor="border-red-300" texto="Entradas de hoje" valor="06"/>
                           <CardTop color1="text-green-500" color2="text-green-700" background="bg-green-50" borderColor="border-green-500" texto="Finalizados hoje" valor="10"/>
           
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
