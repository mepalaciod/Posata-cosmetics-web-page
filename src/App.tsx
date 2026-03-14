import { Navbar } from './components/Navbar';
import { ProductoCard } from './components/ProductoCard'
import { Header } from './components/Header';

const productos = [{nombre: "App de cosméticos", descripción: "Catálogo de producto y compras", 
  tecnologías: ["React", "TypeScript", "API" ]}];

function App() {
  return (
    <div>
      <Navbar nombre="Posata" links={["Home", "Productos", "Contacto"]}/>
  <main>
  {productos.map((p) => (
    <ProductoCard key={p.nombre} {...p} />

  ))}
  </main>
  </div>

    );
  }

  export default App