"use client";
import Link from "next/link";
import Image from "next/image";

import Botao from "@/src/components/Botao";
import Input from "@/src/components/Input";

export default function Cadastro() {
    const cadastrar = () => {
        alert("cadastrado com sucesso!");
    };

    return (
        <main className="flex">
            <div className="w-[50%] h-[100vh] ">
              <Image src="/img-cadastro.png"  alt="Painel de gestão de equipe"
                width={560}
                height={380}
                style={{ width: "100%", height: "auto", display: "block" }}/>
            </div>
            <div className="w-[50%] flex justify-center bg-white">
                <form className="w-90 h-[650] p-4 mt-10 border-2 border-gray-400 rounded-2xl shadow-2xl">
                    <h1 className="text-center text-xl font-semiboldbold">
                        Preencha os dados para se cadastrar.
                    </h1>
                    <Input
                        label="Nome"
                        placeholder="Informe seu primeiro nome"
                        type="text"
                        mensagem="Nome é obrigoatório"
                    />
                    <Input
                        label="Email"
                        placeholder="Informe seu melhor email"
                        type="email"
                        mensagem="Email é obrigatório"
                    />
                    <Input
                        label="Senha"
                        placeholder="Crie uma senha forte"
                        type="password"
                        mensagem="Senha é obrigatório"
                    />
                    <div className="w-full p-2 border-2 border-gray-300 bg-gray-100 mt-4 mb-6  rounded-md shadow-md">
                        <ul className="w-full space-y-1 list-none p-0">
                            <p className="text-sm font-semibold text-gray-800">
                                Uma senha segura deve conter:
                            </p>
                            <li className="text-sm list-disc list-inside text-gray-600">
                                No mínimo 8 caracteres
                            </li>
                            <li className="text-sm list-disc list-inside text-gray-600">
                                Letras maiúsculas e minúsculas
                            </li>
                            <li className="text-sm list-disc list-inside text-gray-600">
                                Números
                            </li>
                            <li className="text-sm list-disc list-inside text-gray-600 ">
                                Caracteres especiais (!@#$%&*)
                            </li>
                        </ul>
                    </div>
                    <Botao onClick={() => cadastrar()}>Cadastrar</Botao>

                    <div className="flex gap-2 w-full justify-center mt-6 mb-4">
                        <p>Já tem uma conta?</p>
                        <Link
                            href="/Login"
                            className="text-blue-600 font-semibold outline-blue-600"
                        >
                            Entar
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}
