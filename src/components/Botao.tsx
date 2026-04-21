interface botaoProps {
    label: string;
    classVariant?: string;
}

export default function Botao({label, classVariant} : botaoProps) {
    return <button className={`bg-sky-600 text-white  w-50 p-2.5 rounded-md shadow-xl ${classVariant}`}>{label}</button>;
}
