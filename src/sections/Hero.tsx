const Hero = () => {
    return (
        <section id ="home" style={{ display: 'flex', alignItems:'center'}}>
            <h1>Hi, I'm Milán Sipos</h1>
            <p style={{ maxWidth: '600px'}}>
                Studying CS at @ TUM | Software Developer (Robotics, C#) @ BlueCatBio
            </p>
            <div style={{ marginTop : '2rem', display:'flex', gap:'1.5rem', justifyContent:'center'}}>
                <a href="#about" className="herobutton">
                    <span>More about me</span>
                </a>
                <a href="#projects" className="herobutton">
                    <span>View my Work</span>
                </a>
            </div>
        </section>
    );
}
export default Hero;
