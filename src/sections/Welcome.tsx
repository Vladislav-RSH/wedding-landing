import heart from "../assets/heart.png";
import hero from "../assets/hero.png";
import { Marquee } from "../ui/Marquee";

function DateStack() {
    return (
        <div className="flex flex-col items-center">
            <span className="block">17</span>
            <span className="my-2 block h-[3px] w-full bg-white" />
            <span className="block">10</span>
            <span className="my-2 block h-[3px] w-full bg-white" />
            <span className="block">26</span>
        </div>
    );
}

export function Welcome() {
    return (
        <section className="relative overflow-hidden bg-cream text-white">
            <img
                src={heart}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute top-[-6px] z-0 w-[379px] max-w-none select-none"
            />

            <div className="relative z-10 h-[472px]">
                <h1 className="absolute left-[157px] top-[74px] z-10 w-[170px] text-[25px] font-semibold uppercase leading-[0.85]">
                    АНТОН &<br />
                    АНГЕЛИНА
                </h1>

                <p className="absolute left-[33px] top-[135px] z-40 w-[176px] text-[19px] font-semibold italic leading-[0.9]">
                    День, о котором<br />
                    мы мечтали!
                </p>

                <div className="absolute left-[35px] top-[223px] z-40 w-[40px] text-center text-[39px] font-semibold leading-[0.82]">
                    <DateStack />
                </div>

                <img
                    src={hero}
                    alt="Антон и Ангелина"
                    className="pointer-events-none absolute left-[68px] top-[168px] z-50 w-[342px] max-w-none select-none"
                />
            </div>

            <Marquee />
        </section>
    );
}
