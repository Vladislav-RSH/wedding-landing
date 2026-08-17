import footer from "../assets/Ellipse 180.png";

export function Footer() {
    return (
        <footer className="relative h-[340px] overflow-hidden bg-cream text-white">
            <img
                src={footer}
                alt="Антон и Ангелина"
                className="absolute inset-x-0 bottom-0 block h-full w-full object-contain object-bottom"
            />

            <div className="absolute right-[30px] top-[190px] z-10 w-[160px] text-right text-white">
                <p className="text-[13px] font-semibold italic leading-[0.9] drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                    с любовью и теплыми
                    <br />
                    воспоминаниями,
                </p>
                <p className="mt-[2px] text-[19px] font-semibold uppercase leading-[0.84] drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                    АНТОН <span className="text-[10px] font-semibold italic">и</span>
                    <br />
                    АНГЕЛИНА
                </p>
            </div>
        </footer>
    );
}
