export default function Pill({
    children,
    highlight,
    ...props
}: {
    children: React.ReactNode;
    highlight?: boolean;
} & React.HTMLProps<HTMLDivElement>) {
    return (
        <div className={`cursor-pointer px-4 py-1.5 rounded-lg hover:text-black hover:bg-white transition-colors ${highlight ? `bg-white text-black` : 'bg-white/14 text-white'}`} {...props}>
            {children}
        </div>
    )
}
