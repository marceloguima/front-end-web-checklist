interface inputProps{
    label: string
    placeholder: string
    type: string
    mensagem: string
}

export default function Input({label, placeholder, type, mensagem}: inputProps ) {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={label} className="font-semibold text-gray-700 pl-2">{label}</label>
            <input id={label}
                type={type}
                placeholder={placeholder}
                className="w-full  border-1 border-gray-400 rounded-md  p-2 shadow-xl focus:outline-1 focus:border-0 focus: outline-blue-500 focus:bg-sky-50"
            />
            <span className="mb-1 text-red-600 text-sm">{`*${mensagem}*`}</span>
        </div>
    );
}
