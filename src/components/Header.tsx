interface HeaderProps {
    nombreTienda: string;
    itemsEnCarrito: number;
}

export function Header({ nombreTienda, itemsEnCarrito }: HeaderProps) {
    return (
        <header className="header">
            <h1>{nombreTienda}</h1>
            <div className="cart">
                <span></span>
                {itemsEnCarrito >0 && <span className="badge">{itemsEnCarrito}</span>}
                </div>
                </header>
    );
}