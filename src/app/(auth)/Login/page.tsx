"use client";
import Link from "next/link";
import Image from "next/image";

import Botao from "@/src/components/Botao";
import Input from "@/src/components/Input";
import { CheckCheck } from "lucide-react";

export default function Cadastro() {
    const Logar = () => {
        alert("Logado com sucesso!");
    };

    return (
        <main className="flex">
            <div className="w-[50%] h-[100vh] relative">
                <Image
                    src="/uploads/Telecommuting-pana.svg"
                    alt="Painel de gestão de equipe"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="w-[50%] flex justify-center items-center bg-white">
                <form className="w-90 h-[460] p-4 mt-10 border-2 border-gray-400 rounded-2xl shadow-2xl">
                    <h1 className="text-center text-xl font-semiboldbold">
                        Preencha suas credencias para acessar.
                    </h1>
                    <Input
                        label="Email"
                        placeholder="Informe seu melhor email"
                        type="email"
                        mensagem="Email é obrigatório"
                    />

                    <Input
                        label="Nome"
                        placeholder="Informe seu primeiro nome"
                        type="password"
                        mensagem="Senha é obrigoatório"
                    />

                    <div className="flex justify-between w-full mb-6 mt-3">
                        <div className="flex gap-1 ">
                            <input type="checkbox" id="lembrarUsuario" className="cursor-pointer"/>
                            <label htmlFor="lembrarUsuario" className="text-sm cursor-pointer">
                                Lembrar de mim
                            </label>
                        </div>
                        <Link
                            href=""
                            className="text-blue-600 font-semibold text-sm"
                        >
                            Equeci minha senha
                        </Link>
                    </div>

                    <Botao onClick={() => Logar()}>Entrar</Botao>

                    <div className="flex gap-2 w-full justify-center mt-6 mb-4">
                        <p>Não tem uma conta?</p>
                        <Link
                            href="/Cadastro"
                            className="text-blue-600 font-semibold outline-blue-600"
                        >
                            Crie agora
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}
