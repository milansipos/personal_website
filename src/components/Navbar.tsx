import logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <nav>
            <a href="#home" className="nav-logo" aria-label="Home">
                <img src={logo} alt="" width={32} height={32} />
            </a>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    );
}
export default Navbar;
