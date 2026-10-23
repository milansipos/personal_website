
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id='contact'>
            <h2>Where to reach me</h2>
            <h3 style={{ paddingBottom:'30px' }}>Do you have any questions? Feel free to contact me:</h3>
            <div style={{ display: 'flex',  alignItems: 'center', justifyContent:'space-around'}}>
                <a href="https://github.com/milansipos" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color:'white' }}>
                    <FaGithub size={60} />
                </a>
                <a href="https://www.linkedin.com/in/mil%C3%A1n-sipos-a53976346/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color:'white' }}>
                    <FaLinkedin size={60} />
                </a>
                <a href="https://www.instagram.com/milansiposs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color:'white' }}>
                    <FaInstagram size={60} />
                </a>
                <a href="mailto:Sipos.Milan22@gmail.com" aria-label="Email" style={{ color:'white' }}>
                    <FaEnvelope size={60} />
                </a>
            </div>
        </section>
    );
}
export default Contact;