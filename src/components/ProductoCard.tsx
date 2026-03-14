interface ProductoCardProps {
    nombre: string;
    precio: number;
    imagen?: string;
    categoria: string;
    disponible?: boolean;
}

export function ProductoCard({
nombre, precio, imagen, categoria, disponible = true}: ProductoCardProps) {
    const precioFormateado = precio.toLocaleString('es-CO', { style: "currency", currency: "COP", maximumFractionDigits: 0 
        
    });


return (
    <div className={`producto-card ${!disponible ? "sold-out" : " "}`}>
        <img src={imagen} alt={nombre} />
        <span className="categoria">{categoria}</span>
        <h3>{nombre}</h3>
        <p className="precio">{precioFormateado}</p>
        <button disabled={!disponible}>
            {disponible ? "Agregar al carrito": "Agotado"}
        </button>
    </div>
);
}
