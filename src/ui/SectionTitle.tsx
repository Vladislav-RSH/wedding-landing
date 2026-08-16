type SectionTitleProps = {
    children: React.ReactNode;
    light?: boolean;
    className?: string;
};

export function SectionTitle({ children, light = false, className = "" }: SectionTitleProps) {
    return (
        <h2
            className={[
                "text-[31px] font-semibold uppercase leading-[0.82]",
                light ? "text-white" : "text-burgundy",
                className,
            ].join(" ")}
        >
            {children}
        </h2>
    );
}
