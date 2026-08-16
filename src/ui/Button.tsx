type ButtonProps = {
    href: string;
    children: React.ReactNode;
    external?: boolean;
};

export function Button({ href, children, external = false }: ButtonProps) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="animated-button relative flex min-h-9 w-full items-center justify-center overflow-hidden rounded-[7px] bg-burgundy px-5 py-2.5 text-center text-[15px] font-semibold uppercase leading-none text-white"
        >
            {children}
        </a>
    );
}
