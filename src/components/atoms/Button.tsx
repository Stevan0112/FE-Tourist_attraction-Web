import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger";
};

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const variants = {
        primary:
            "bg-violet-600 hover:bg-violet-700 text-white",

        secondary:
            "bg-slate-200 hover:bg-slate-300 text-slate-800",

        danger:
            "bg-red-500 hover:bg-red-600 text-white",
    };

    return (
        <button
            className={`
                rounded-lg
                px-4
                py-2
                font-medium
                transition-all
                duration-200
                hover:-translate-y-0.5
                ${variants[variant]}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}