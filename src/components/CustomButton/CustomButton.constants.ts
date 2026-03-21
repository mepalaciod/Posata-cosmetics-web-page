//CustomButton.constants.ts

import type { ButtonVariant } from './CustomButton.types';

export const VARIANT_LABELS: Record<ButtonVariant, string> = {
    primary: 'Acción Principal',
    secondary: 'Acción Secundaria',
    danger: 'Acción Peligrosa',
};

export const DEFAULT_VARIANT: ButtonVariant = 'primary';
