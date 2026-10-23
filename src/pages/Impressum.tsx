import LegalLayout from "./LegalLayout";

// text from the eRecht24 Impressum generator
const Impressum = () => {
    return (
        <LegalLayout>
            <h1>Impressum</h1>

            <p>
                Milán Sipos<br />
                Guerickestraße 19<br />
                80805 München
            </p>

            <h2>Kontakt</h2>
            <p>
                E-Mail: <a href="mailto:Sipos.Milan22@gmail.com">Sipos.Milan22@gmail.com</a>
            </p>

            <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de/impressum-generator.html</a></p>
        </LegalLayout>
    );
}
export default Impressum;
