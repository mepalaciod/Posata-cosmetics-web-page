// CustomButton.tsx
import { useState } from 'react';
import type { CustomButtonProps } from './CustomButton.types';
import { DEFAULT_VARIANT } from './CustomButton.constants';
import styles from './CustomButton.module.css';

export const CustomButton = ({
    label, 
    variant = DEFAULT_VARIANT,
    onClick,
    disabled = false
}: CustomButtonProps) => {

    // useState: rastrea si el botón está 'presionado'
    const [pressed, setPressed] = useState (false);

    const handleClick = () => {
        setPressed(true); 
        onClick?.(); //optional chaining
        setTimeout(() => setPressed(false), 300);
    };

    const classNames = [

        styles.btn,
        styles[variant], //styles.primary | secondary | danger
        pressed ? styles.pressed : '',
    ].join(' ');

    return (
        <button
            className= {classNames}
            onClick={handleClick}
            disabled={disabled}
>       {label}</button>
    );
    };

    export default CustomButton; 