const Hero = () => {
    return (
        <section id ="home" style={{ display: 'flex', alignItems:'center'}}>
            <h1>Hi, I'm Milán Sipos</h1>
            <p style={{ maxWidth: '600px'}}>
                Studying CS at @ TUM | Software Developer (Robotics, C#) @ BlueCatBio
            </p>
            <div style={{ marginTop : '2rem', display:'flex', gap:'1.5rem', justifyContent:'center'}}>
                <a href="#about">
                    <button className="herobutton">
                        <span>More about me</span>
                    </button>
                </a>
                <a href="#projects">
                    <button className="herobutton">
                        <span className="text">View my Work</span>
                    </button>
                </a>
            </div>
        </section>
    );
}
export default Hero;
