# Sistema de Diseño — Posata Cosmetics

> **Última actualización:** 2026-02-20  
> **Estado:** Fase 1 — Definición inicial (pendiente validación visual)

---

## 1. Filosofía de Diseño

Posata Cosmetics proyecta una imagen **elegante, femenina y profesional**. El diseño debe transmitir confianza, sofisticación y cercanía. Se prioriza una estética limpia con espacios amplios, tipografía legible y fotografía de producto como protagonista.

### Principios
- **Claridad:** El usuario encuentra lo que busca sin fricción
- **Elegancia:** Diseño refinado acorde a la industria cosmética
- **Consistencia:** Componentes reutilizables con estilos unificados
- **Mobile-first:** Diseñado primero para móvil, escalado a desktop
- **Accesibilidad:** Contraste adecuado, textos legibles, navegación con teclado

---

## 2. Paleta de Colores

> **Nota:** Estos colores son una propuesta inicial basada en la identidad visual de Posata. Deben validarse con el propietario.

### Colores Principales

| Nombre | Hex | Uso |
|--------|-----|-----|
| Rosa Posata | `#D4A0A0` | Color primario de marca, CTAs principales, acentos |
| Rosa Oscuro | `#B07070` | Hover de botones primarios, bordes activos |
| Negro Elegante | `#1A1A1A` | Textos principales, encabezados |
| Blanco Puro | `#FFFFFF` | Fondo principal, textos sobre fondo oscuro |
| Gris Claro | `#F5F5F5` | Fondos secundarios, secciones alternas |

### Colores Secundarios

| Nombre | Hex | Uso |
|--------|-----|-----|
| Gris Texto | `#666666` | Textos secundarios, descripciones |
| Gris Borde | `#E0E0E0` | Bordes de tarjetas, separadores |
| Dorado Sutil | `#C9A96E` | Detalles premium, badges de marca |
| Verde Éxito | `#4CAF50` | Mensajes de éxito, stock disponible |
| Rojo Error | `#E53935` | Errores, validaciones fallidas |
| Amarillo Aviso | `#FFC107` | Avisos, advertencias |

### Variables CSS

```css
:root {
  /* Colores principales */
  --color-primary: #D4A0A0;
  --color-primary-dark: #B07070;
  --color-text: #1A1A1A;
  --color-white: #FFFFFF;
  --color-bg-secondary: #F5F5F5;

  /* Colores secundarios */
  --color-text-secondary: #666666;
  --color-border: #E0E0E0;
  --color-accent: #C9A96E;
  --color-success: #4CAF50;
  --color-error: #E53935;
  --color-warning: #FFC107;
}
```

---

## 3. Tipografía

### Fuentes

| Rol | Fuente | Fallback | Peso |
|-----|--------|----------|------|
| Encabezados | Playfair Display | Georgia, serif | 400, 700 |
| Cuerpo | Inter | Arial, sans-serif | 300, 400, 500, 600 |
| Botones / UI | Inter | Arial, sans-serif | 500, 600 |

> Se cargan desde Google Fonts.

### Escala Tipográfica

| Elemento | Desktop | Mobile | Peso | Interlineado |
|----------|---------|--------|------|-------------|
| H1 | 48px (3rem) | 32px (2rem) | 700 | 1.2 |
| H2 | 36px (2.25rem) | 28px (1.75rem) | 700 | 1.2 |
| H3 | 28px (1.75rem) | 22px (1.375rem) | 600 | 1.3 |
| H4 | 22px (1.375rem) | 18px (1.125rem) | 600 | 1.3 |
| Body | 16px (1rem) | 16px (1rem) | 400 | 1.6 |
| Small | 14px (0.875rem) | 14px (0.875rem) | 400 | 1.5 |
| Caption | 12px (0.75rem) | 12px (0.75rem) | 400 | 1.4 |

### Variables CSS

```css
:root {
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', Arial, sans-serif;

  --fs-h1: 3rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.75rem;
  --fs-h4: 1.375rem;
  --fs-body: 1rem;
  --fs-small: 0.875rem;
  --fs-caption: 0.75rem;

  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
}
```

---

## 4. Espaciado

### Sistema de Espaciado (Base 8px)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-xs` | 4px | Espaciado mínimo interno |
| `--space-sm` | 8px | Padding de chips, badges |
| `--space-md` | 16px | Padding de botones, gap entre elementos |
| `--space-lg` | 24px | Margen entre secciones pequeñas |
| `--space-xl` | 32px | Margen entre componentes |
| `--space-2xl` | 48px | Margen entre secciones principales |
| `--space-3xl` | 64px | Padding de secciones hero |
| `--space-4xl` | 96px | Separación máxima entre secciones |

```css
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
}
```

---

## 5. Breakpoints (Responsive)

| Nombre | Ancho mínimo | Dispositivo |
|--------|-------------|-------------|
| mobile | 0px | Móviles |
| tablet | 768px | Tablets |
| desktop | 1024px | Laptops |
| wide | 1280px | Monitores grandes |

```css
/* Mobile-first: estilos base son mobile */
/* Tablet */
@media (min-width: 768px) { }
/* Desktop */
@media (min-width: 1024px) { }
/* Wide */
@media (min-width: 1280px) { }
```

---

## 6. Componentes UI

### 6.1 Botones

| Variante | Fondo | Texto | Borde | Uso |
|----------|-------|-------|-------|-----|
| Primary | `--color-primary` | `--color-white` | ninguno | CTAs principales: "Agregar al carrito", "Comprar" |
| Secondary | transparente | `--color-primary` | `--color-primary` | Acciones secundarias: "Ver más", "Filtrar" |
| Ghost | transparente | `--color-text` | ninguno | Navegación, links |
| Danger | `--color-error` | `--color-white` | ninguno | Eliminar, cancelar |

**Estados:**
- Default → Hover (oscurecer 10%) → Active (oscurecer 15%) → Disabled (opacidad 50%)

**Tamaños:**
- Small: padding 8px 16px, font-size 14px
- Medium: padding 12px 24px, font-size 16px
- Large: padding 16px 32px, font-size 18px

```css
.btn {
  font-family: var(--font-body);
  font-weight: var(--fw-semibold);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}

.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn--md {
  padding: var(--space-sm) var(--space-lg);
  font-size: var(--fs-body);
}
```

### 6.2 Tarjeta de Producto

```
┌─────────────────────┐
│                     │
│    [Imagen 1:1]     │
│                     │
├─────────────────────┤
│ Marca (caption)     │
│ Nombre del producto │
│ $XX.XXX COP         │
│ [Agregar al carrito]│
└─────────────────────┘
```

- Aspect ratio de imagen: 1:1
- Border-radius: 12px
- Box-shadow sutil en hover
- Tamaño de grid: 4 columnas desktop, 2 tablet, 1-2 mobile

### 6.3 Barra de Navegación (Navbar)

- **Desktop:** Logo izquierda | Links centro | Carrito + Login derecha
- **Mobile:** Logo izquierda | Hamburguesa derecha → menú lateral (drawer)
- Sticky en scroll
- Altura: 64px desktop, 56px mobile
- Links: Inicio, Marcas (dropdown), Productos, Sobre Nosotros, Contacto

### 6.4 Dropdown de Marcas

- Se despliega al hacer hover (desktop) o click (mobile)
- Lista vertical con el nombre de cada marca
- Icono o logo pequeño de cada marca (opcional)

### 6.5 Input / Campo de Formulario

- Border: 1px solid `--color-border`
- Border-radius: 8px
- Padding: 12px 16px
- Focus: border-color `--color-primary`, box-shadow sutil
- Error: border-color `--color-error`, mensaje de error debajo
- Label encima del campo

### 6.6 Badge / Chip

- Para etiquetas de marca, categoría, estado de pedido
- Border-radius: 20px (pill)
- Padding: 4px 12px
- Font-size: 12px

### 6.7 Footer

- Fondo oscuro (`--color-text`)
- Columnas: Info de contacto | Links rápidos | Marcas | Redes sociales
- Copyright en la parte inferior
- Responsive: de 4 columnas a 1 columna en mobile

---

## 7. Iconografía

- Librería sugerida: **Lucide Icons** (open source, ligeros, consistentes)
- Tamaños estándar: 16px, 20px, 24px
- Stroke-width: 1.5px
- Color: hereda del texto padre

Iconos clave necesarios:
- Carrito de compras
- Búsqueda (lupa)
- Usuario / Login
- WhatsApp
- Menú hamburguesa
- Flecha / Chevron (para dropdowns)
- Corazón (wishlist futuro)
- Filtro
- Cerrar (X)

---

## 8. Imágenes

### Producto
- Formato: WebP (con fallback JPG)
- Tamaños: 400x400 (thumbnail), 800x800 (detalle)
- Fondo blanco o transparente para consistencia
- Lazy loading obligatorio

### Banner / Hero
- Ancho completo (1920px máx)
- Altura recomendada: 500px desktop, 300px mobile
- Overlay oscuro sobre texto si la imagen es clara

---

## 9. Sombras y Bordes

```css
:root {
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}
```

---

## 10. Animaciones y Transiciones

- Duración estándar: `200ms` para interacciones, `300ms` para apariciones
- Easing: `ease` para la mayoría, `ease-out` para entradas
- Hover en tarjetas: `transform: translateY(-4px)` + `box-shadow: var(--shadow-md)`
- Sin animaciones excesivas ni distractivas

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease-out;
}
```

---

## Referencias

- [Alcance del Proyecto](./alcance_del_proyecto.md)
- [Arquitectura del Proyecto](./arquitectura_del_proyecto.md)
- [Fases del Proyecto](./fases_del_proyecto.md)
