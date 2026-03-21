import { Navbar } from './components/Navbar';
import { ProductoCard } from './components/ProductoCard/ProductoCard'
import { Header } from './components/Header'
import { useState } from 'react';
import { ProductoCardV2 } from './components/ProductoCard/ProductoCardV2';
import type { Producto } from './components/ProductoCard/ProductoCard.types';

const CATALOG: Producto[] = [
  { id: 1, name: 'Crema Hidratante', price: 25000, category: 'Cuidado facial', emoji: '🧴' }, 
  { id: 2, name: 'Sérum Antiedad', price: 45000, category: 'Cuidado facial', emoji: '💧' },
  { id: 3, name: 'Mascarilla de Arcilla', price: 30000, category: 'Cuidado facial', emoji: '🧖‍♀️' },
  { id: 4, name: 'Protector Solar', price: 20000, category: 'Cuidado facial', emoji: '☀️' },
  { id: 5, name: 'Exfoliante Corporal', price: 35000, category: 'Cuidado corporal', emoji: '🛁'},
];

const appStyle = { 
minHeight: '100vh',
background: '#0F1117',
padding: '40px 32px',
fontFamily: 'Inter, system-ui, sans-serif',
};

const gridStyle = { 
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '24px',
  marginTop: '32px',
};
const titleStyle = {
  color: '#E8EAF0',
  fontsize: '28px',
  fontWeight: 800, 
};
const cartStyle = {
  color: '#8B8FA8',
  marginTop: '8px',
  fontSize: '14px',
}

function App() {
  //Estado global del carrito: array de IDs
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (id: number) => {
    setCart((prev) => [...prev, id]); //inmutabilidad: spread + nuevo array
};

return ( 
  <div style={appStyle}>
    <h1 style={titleStyle}>Posata </h1>
  <p style= {cartStyle}>
    Carrito: {cart.length} {cart.length === 1 ? 'producto' : 'productos'}
  </p>
    <div style={gridStyle}>
      {CATALOG.map((producto) => (
        <ProductoCardV2 key={producto.id} product={producto} onAddToCart={handleAddToCart} />
      ))}
    </div>
  </div>
);
}
const productos = [{nombre: '', descripción: "string", imagen: 'src', precio: 0, categoria: '',
  tecnologías: ["React", "TypeScript", "API" ]}];


    <div>
      <Navbar nombre="Posata" links={["Home", "Productos", "Contacto"]}/>
      <Header nombreTienda={''} itemsEnCarrito={0} />

      <main>
        {productos.map((p) => (
          <ProductoCard key={p.nombre} {...p} />
        ))}
      </main>
  </div>  

  export default App