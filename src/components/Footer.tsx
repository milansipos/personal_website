const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0 1rem', fontSize: '0.8rem', color: '#666' }}>
            <p style={{ fontSize: '0.9rem', margin: '0 0 0.5rem' }}>
                <a href="/impressum/" style={{ color: '#888' }}>Impressum</a> · <a href="/datenschutz/" style={{ color: '#888' }}>Datenschutz</a>
            </p>
            Editor icons: <a href="https://github.com/microsoft/vscode-codicons" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }}>VS Code Codicons</a> by Microsoft,
            licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }}>CC BY 4.0</a>
        </footer>
    );
}
export default Footer;
