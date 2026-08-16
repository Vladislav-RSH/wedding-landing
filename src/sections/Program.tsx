import { SectionTitle } from "../ui/SectionTitle";
import redBg from "../assets/red-bg.png";

const events = [
    {
        time: "16:30",
        title: "Сбор гостей",
        text: "Начнем наш особенный день с теплой встречи всех приглашенных",
    },
    {
        time: "17:00",
        title: "Праздничный ужин",
        text: "Будет много танцев, веселья, вкусных угощений, любви и поздравлений",
    },
    {
        time: "23:00",
        title: "Финал вечера",
        text: "Вы станете свидетелями зарождения новой семьи - нашей семьи",
    },
];

export function Program() {
    return (
        <section className="relative h-[635px] overflow-hidden bg-cream px-[31px] pt-[118px] text-white">
            <img
                src={redBg}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-[76px] z-0 w-full max-w-none select-none"
            />

            <div className="relative z-10">
                <SectionTitle light>
                    Программа<br />
                    нашего дня
                </SectionTitle>

                <div className="mt-[52px] space-y-[36px] text-white">
                    {events.map((event) => (
                        <div key={event.time} className="grid grid-cols-[66px_1fr] gap-[20px]">
                            <time className="pt-[4px] text-[20px] font-semibold leading-none">{event.time}</time>
                            <div>
                                <h3 className="text-[27px] font-semibold uppercase leading-[0.86]">{event.title}</h3>
                                <p className="mt-[5px] max-w-[210px] text-[10px] font-semibold leading-[0.9]">{event.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
