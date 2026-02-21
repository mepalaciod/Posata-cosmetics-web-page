# Arquitectura del Proyecto — Posata Cosmetics

> **Última actualización:** 2026-02-20  
> **Estado:** Fase 1 — Documentación y Maquetación

---

## 1. Stack Tecnológico

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| **Lenguaje** | TypeScript | Tipado estático, prevención de errores, mejor DX |
| **Frontend** | React 18+ | Componentización, ecosistema maduro, SPA |
| **Estilos** | CSS puro (Custom Properties) | Control total, aprendizaje profundo, sin dependencias |
| **Base de datos** | Firebase Firestore | NoSQL en tiempo real, integración directa con frontend |
| **Autenticación** | Firebase Auth | Email/password + Google, integración nativa con Firestore |
| **Almacenamiento** | Firebase Storage | Imágenes de productos y assets |
| **Hosting** | Firebase Hosting | CDN global, SSL gratuito, deploy integrado |
| **Pagos** | MercadoPago SDK | Amplia cobertura en Colombia, múltiples medios de pago |
| **Envíos** | API transportadora colombiana | Cálculo automático de tarifas por departamento |
| **Control de versiones** | Git + GitHub | Historial, colaboración, CI/CD futuro |

---

## 2. Estructura de Archivos

### Fase 1 — HTML + CSS (Maquetación)

```
posata-cosmetics/
├── docs/                          # Documentación del proyecto
│   ├── alcance_del_proyecto.md
│   ├── arquitectura_del_proyecto.md
│   ├── fases_del_proyecto.md
│   └── sistema_de_diseño.md
│
├── assets/                        # Recursos estáticos
│   ├── images/
│   │   ├── logo/                  # Logo en diferentes formatos
│   │   ├── products/              # Imágenes de productos (placeholder)
│   │   ├── banners/               # Banners para hero y promos
│   │   └── brands/                # Logos de marcas
│   └── icons/                     # Iconos SVG si no se usa librería
│
├── css/                           # Hojas de estilo
│   ├── reset.css                  # CSS Reset / Normalize
│   ├── variables.css              # Custom Properties (tokens de diseño)
│   ├── global.css                 # Estilos globales (body, tipografía)
│   ├── components/                # Estilos por componente
│   │   ├── navbar.css
│   │   ├── footer.css
│   │   ├── product-card.css
│   │   ├── button.css
│   │   ├── input.css
│   │   ├── dropdown.css
│   │   ├── cart.css
│   │   └── badge.css
│   └── pages/                     # Estilos específicos por página
│       ├── home.css
│       ├── catalog.css
│       ├── product-detail.css
│       ├── cart.css
│       ├── checkout.css
│       ├── about.css
│       ├── contact.css
│       └── tracking.css
│
├── pages/                         # Páginas HTML
│   ├── index.html                 # Home / Inicio
│   ├── catalog.html               # Catálogo de productos
│   ├── product.html               # Detalle de producto
│   ├── cart.html                  # Carrito de compras
│   ├── checkout.html              # Proceso de pago
│   ├── about.html                 # Sobre Nosotros
│   ├── contact.html               # Contacto / WhatsApp
│   └── tracking.html              # Seguimiento de pedidos
│
├── Logo.png                       # Logo existente
├── README.md                      # Estado general del proyecto
└── .gitignore
```

### Fase 2 y 3 — React + TypeScript + Firebase

```
posata-cosmetics/
├── docs/                          # Documentación (se mantiene)
│
├── public/                        # Assets estáticos
│   ├── favicon.ico
│   └── images/
│       ├── logo/
│       ├── products/
│       ├── banners/
│       └── brands/
│
├── src/
│   ├── assets/                    # Assets importados por React
│   │   └── icons/
│   │
│   ├── components/                # Componentes reutilizables
│   │   ├── ui/                    # Componentes base (atómicos)
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.css
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Input.css
│   │   │   ├── Badge/
│   │   │   ├── Dropdown/
│   │   │   └── ProductCard/
│   │   │
│   │   └── layout/                # Componentes de estructura
│   │       ├── Navbar/
│   │       │   ├── Navbar.tsx
│   │       │   └── Navbar.css
│   │       ├── Footer/
│   │       └── Sidebar/
│   │
│   ├── pages/                     # Páginas (vistas completas)
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.css
│   │   │   └── components/        # Componentes exclusivos de la página
│   │   │       ├── HeroSection.tsx
│   │   │       └── RecommendedProducts.tsx
│   │   ├── Catalog/
│   │   │   ├── Catalog.tsx
│   │   │   ├── Catalog.css
│   │   │   └── components/
│   │   │       ├── FilterPanel.tsx
│   │   │       └── ProductGrid.tsx
│   │   ├── ProductDetail/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── Tracking/
│   │
│   ├── hooks/                     # Custom hooks
│   │   ├── useCart.ts
│   │   ├── useAuth.ts
│   │   ├── useProducts.ts
│   │   └── useShipping.ts
│   │
│   ├── context/                   # React Context providers
│   │   ├── CartContext.tsx
│   │   ├── AuthContext.tsx
│   │   └── FilterContext.tsx
│   │
│   ├── services/                  # Lógica de negocio y APIs
│   │   ├── firebase/
│   │   │   ├── config.ts          # Configuración de Firebase
│   │   │   ├── products.ts        # CRUD de productos
│   │   │   ├── orders.ts          # Gestión de pedidos
│   │   │   └── auth.ts            # Funciones de autenticación
│   │   ├── mercadopago/
│   │   │   └── payment.ts         # Integración con MercadoPago
│   │   └── shipping/
│   │       └── calculator.ts      # Cálculo de envíos
│   │
│   ├── types/                     # Tipos e interfaces TypeScript
│   │   ├── product.ts
│   │   ├── order.ts
│   │   ├── user.ts
│   │   ├── cart.ts
│   │   └── shipping.ts
│   │
│   ├── utils/                     # Funciones utilitarias
│   │   ├── formatCurrency.ts      # Formato COP ($XX.XXX)
│   │   ├── validators.ts          # Validación de formularios
│   │   └── constants.ts           # Constantes (marcas, categorías)
│   │
│   ├── styles/                    # Estilos globales
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── global.css
│   │
│   ├── App.tsx                    # Componente raíz
│   ├── App.css
│   ├── main.tsx                   # Entry point
│   └── router.tsx                 # Configuración de rutas
│
├── .env                           # Variables de entorno (NO en git)
├── .env.example                   # Ejemplo de variables de entorno
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts                 # Configuración de Vite
├── README.md
└── Logo.png
```

---

## 3. Modelo de Datos (Firebase Firestore)

### Colección: `products`

```typescript
interface Product {
  id: string;                    // Auto-generado por Firestore
  name: string;                  // "Esmalte Gel UV Rosa Intenso"
  description: string;           // Descripción detallada
  price: number;                 // Precio en COP (ej: 25000)
  brand: Brand;                  // "ANI-K" | "BLOOMSHELL" | etc.
  category: Category;            // "cosmeticos" | "unas" | "cabello"
  imageUrl: string;              // URL de Firebase Storage
  images: string[];              // URLs adicionales
  keywords: string[];            // Palabras clave para búsqueda
  stock: number;                 // Cantidad disponible
  isActive: boolean;             // Visible en el catálogo
  isFeatured: boolean;           // Aparece en recomendados
  salesCount: number;            // Contador de ventas (para "más vendidos")
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

type Brand = 
  | "ANI-K" 
  | "BLOOMSHELL" 
  | "MILAGROS" 
  | "LATTIN_NAILS" 
  | "LA_POCION" 
  | "RITUAL_BOTANICO";

type Category = "cosmeticos" | "unas" | "cabello";
```

### Colección: `orders`

```typescript
interface Order {
  id: string;
  userId: string | null;         // null si compró como invitado
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
    department: string;           // Departamento de Colombia
    city: string;
    address: string;
    addressDetail: string;        // Apto, piso, etc.
  };
  items: OrderItem[];
  subtotal: number;              // Suma de (precio × cantidad)
  shippingCost: number;          // Calculado por API transportadora
  total: number;                 // subtotal + shippingCost
  paymentStatus: PaymentStatus;
  paymentId: string;             // ID de transacción MercadoPago
  shippingStatus: ShippingStatus;
  trackingNumber: string;        // Número de guía transportadora
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

interface OrderItem {
  productId: string;
  productName: string;
  brand: Brand;
  price: number;
  quantity: number;
  imageUrl: string;
}

type PaymentStatus = "pending" | "approved" | "rejected" | "refunded";
type ShippingStatus = "processing" | "shipped" | "in_transit" | "delivered";
```

### Colección: `users` (solo usuarios registrados)

```typescript
interface User {
  id: string;                     // UID de Firebase Auth
  email: string;
  displayName: string;
  phone: string;
  addresses: Address[];           // Direcciones guardadas
  createdAt: Timestamp;
}

interface Address {
  label: string;                  // "Casa", "Oficina"
  department: string;
  city: string;
  address: string;
  addressDetail: string;
  isDefault: boolean;
}
```

---

## 4. Arquitectura de la Aplicación

### Diagrama de Alto Nivel

```
┌──────────────────────────────────────────────────────────────┐
│                        CLIENTE (Browser)                      │
│                                                               │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────┐ │
│  │   React +    │  │   React      │  │   CSS Custom        │ │
│  │   TypeScript │  │   Router     │  │   Properties        │ │
│  └──────┬───────┘  └──────┬───────┘  └─────────────────────┘ │
│         │                 │                                    │
│  ┌──────┴─────────────────┴──────────────────────────────┐   │
│  │              Context API (Estado Global)                │   │
│  │          CartContext | AuthContext | FilterContext       │   │
│  └──────────────────────┬────────────────────────────────┘   │
│                         │                                     │
│  ┌──────────────────────┴────────────────────────────────┐   │
│  │                Services Layer                          │   │
│  │   firebase/  │  mercadopago/  │  shipping/             │   │
│  └──────┬───────────────┬────────────────┬───────────────┘   │
└─────────┼───────────────┼────────────────┼───────────────────┘
          │               │                │
          ▼               ▼                ▼
  ┌───────────────┐ ┌──────────┐  ┌─────────────────┐
  │   Firebase    │ │MercadoPago│  │  API            │
  │  Firestore    │ │   API    │  │  Transportadora  │
  │  Auth         │ │          │  │  (Envíos)        │
  │  Storage      │ │          │  │                  │
  │  Hosting      │ │          │  │                  │
  └───────────────┘ └──────────┘  └─────────────────┘
```

### Flujo de Navegación (Rutas)

| Ruta | Página | Componente | Descripción |
|------|--------|-----------|-------------|
| `/` | Home | `<Home />` | Inicio con productos recomendados |
| `/catalogo` | Catálogo | `<Catalog />` | Listado con filtros |
| `/catalogo/:brand` | Catálogo filtrado | `<Catalog />` | Productos de una marca |
| `/producto/:id` | Detalle | `<ProductDetail />` | Producto individual |
| `/carrito` | Carrito | `<Cart />` | Carrito de compras |
| `/checkout` | Checkout | `<Checkout />` | Proceso de pago |
| `/sobre-nosotros` | Sobre Nosotros | `<About />` | Historia de Posata |
| `/contacto` | Contacto | `<Contact />` | WhatsApp y contacto |
| `/seguimiento` | Tracking | `<Tracking />` | Seguimiento de pedidos |
| `/login` | Login | `<Login />` | Inicio de sesión |
| `/registro` | Registro | `<Register />` | Crear cuenta |
| `/perfil` | Perfil | `<Profile />` | Datos y pedidos del usuario |

---

## 5. Gestión de Estado

| Estado | Mecanismo | Persistencia |
|--------|-----------|-------------|
| Carrito de compras | `CartContext` + `useReducer` | `localStorage` (sesión del navegador) |
| Autenticación | `AuthContext` + Firebase Auth | Firebase (token persistido) |
| Filtros del catálogo | `FilterContext` o URL params | URL (compartible) |
| Datos de productos | Fetch directo de Firestore | Cache en memoria |
| Datos de formulario | `useState` local | No persiste |

---

## 6. Integraciones Externas

### 6.1 MercadoPago

- **SDK:** MercadoPago JS SDK v2
- **Flujo:** Checkout Pro (redirección a MercadoPago) o Checkout API (formulario embebido)
- **Medios de pago soportados en Colombia:**
  - Tarjetas de crédito (Visa, Mastercard, AMEX)
  - Tarjetas débito
  - PSE (transferencia bancaria)
  - Efecty
  - Baloto
  - Nequi (si disponible)
- **Webhooks:** Notificaciones de estado de pago a un endpoint (Firebase Functions si es necesario)

### 6.2 API de Transportadora

- **Proveedor:** Por definir (Servientrega, Coordinadora, Interrapidísimo)
- **Funcionalidad requerida:**
  - Consultar tarifa por departamento/ciudad destino y peso
  - Generar guía de envío
  - Consultar estado de envío (tracking)
- **Fallback:** Tabla de tarifas fijas por departamento en caso de que la API no esté disponible

### 6.3 Firebase

- **Firestore:** Base de datos de productos, pedidos y usuarios
- **Auth:** Autenticación email/password y Google
- **Storage:** Almacenamiento de imágenes de productos
- **Hosting:** Despliegue de la SPA
- **Reglas de seguridad:** Definidas para proteger datos sensibles

---

## 7. Seguridad

| Aspecto | Implementación |
|---------|---------------|
| Variables sensibles | `.env` (no versionado), solo claves públicas en frontend |
| Firestore Rules | Lectura pública de productos, escritura restringida |
| Auth tokens | Manejados automáticamente por Firebase Auth |
| Pagos | Procesados por MercadoPago (PCI compliant) |
| HTTPS | Automático con Firebase Hosting |
| Validación | Validación en frontend + Firestore Rules como backup |

---

## 8. Performance

| Estrategia | Detalle |
|-----------|---------|
| Lazy loading de imágenes | `loading="lazy"` en todas las imágenes de productos |
| Code splitting | React.lazy() para páginas (carga bajo demanda) |
| Imágenes optimizadas | WebP con fallback JPG, tamaños múltiples |
| CSS minimal | Sin framework, solo lo necesario |
| Firestore queries | Paginación con `limit()` y `startAfter()` |
| Caching | Service Worker para assets estáticos (futuro) |

---

## 9. Decisiones Técnicas Documentadas

| # | Decisión | Alternativas consideradas | Razón |
|---|----------|--------------------------|-------|
| 1 | CSS puro en lugar de Bootstrap/Tailwind | Bootstrap, Tailwind CSS | Enfoque de aprendizaje, control total, sin dependencias innecesarias |
| 2 | Vite como bundler | Create React App, Next.js | Más rápido, moderno, mejor DX. CRA está deprecated |
| 3 | Context API en lugar de Redux | Redux, Zustand, Jotai | Suficiente para el tamaño del proyecto, sin dependencias adicionales |
| 4 | Firebase en lugar de backend propio | Node.js + Express, Supabase | Sin necesidad de gestionar servidor, SDK directo en frontend |
| 5 | MercadoPago en lugar de Stripe | Stripe, PayU, Wompi | Mayor cobertura de medios de pago en Colombia |
| 6 | Sin panel de administración | Panel admin custom | Complejidad innecesaria, Firebase Console es suficiente |
| 7 | Fases incrementales (HTML→React→Firebase) | Todo de una vez | Enfoque de aprendizaje progresivo |

---

## Referencias

- [Alcance del Proyecto](./alcance_del_proyecto.md)
- [Sistema de Diseño](./sistema_de_diseño.md)
- [Fases del Proyecto](./fases_del_proyecto.md)
