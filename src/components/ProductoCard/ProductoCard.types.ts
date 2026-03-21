// ProductoCard.types.ts

export interface Producto {
    id: number; 
    name: string;
    price: number;
    category: string;
    emoji: string; // para representar el producto visualmente
}

export interface ProductoCardProps {
    product: Producto; // recibe el objeto completo
    onAddToCart: (id: number) => void; // callback hacia el padre
}