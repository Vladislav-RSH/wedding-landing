import { Button } from "../ui/Button";
import { SectionTitle } from "../ui/SectionTitle";

export function Form() {
    return (
        <section id="guest-form" className="bg-cream px-[32px] pb-[22px] pt-[16px] text-burgundy">
            <SectionTitle>Анкета гостя</SectionTitle>

            <p className="mt-[26px] text-justify text-[12px] font-semibold leading-[0.98]">
                Пожалуйста, подтвердите присутствие на нашем празднике до 01.09.2026 года, нажав на
                кнопку ниже и заполните форму
            </p>

            <div className="mt-[24px]">
                <Button href="https://docs.google.com/forms/d/e/1FAIpQLScwvVgp4m-qofSaNM37fiC0uz-XVaAY6xHQ-8ZzXQNkBncUDA/viewform?usp=send_form" external>
                    Заполнить анкету
                </Button>
            </div>
        </section>
    );
}
