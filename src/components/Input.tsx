
interface inputProps{
    label: string
    placeholder: string
    type: string
    mensagem: string
    value: string
    classVariant?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

}

export default function Input({label, placeholder, type, mensagem, value, onChange, classVariant}: inputProps ) {

const corPadrao = ""

    return (
        <div className="flex flex-col w-full">
            <label htmlFor={label} className="font-semibold text-gray-700 pl-2">{label}</label>
            <input id={label}
                type={type}
                placeholder={placeholder}
                className={`w-full  rounded-md  p-2 shadow-xl  ${classVariant}`}
                value={value}
                onChange={onChange}
            />
            <span className="mb-1 h-3 text-red-600 text-sm">{mensagem}</span> 
        </div>
    );
}
