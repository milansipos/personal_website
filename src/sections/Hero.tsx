const Hero = () => {
    return (
        <section id ="home">
            <h1>Hi im Milan Sipos</h1>
            <p style={{ maxWidth: '600px' }}>
                I am a software developer...
            </p>
            <div style={{ marginTop : '2rem' }}>
                <a href="#projects">
                    <button style={{ padding: '12px 24px', fontSize: '1rem', background: '#646cff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        View my work
                    </button>
                </a>
            </div>
        </section>
    );
}
export default Hero;