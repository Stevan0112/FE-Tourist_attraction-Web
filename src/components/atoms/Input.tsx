import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
    className = "",
    ...props
}: InputProps) {
    return (
        <input
            className={`
                w-full
                rounded-lg
                border
                border-slate-300
                px-3
                py-2
                outline-none
                focus:ring-2
                focus:ring-violet-500
                transition
                ${className}
            `}
            {...props}
        />
    );
}