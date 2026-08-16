import footer from "../assets/Ellipse 180.png";

export function Footer() {
    return (
        <footer className="relative h-[340px] overflow-hidden bg-cream text-white">
            <img
                src={footer}
                alt="Антон и Ангелина"
                className="absolute inset-x-0 bottom-0 block h-full w-full object-contain object-bottom"
            />

            <div className="absolute inset-x-0 top-[184px] z-10 flex flex-col items-center px-[28px] text-center">
                <p className="max-w-[315px] text-[17px] font-semibold italic leading-[1.08] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                    Будем рады видеть вас на нашем празднике!
                </p>
                <p className="mt-[18px] max-w-[315px] text-[22px] leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                    Антон и Ангелина
                </p>
            </div>
        </footer>
    );
}
