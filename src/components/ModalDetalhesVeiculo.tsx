import {  Trash2 } from "lucide-react";
import BotaoFecharModal from "./BotaoFecharModal";

interface modalProps {
    onClick: () => void;
    placa: string
    modelo:string
    atendente:string
    tecnico: string,
    data: string
}

export default function ModalDetalhesVeiculo({ onClick, placa, modelo, atendente, tecnico, data  }: modalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Modal */}
            <div className="relative bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 z-10 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h2 className="text-xl font-semibold">
                        Detalhes do Veículo
                    </h2>


                    <BotaoFecharModal onClick={onClick}/>
                   
                </div>

                {/* Conteúdo */}
                <div className="space-y-6">
                    {/* Dados principais */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-gray-500">Placa</span>
                            <p className="font-medium">{placa}</p>
                        </div>

                        <div>
                            <span className="text-gray-500">Modelo</span>
                            <p className="font-medium">{modelo}</p>
                        </div>

                        <div>
                            <span className="text-gray-500">atendente</span>
                            <p className="font-medium">{atendente}</p>
                        </div>
                        <div>
                            <span className="text-gray-500">Técnico</span>
                            <p className="font-medium">{tecnico}</p>
                        </div>
                        <div>
                            <span className="text-gray-500">Data</span>
                            <p className="font-medium">{data}</p>
                        </div>

                      
                    </div>

                    {/* Imagens */}
                    <div>
                        <h3 className="text-sm text-gray-500 mb-3">Imagens</h3>

                        <div className="grid grid-cols-3 gap-3">
                            <img
                                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
                                className="h-24 w-full object-cover rounded"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e"
                                className="h-24 w-full object-cover rounded"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
                                className="h-24 w-full object-cover rounded"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1597007030739-6d2e4f8b3b5b"
                                className="h-24 w-full object-cover rounded"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04"
                                className="h-24 w-full object-cover rounded"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1617814076668-7b4c5d7a3e02"
                                className="h-24 w-full object-cover rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 mt-6">
                    <button className="px-4 py-2 flex gap-2 rounded bg-red-500 text-white hover:bg-red-600">
                        <Trash2 /> Deletar
                    </button>
                </div>
            </div>
        </div>
    );
}
