import { About } from "../sections/About";
import { Dress } from "../sections/Dress";
import { Footer } from "../sections/Footer";
import { Form } from "../sections/Form";
import { Location } from "../sections/Location";
import { Program } from "../sections/Program";
import { Welcome } from "../sections/Welcome";

export function HomePage() {
    return (
        <main className="min-h-screen bg-page font-sans">
            <div className="mx-auto w-[400px] max-w-full overflow-hidden bg-cream shadow-[0_0_30px_rgba(55,30,33,0.08)]">
                <Welcome />
                <About />
                <Location />
                <Program />
                <Dress />
                <Form />
                <Footer />
            </div>
        </main>
    );
}
