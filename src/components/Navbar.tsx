interface NavbarProps {
    nombre: string; //Tu nombre para mostrar en el logo
    links: string[]; //Ej: ["Home", "About", "Contact"]}
}

export function Navbar({ nombre, links }: NavbarProps) {
    return (
        <nav className="navbar">
            <span className="logo">{nombre}</span>
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                ))}
            </ul>
            </nav>
    );
}
