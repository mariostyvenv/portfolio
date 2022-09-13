import { useRef } from 'react';

interface TCustomInput{
    label:string
}

export default function CustomInput({label}:TCustomInput) {
    const ref = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        ref.current!.focus();
    };

    return (
        <div className="relative border-b-2 border-slate-400 focus-within:border-white mb-10">
            <input ref={ref} type="text" placeholder=" " className="text-white block w-full appearance-none focus:outline-none bg-transparent" />
            <label onClick={handleClick} className="text-xs text-slate-400 absolute top-0 z-1 duration-300 origin-0">{label}</label>
        </div>
    )
}