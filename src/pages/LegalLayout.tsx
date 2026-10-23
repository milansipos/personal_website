import type { ReactNode } from "react";

const LegalLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="legal">
            <a href="/" className="legal-back">← milansipos.de</a>
            {children}
            <p className="legal-links"><a href="/impressum/">Impressum</a> · <a href="/datenschutz/">Datenschutz</a></p>
        </main>
    );
}
export default LegalLayout;
