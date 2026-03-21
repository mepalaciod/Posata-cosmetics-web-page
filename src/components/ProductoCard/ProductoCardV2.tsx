// ProductoCardV2.tsx
import { useState } from 'react'; 
import { CustomButton } from '../CustomButton/CustomButton';
import type { ProductoCardProps } from './ProductoCard.types';
import { ADD_LABEL, ADDED_LABEL, CURRENCY } from './ProductoCard.constants';
import styles from './ProductoCard.module.css';

export const ProductoCardV2 = ({ product, onAddToCart }: ProductoCardProps) => {
    const [added, setAdded] = useState(false); 
        const handleAdd = () => {
        setAdded(true);
        onAddToCart(product.id); //notifica al componente padre
    };

    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: CURRENCY,
        maximumFractionDigits: 0,
    }).format(product.price);

    return (
        <div className={`${styles.card} ${added ? styles.added : ''}`}>
            <div className={styles.emoji}>{product.emoji}</div>
            <span className={styles.category}>{product.category}</span>
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.price}>{formattedPrice}</p>

            {/* CustomButton vive DENTRO de ProductoCard */}
            <CustomButton
                label={added ? ADDED_LABEL : ADD_LABEL}
                variant={added ? 'secondary' : 'primary'}
                onClick={handleAdd}
                disabled={added}
            />
        </div>
    );
};

