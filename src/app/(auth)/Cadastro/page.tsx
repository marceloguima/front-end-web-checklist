"use client";
import Link from "next/link";
import Image from "next/image";

import Botao from "@/src/components/Botao";
import Input from "@/src/components/Input";
import { useState } from "react";
import { FormEvent } from "react";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setsenha] = useState("");

    const [mensagemNome, setMensagemNome] = useState("");
    const [mensagemEmail, setMensagemEmail] = useState("");
    const [mensagemSenha, setMensagemSenha] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");
    const [temErroNome, setTemErroNome] = useState(false);
    const [temErroEmail, setTemErroEmail] = useState(false);
    const [temErroSenha, setTemErroSenha] = useState(false);

    console.log(nome);
    console.log(email);
    console.log(senha);

    const cadastrar: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const nomeValido = validaNome();
        const emailValido = validaEmail();
        const senhaValida = validaSenha();


        // Só envia se passar em todas as validações
        if (nomeValido && emailValido && senhaValida) {
            alert("Formulário pronto pra enviar");
            
        }

        setTimeout(() => {
            setMensagemNome("");
            setMensagemEmail("");
            setMensagemSenha("");
            setTemErroNome(false);
            setTemErroEmail(false);
            setTemErroSenha(false);
        }, 2500);
    };

    const validaNome = () => {
        if (!nome) {
            setMensagemNome("*Nome é obrigatório");
            setTemErroNome(true);
            return false;
        }
        if (nome.length === 1) {
            setMensagemNome("*Insira um nome válido");
            setTemErroNome(true);

            return false;
        } else setMensagemNome("");
        setTemErroNome(false);

        return true;
    };

    const validaEmail = () => {
        if (!email) {
            setMensagemEmail("*Email é obrigatório");
            setTemErroEmail(true);
            return false;
        }
        if (!email.trim().includes("@") || !email.includes(".")) {
            setMensagemEmail("Insira um email válido");
            setTemErroEmail(true);

            return false;
        } else setMensagemEmail("");
        setTemErroEmail(false);

        return true;
    };

    const validaSenha = () => {
        const regexSenha =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#\-_=+^<>~|/\\{}[\]()])[A-Za-z\d@$!%*?&#\-_=+^<>~|/\\{}[\]()]{8,}$/;
        const senhaForte = regexSenha.test(senha);
        if (!senhaForte) {
            setMensagemSenha("*Crie uma senha mais forte");
            setTemErroSenha(true);

            return false;
        } else setMensagemSenha("");
        setTemErroSenha(false);
        return true;
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
            <div className="w-[50%]  flex justify-center items-center bg-white">
                <form
                    onSubmit={cadastrar}
                    className="w-90 h-[650] p-4  border-2 border-gray-400 rounded-2xl shadow-2xl"
                >
                    <h1 className="text-center text-xl font-semiboldbold">
                        Preencha os dados para se cadastrar.
                    </h1>
                    <Input
                        label="Nome"
                        placeholder="Informe seu primeiro nome"
                        type="text"
                        mensagem={mensagemNome}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        classVariant={
                            temErroNome
                                ? "border-0 focus: bg-red-50 outline-1 outline-red-600"
                                : "focus:outline-1 focus:border-0 focus: outline-blue-500 focus:bg-sky-50 border-1 border-gray-400"
                        }
                    />
                    <Input
                        label="Email"
                        placeholder="Informe seu melhor email"
                        type="text"
                        mensagem={mensagemEmail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        classVariant={
                            temErroEmail
                                ? "border-0 focus: bg-red-50 outline-1 outline-red-600"
                                : "focus:outline-1 focus:border-0 focus: outline-blue-500 focus:bg-sky-50 border-1 border-gray-400"
                        }
                    />
                    <Input
                        label="Senha"
                        placeholder="Crie uma senha forte"
                        type="password"
                        mensagem={mensagemSenha}
                        value={senha}
                        onChange={(e) => setsenha(e.target.value)}
                        classVariant={
                            temErroSenha
                                ? "border-0 focus: bg-red-50 outline-1 outline-red-600"
                                : "focus:outline-1 focus:border-0 focus: outline-blue-500 focus:bg-sky-50 border-1 border-gray-400"
                        }
                    />
                    <div className="w-full p-2 border-2 border-gray-300 bg-gray-100 mt-4 mb-6  rounded-md shadow-md">
                        <ul className="w-full space-y-1 list-none p-0">
                            <p className="text-sm font-semibold text-gray-800">
                                Uma senha segura deve conter:
                            </p>
                            <li
                                className={`text-sm list-disc list-inside ${temErroSenha ? "text-red-600" : "text-gray-600"}`}
                            >
                                No mínimo 8 caracteres
                            </li>
                            <li
                                className={`text-sm list-disc list-inside ${temErroSenha ? "text-red-600" : "text-gray-600"}`}
                            >
                                Letras maiúsculas e minúsculas
                            </li>
                            <li
                                className={`text-sm list-disc list-inside ${temErroSenha ? "text-red-600" : "text-gray-600"}`}
                            >
                                Números
                            </li>
                            <li
                                className={`text-sm list-disc list-inside ${temErroSenha ? "text-red-600" : "text-gray-600"}`}
                            >
                                Caracteres especiais (!@#$%&*)
                            </li>
                        </ul>
                    </div>
                    <Botao>Cadastrar</Botao>

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
