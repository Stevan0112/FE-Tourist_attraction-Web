type LabelProps = {
    children: React.ReactNode;
};

export default function Label({
    children,
}: LabelProps) {
    return (
        <label className="text-sm font-medium text-slate-700">
            {children}
        </label>
    );
}