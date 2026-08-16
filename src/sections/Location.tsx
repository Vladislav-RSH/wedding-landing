import place from "../assets/place.png";
import { Button } from "../ui/Button";
import { SectionTitle } from "../ui/SectionTitle";

export function Location() {
    return (
        <section className="bg-cream text-burgundy">
            <div className="px-[32px] pb-[40px]">
                <SectionTitle>
                    Где мы будем<br />
                    вас ждать?
                </SectionTitle>

                <p className="ml-auto mt-[16px] max-w-[254px] text-right text-[12px] font-semibold leading-[1.05]">
                    Наш праздник пройдет в уютном банкетном зале “Мед” в центре города
                </p>

                <p className="ml-auto mt-[13px] max-w-[238px] text-right text-[12px] font-semibold leading-[1.05]">
                    г. Новосибирск, БЦ Гринвич Красноярская улица, 35, 2 этаж
                </p>

                <div className="mt-[25px]">
                    <Button href="https://2gis.ru/novosibirsk/firm/141265769737034?m=82.900682%2C55.040266%2F16" external>
                        Построить маршрут
                    </Button>
                </div>
            </div>

            <img src={place} alt="Банкетный зал Мед" className="block w-full" />
        </section>
    );
}
