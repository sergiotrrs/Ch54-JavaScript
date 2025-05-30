const Navbar = ({title}) => {
    return (
        <header>
            <nav>
                <h1>{title}</h1>
                <ul>
                    <li>Inicio</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Registrer</li>
                </ul>
            </nav>
        </header>
    );
}
export { Navbar };
