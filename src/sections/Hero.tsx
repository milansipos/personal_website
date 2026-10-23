import Reveal from "../components/Reveal";

const Hero = () => {
    return (
        <section id ="home" style={{ display: 'flex', alignItems:'center'}}>
            <Reveal>
                <h1>Hi, I'm <span className="gradient-text">Milán Sipos</span></h1>
            </Reveal>
            <Reveal delay={0.1}>
                <p className="hero-subtitle">
                    Studying CS @ TUM | Software Developer @ BlueCatBio | CSEE
                </p>
            </Reveal>
            <Reveal delay={0.2}>
                <div style={{ marginTop : '2rem', display:'flex', gap:'1.5rem', justifyContent:'center'}}>
                    <a href="#about" className="herobutton">
                        <span>More about me</span>
                    </a>
                    <a href="#projects" className="herobutton">
                        <span>View my Work</span>
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
export default Hero;
