import { SectionTitle } from "../ui/SectionTitle";
import smallHeart from "../assets/small-heart.png";

const days = ["15", "16", "17", "18", "19"];
const calendarLoops = [0, 1];

export function About() {
    return (
        <section className="bg-cream px-[32px] pb-[59px] pt-[25px] text-burgundy">
            <SectionTitle>
                Дорогие<br />
                родные<br />
                и друзья!
            </SectionTitle>

            <p className="mt-[38px] text-justify text-[13px] font-semibold leading-[0.95]">
                Мы спешим к вам с радостной вестью и хотим, чтобы разделили с нами радость
                особенного дня и стали частью начала нашей семейной истории!
            </p>

            <div className="mt-[22px] flex items-end justify-between text-[11px] font-semibold">
                <span>октябрь</span>
                <span>2026</span>
            </div>

            <div className="relative mt-[8px] overflow-hidden border-y-2 border-burgundy py-[9px]">
                <div className="about-date-track relative z-10 flex w-[200%]">
                    {calendarLoops.map((loop) => (
                        <div
                            key={loop}
                            className="grid w-1/2 shrink-0 grid-cols-5 items-center text-center text-[37px] font-semibold leading-none"
                        >
                            {days.map((day) => (
                                <span
                                    key={`${loop}-${day}`}
                                    className={[
                                        "border-r-2 border-burgundy last:border-r-0",
                                        day === "17" ? "text-white" : "",
                                    ].join(" ")}
                                >
                                    {day}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
                <img
                    src={smallHeart}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[93px] w-[93px] -translate-x-1/2 -translate-y-1/2 object-contain"
                />
            </div>
        </section>
    );
}
