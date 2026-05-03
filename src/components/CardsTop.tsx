
interface CardTopProps{
    texto: string
    valor: string
    color1: string
    color2: string
    borderColor: string
    background: string
}


export default function CardTop({color1, color2, background, borderColor, texto, valor}: CardTopProps) {
const corTexto = color1

    return (
        <div className={`${background} ${borderColor} flex flex-col justify-center items-center gap-1 w-[18%] h-20 rounded-2xl border-2 p-1`}>
            <h3 className={`text-md text-center font-bold ${color1}`}>
                {texto}
            </h3>
            <span className={`text-xl font-bold ${color2}`}>{valor}</span>
        </div>
    );
}
