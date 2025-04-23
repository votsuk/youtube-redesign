export default function Pill({
    children,
    highlight,
    special,
    ...props
}: {
    children: React.ReactNode;
    highlight?: boolean;
    special?: boolean;
} & React.HTMLProps<HTMLDivElement>) {

    function getBackgroundColor() {
        if (highlight) {
            return "bg-white text-black";
        }

        if (special) {
            return "bg-[#FFAABB]/14 text-white"
        }

        return "bg-[#272727] text-white"
    }

    return (
        <div
            className={`group cursor-pointer w-full h-full px-4 py-1.5 flex items-center justify-center gap-2 rounded-lg hover:text-black hover:bg-white transition-colors ${getBackgroundColor()}`}
            {...props}
        >
            {children}
        </div>
    )
}
