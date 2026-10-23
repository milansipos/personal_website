
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id='contact'>
            <h2>Where to reach me</h2>
            <h3 style={{ paddingBottom:'30px' }}>Do you have any questions? Feel free to contact me:</h3>
            {/* gradient referenced by .contact-icon in index.css, same colors as the hero buttons */}
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
                <defs>
                    <linearGradient id="brand-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#AF40FF" />
                        <stop offset="50%" stopColor="#5B42F3" />
                        <stop offset="100%" stopColor="#00DDEB" />
                    </linearGradient>
                </defs>
            </svg>
            <div style={{ display: 'flex',  alignItems: 'center', justifyContent:'space-around'}}>
                <a href="https://github.com/milansipos" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="contact-icon">
                    <FaGithub size={60} />
                </a>
                <a href="https://www.linkedin.com/in/mil%C3%A1n-sipos-a53976346/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-icon">
                    <FaLinkedin size={60} />
                </a>
                <a href="https://www.instagram.com/milansiposs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-icon">
                    <FaInstagram size={60} />
                </a>
                <a href="mailto:Sipos.Milan22@gmail.com" aria-label="Email" className="contact-icon">
                    <FaEnvelope size={60} />
                </a>
            </div>
        </section>
    );
}
export default Contact;