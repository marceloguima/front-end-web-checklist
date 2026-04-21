interface inputProps{
    label: string
    placeholder: string
    type: string
}

export default function Input({label, placeholder, type}: inputProps ) {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={label}>{label}</label>
            <input id={label}
                type={type}
                placeholder={placeholder}
                className="w-full  border-2 border-gray-400 rounded-md  p-2 shadow-xl focus: outline-sky-200 focus:bg-sky-50"
            />
        </div>
    );
}
