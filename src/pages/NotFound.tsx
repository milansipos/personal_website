const NotFound = () => {
    return (
        <main className="legal" style={{ textAlign: 'center', paddingTop: '20vh' }}>
            <h1 className="gradient-text" style={{ fontSize: '5rem', margin: 0 }}>404</h1>
            <p>This page doesn't exist (anymore).</p>
            <p style={{ marginTop: '2rem' }}>
                <a href="/" className="herobutton" style={{ display: 'inline-flex' }}>
                    <span>Back to the homepage</span>
                </a>
            </p>
        </main>
    );
}
export default NotFound;
