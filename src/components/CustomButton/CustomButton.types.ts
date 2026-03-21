// CustomButton.types.ts
export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface CustomButtonProps {
    label: string;
    variant?: ButtonVariant; // optional - default: 'primary'
    onClick?: () => void;
    disabled?: boolean; 
}