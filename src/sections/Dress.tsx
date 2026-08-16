import { SectionTitle } from "../ui/SectionTitle";

const colors = [
    { name: "Burgundy", value: "#830021", text: "text-white" },
    { name: "Dusty rose", value: "#ad7776", text: "text-[#f3d7cf]" },
    { name: "Baby pink", value: "#e7b1a8", text: "text-[#8b4d49]" },
    { name: "Dark cocoa", value: "#4a342d", text: "text-[#d9c7bd]" },
    { name: "Olive green", value: "#667439", text: "text-[#d9dec1]" },
    { name: "Invory", value: "#fde7b0", text: "text-[#b98b67]" },
];

export function Dress() {
    return (
        <section className="bg-cream px-[32px] pb-[28px] pt-[33px] text-burgundy">
            <SectionTitle>Дресс-код</SectionTitle>

            <p className="mt-[29px] text-justify text-[12px] font-semibold leading-[0.98]">
                Нам очень хочется сохранить единую атмосферу вечера, поэтому будем рады поддержке
                данной цветовой гаммы
            </p>

            <div className="mx-[-32px] mt-[23px] grid grid-cols-3 gap-[3px]">
                {colors.map((color) => (
                    <div
                        key={color.name}
                        className={`flex h-[39px] items-center justify-center text-[9px] font-semibold uppercase ${color.text}`}
                        style={{ backgroundColor: color.value }}
                    >
                        {color.name}
                    </div>
                ))}
            </div>
        </section>
    );
}
