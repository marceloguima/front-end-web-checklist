import { X, Trash2 } from "lucide-react";

interface botaoProps {
    onClick: () => void;
}

export default function ModalDetalhesVeiculo({ onClick }: botaoProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Modal */}
            <div className="relative bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 z-10 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h2 className="text-xl font-semibold">
                        Detalhes do Veículo
                    </h2>
                    <button
                        className="text-gray-500 bg-gray-200 w-10 h-10 flex justify-center items-center rounded-md shadow-md hover:text-gray-700 text-lg cursor-pointer"
                        onClick={onClick}
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Conteúdo */}
                <div className="space-y-6">
                    {/* Dados principais */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-gray-500">Placa</span>
                            <p className="font-medium">ABC-1234</p>
                        </div>

                        <div>
                            <span className="text-gray-500">Modelo</span>
                            <p className="font-medium">Gol 1.0</p>
                        </div>

                        <div>
                            <span className="text-gray-500">Vendedor</span>
                            <p className="font-medium">João Silva</p>
                        </div>

                        <div>
                            <span className="text-gray-500">Ano</span>
                            <p className="font-medium">2022</p>
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
