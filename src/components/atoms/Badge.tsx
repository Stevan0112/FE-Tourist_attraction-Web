type BadgeProps = {
    children: React.ReactNode;
};

export default function Badge({
    children,
}: BadgeProps) {
    return (
        <span className="
            inline-flex
            rounded-full
            bg-violet-100
            text-violet-700
            px-3
            py-1
            text-xs
            font-semibold
        ">
            {children}
        </span>
    );
}