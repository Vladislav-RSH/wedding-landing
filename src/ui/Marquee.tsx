const ITEMS = Array.from({ length: 8 }, () => "Приглашение на свадьбу");

export function Marquee() {
    return (
        <div className="relative z-[60] -mt-px h-[21px] w-full overflow-hidden bg-burgundy text-white">
            <div className="marquee-track flex h-full min-w-max items-center gap-[36px] px-1 text-[10px] font-semibold uppercase leading-none">
                {[...ITEMS, ...ITEMS].map((item, index) => (
                    <span className="shrink-0" key={`${item}-${index}`}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
