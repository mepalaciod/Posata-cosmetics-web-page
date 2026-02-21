# Fases del Proyecto — Posata Cosmetics

> **Última actualización:** 2026-02-20  
> **Estado actual:** Fase 1 — Subfase 1.1 (Documentación)

---

## Resumen de Fases

| Fase | Nombre | Tecnologías | Estado |
|------|--------|------------|--------|
| **1** | Documentación y Maquetación | HTML + CSS | 🟡 En progreso |
| **2** | Integración Frontend | React + TypeScript | ⚪ Pendiente |
| **3** | Integración Backend | Firebase + MercadoPago + Envíos | ⚪ Pendiente |

---

## Fase 1 — Documentación y Maquetación (HTML + CSS)

**Objetivo general:** Crear la documentación completa del proyecto y maquetar todas las páginas con HTML semántico y CSS puro, logrando un sitio estático visual y responsivo.

### Subfase 1.1 — Documentación Completa

**Objetivo:** Definir el alcance, arquitectura, sistema de diseño y plan de trabajo antes de escribir código.

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 1.1.1 | Definir alcance del proyecto | ✅ Completado | `docs/alcance_del_proyecto.md` |
| 1.1.2 | Definir sistema de diseño | ✅ Completado | `docs/sistema_de_diseño.md` |
| 1.1.3 | Definir arquitectura del proyecto | ✅ Completado | `docs/arquitectura_del_proyecto.md` |
| 1.1.4 | Definir fases del proyecto | ✅ Completado | `docs/fases_del_proyecto.md` |
| 1.1.5 | Actualizar README con estado del proyecto | ✅ Completado | `README.md` |

**Criterios de aceptación:**
- [ ] Toda la documentación está completa y revisada
- [ ] El README refleja el estado actual del proyecto
- [ ] La estructura de archivos está definida y documentada

---

### Subfase 1.2 — Estructura Base y Estilos Globales

**Objetivo:** Crear la estructura de carpetas, los archivos CSS base (reset, variables, global) y los componentes de layout compartidos (navbar, footer).

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 1.2.1 | Crear estructura de carpetas (css/, pages/, assets/) | ⬜ Pendiente | Carpetas creadas |
| 1.2.2 | Crear `css/reset.css` con CSS reset | ⬜ Pendiente | Reset funcional |
| 1.2.3 | Crear `css/variables.css` con todos los tokens del sistema de diseño | ⬜ Pendiente | Variables CSS cargadas |
| 1.2.4 | Crear `css/global.css` con estilos de tipografía y body | ⬜ Pendiente | Tipografía consistente |
| 1.2.5 | Maquetar el **Navbar** (responsive con menú hamburguesa) | ⬜ Pendiente | `css/components/navbar.css` |
| 1.2.6 | Maquetar el **Footer** (responsive, 4 columnas) | ⬜ Pendiente | `css/components/footer.css` |
| 1.2.7 | Crear plantilla HTML base con navbar + footer incluidos | ⬜ Pendiente | Template HTML base |

**Criterios de aceptación:**
- [ ] El navbar funciona en mobile (hamburguesa) y desktop (horizontal)
- [ ] El dropdown de marcas se despliega correctamente
- [ ] El footer se adapta de 4 columnas a 1 columna en mobile
- [ ] Las variables CSS están definidas y funcionando
- [ ] La tipografía de Google Fonts carga correctamente

---

### Subfase 1.3 — Componentes UI Reutilizables

**Objetivo:** Maquetar los componentes atómicos que se usarán en múltiples páginas.

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 1.3.1 | Maquetar **botones** (primary, secondary, ghost, danger, tamaños) | ⬜ Pendiente | `css/components/button.css` |
| 1.3.2 | Maquetar **tarjeta de producto** (imagen, marca, nombre, precio, CTA) | ⬜ Pendiente | `css/components/product-card.css` |
| 1.3.3 | Maquetar **inputs y formularios** (texto, select, estados) | ⬜ Pendiente | `css/components/input.css` |
| 1.3.4 | Maquetar **badges/chips** (marca, categoría, estado) | ⬜ Pendiente | `css/components/badge.css` |
| 1.3.5 | Maquetar **dropdown** genérico | ⬜ Pendiente | `css/components/dropdown.css` |

**Criterios de aceptación:**
- [ ] Cada componente tiene todos sus estados (default, hover, active, disabled)
- [ ] Los componentes son responsive
- [ ] Se usan las variables CSS del sistema de diseño

---

### Subfase 1.4 — Páginas Completas

**Objetivo:** Maquetar todas las páginas del sitio usando los componentes creados, con datos placeholder (hardcoded).

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 1.4.1 | Maquetar **Home** (hero, productos recomendados, marcas) | ⬜ Pendiente | `pages/index.html` + `css/pages/home.css` |
| 1.4.2 | Maquetar **Catálogo** (grid productos, panel filtros, búsqueda) | ⬜ Pendiente | `pages/catalog.html` + `css/pages/catalog.css` |
| 1.4.3 | Maquetar **Detalle de Producto** (imagen, info, agregar al carrito) | ⬜ Pendiente | `pages/product.html` + `css/pages/product-detail.css` |
| 1.4.4 | Maquetar **Carrito** (listado, cantidades, resumen) | ⬜ Pendiente | `pages/cart.html` + `css/pages/cart.css` |
| 1.4.5 | Maquetar **Checkout** (formulario envío, resumen, botón pagar) | ⬜ Pendiente | `pages/checkout.html` + `css/pages/checkout.css` |
| 1.4.6 | Maquetar **Sobre Nosotros** (historia, misión, valores) | ⬜ Pendiente | `pages/about.html` + `css/pages/about.css` |
| 1.4.7 | Maquetar **Contacto** (WhatsApp, formulario, info) | ⬜ Pendiente | `pages/contact.html` + `css/pages/contact.css` |
| 1.4.8 | Maquetar **Seguimiento** (input guía, resultado estado) | ⬜ Pendiente | `pages/tracking.html` + `css/pages/tracking.css` |

**Criterios de aceptación:**
- [ ] Todas las páginas son responsive (mobile, tablet, desktop)
- [ ] La navegación entre páginas funciona con `<a href>`
- [ ] Los datos placeholder representan contenido realista
- [ ] Se mantiene consistencia visual en todas las páginas
- [ ] Las imágenes tienen lazy loading
- [ ] El HTML es semántico (header, main, section, article, footer, nav)

---

### Subfase 1.5 — Revisión y Pulido

**Objetivo:** Revisar accesibilidad, performance, cross-browser y corregir detalles.

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 1.5.1 | Revisar accesibilidad (alt text, contraste, focus, skip links) | ⬜ Pendiente | Correcciones aplicadas |
| 1.5.2 | Revisar responsive en dispositivos reales o DevTools | ⬜ Pendiente | Correcciones aplicadas |
| 1.5.3 | Validar HTML con W3C Validator | ⬜ Pendiente | 0 errores |
| 1.5.4 | Validar CSS con W3C CSS Validator | ⬜ Pendiente | 0 errores |
| 1.5.5 | Optimizar imágenes (WebP, tamaños correctos) | ⬜ Pendiente | Imágenes optimizadas |
| 1.5.6 | Documentar lo aprendido y actualizar README | ⬜ Pendiente | README actualizado |

**Criterios de aceptación:**
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 90
- [ ] Sin errores de validación HTML/CSS
- [ ] Funcional en Chrome, Firefox, Edge y Safari

---

## Fase 2 — Integración Frontend (React + TypeScript)

**Objetivo general:** Migrar la maqueta estática a una SPA con React y TypeScript, agregando interactividad (carrito, filtros, búsqueda) sin backend aún. Se usan datos mock.

### Subfase 2.1 — Setup del Proyecto React

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 2.1.1 | Inicializar proyecto con Vite + React + TypeScript | ⬜ Pendiente | `package.json`, `tsconfig.json` |
| 2.1.2 | Migrar estilos CSS globales (reset, variables, global) | ⬜ Pendiente | `src/styles/` |
| 2.1.3 | Configurar React Router | ⬜ Pendiente | `src/router.tsx` |
| 2.1.4 | Configurar estructura de carpetas (`src/`) | ⬜ Pendiente | Estructura creada |

---

### Subfase 2.2 — Componentes React

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 2.2.1 | Migrar Navbar a componente React (con dropdown funcional) | ⬜ Pendiente | `src/components/layout/Navbar/` |
| 2.2.2 | Migrar Footer a componente React | ⬜ Pendiente | `src/components/layout/Footer/` |
| 2.2.3 | Crear componente Button (con variantes y tamaños como props) | ⬜ Pendiente | `src/components/ui/Button/` |
| 2.2.4 | Crear componente ProductCard | ⬜ Pendiente | `src/components/ui/ProductCard/` |
| 2.2.5 | Crear componente Input (con validación) | ⬜ Pendiente | `src/components/ui/Input/` |
| 2.2.6 | Crear componentes Badge, Dropdown | ⬜ Pendiente | `src/components/ui/` |

---

### Subfase 2.3 — Páginas y Rutas

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 2.3.1 | Crear página Home con datos mock | ⬜ Pendiente | `src/pages/Home/` |
| 2.3.2 | Crear página Catálogo con filtros funcionales (datos mock) | ⬜ Pendiente | `src/pages/Catalog/` |
| 2.3.3 | Crear página Detalle de Producto | ⬜ Pendiente | `src/pages/ProductDetail/` |
| 2.3.4 | Crear páginas estáticas (About, Contact) | ⬜ Pendiente | `src/pages/About/`, `src/pages/Contact/` |

---

### Subfase 2.4 — Gestión de Estado y Lógica

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 2.4.1 | Definir tipos TypeScript (Product, Order, User, Cart) | ⬜ Pendiente | `src/types/` |
| 2.4.2 | Implementar CartContext + useCart (agregar, eliminar, actualizar) | ⬜ Pendiente | `src/context/CartContext.tsx` |
| 2.4.3 | Implementar FilterContext (marca, categoría, búsqueda, precio) | ⬜ Pendiente | `src/context/FilterContext.tsx` |
| 2.4.4 | Crear página Carrito funcional (persistencia localStorage) | ⬜ Pendiente | `src/pages/Cart/` |
| 2.4.5 | Crear página Checkout (formulario con validación, sin pago real) | ⬜ Pendiente | `src/pages/Checkout/` |
| 2.4.6 | Crear utilidades (formatCurrency, validators, constants) | ⬜ Pendiente | `src/utils/` |

---

### Subfase 2.5 — Revisión Fase 2

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 2.5.1 | Testing manual de flujo completo (navegar → carrito → checkout) | ⬜ Pendiente | Bugs corregidos |
| 2.5.2 | Revisar tipado TypeScript (sin `any`, interfaces completas) | ⬜ Pendiente | TSC sin errores |
| 2.5.3 | Code review y refactorización | ⬜ Pendiente | Código limpio |
| 2.5.4 | Actualizar documentación y README | ⬜ Pendiente | Docs actualizados |

---

## Fase 3 — Integración Backend (Firebase + Pagos + Envíos)

**Objetivo general:** Conectar la aplicación con Firebase (datos reales), integrar MercadoPago para pagos y la API de transportadora para envíos. Desplegar el sitio.

### Subfase 3.1 — Firebase Setup

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 3.1.1 | Crear proyecto en Firebase Console | ⬜ Pendiente | Proyecto Firebase activo |
| 3.1.2 | Configurar Firestore (colecciones, reglas de seguridad) | ⬜ Pendiente | `firebase/config.ts` |
| 3.1.3 | Configurar Firebase Storage (reglas, carpeta de imágenes) | ⬜ Pendiente | Storage configurado |
| 3.1.4 | Configurar Firebase Auth (email/password + Google) | ⬜ Pendiente | Auth habilitado |
| 3.1.5 | Cargar productos iniciales en Firestore | ⬜ Pendiente | Datos de prueba |

---

### Subfase 3.2 — Integración de Datos

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 3.2.1 | Crear servicio `products.ts` (fetch, filtro, paginación) | ⬜ Pendiente | `src/services/firebase/products.ts` |
| 3.2.2 | Crear servicio `orders.ts` (crear pedido, consultar estado) | ⬜ Pendiente | `src/services/firebase/orders.ts` |
| 3.2.3 | Crear servicio `auth.ts` (login, register, logout, onAuthStateChanged) | ⬜ Pendiente | `src/services/firebase/auth.ts` |
| 3.2.4 | Implementar AuthContext con Firebase Auth real | ⬜ Pendiente | `src/context/AuthContext.tsx` |
| 3.2.5 | Reemplazar datos mock por datos de Firestore en todas las páginas | ⬜ Pendiente | Datos reales funcionando |
| 3.2.6 | Implementar página de perfil con historial de pedidos | ⬜ Pendiente | `src/pages/Profile/` |

---

### Subfase 3.3 — Integración de Pagos (MercadoPago)

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 3.3.1 | Crear cuenta MercadoPago y obtener credenciales | ⬜ Pendiente | API Keys |
| 3.3.2 | Implementar servicio `payment.ts` | ⬜ Pendiente | `src/services/mercadopago/payment.ts` |
| 3.3.3 | Integrar flujo de pago en Checkout | ⬜ Pendiente | Checkout funcional |
| 3.3.4 | Manejar callbacks (éxito, pendiente, fallo) | ⬜ Pendiente | Páginas de resultado |
| 3.3.5 | Probar con credenciales de sandbox | ⬜ Pendiente | Pagos de prueba exitosos |

---

### Subfase 3.4 — Integración de Envíos

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 3.4.1 | Seleccionar transportadora y obtener acceso a API | ⬜ Pendiente | Credenciales API |
| 3.4.2 | Implementar servicio `calculator.ts` (tarifa por departamento) | ⬜ Pendiente | `src/services/shipping/calculator.ts` |
| 3.4.3 | Integrar cálculo de envío en Checkout | ⬜ Pendiente | Tarifa dinámica |
| 3.4.4 | Implementar página de seguimiento con tracking real | ⬜ Pendiente | `src/pages/Tracking/` |
| 3.4.5 | Crear fallback con tabla de tarifas fijas | ⬜ Pendiente | Fallback funcional |

---

### Subfase 3.5 — Despliegue y Lanzamiento

| # | Tarea | Estado | Entregable |
|---|-------|--------|-----------|
| 3.5.1 | Configurar Firebase Hosting | ⬜ Pendiente | `firebase.json` |
| 3.5.2 | Configurar dominio personalizado (si aplica) | ⬜ Pendiente | DNS configurado |
| 3.5.3 | Configurar variables de entorno de producción | ⬜ Pendiente | `.env.production` |
| 3.5.4 | Pruebas E2E del flujo completo | ⬜ Pendiente | Flujo sin errores |
| 3.5.5 | Optimización de performance (Lighthouse) | ⬜ Pendiente | Score ≥ 90 |
| 3.5.6 | Deploy a producción | ⬜ Pendiente | Sitio en vivo |
| 3.5.7 | Documentación final y README actualizado | ⬜ Pendiente | Toda la doc al día |

---

## Convenciones de Estado

| Símbolo | Significado |
|---------|------------|
| ✅ | Completado |
| 🟡 | En progreso |
| ⬜ | Pendiente |
| ❌ | Bloqueado |

---

## Referencias

- [Alcance del Proyecto](./alcance_del_proyecto.md)
- [Arquitectura del Proyecto](./arquitectura_del_proyecto.md)
- [Sistema de Diseño](./sistema_de_diseño.md)
