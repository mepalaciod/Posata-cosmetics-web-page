# Alcance del Proyecto — Posata Cosmetics

> **Última actualización:** 2026-02-20  
> **Estado:** Fase 1 — Documentación y Maquetación

---

## 1. Descripción General

**Posata Cosmetics** es una plataforma e-commerce orientada a la venta de cosméticos, productos para uñas y productos para el cabello a nivel nacional (Colombia). El sitio funciona como catálogo digital y tienda en línea, permitiendo a los clientes explorar productos por marca o categoría, agregarlos al carrito y realizar el pago con múltiples medios de pago a través de MercadoPago.

---

## 2. Objetivos del Proyecto

| # | Objetivo | Métrica de éxito |
|---|----------|------------------|
| 1 | Crear una tienda online funcional para Posata Cosmetics | Flujo completo: navegación → carrito → pago → confirmación |
| 2 | Permitir pagos con todos los medios disponibles en Colombia | Integración exitosa con MercadoPago |
| 3 | Calcular envíos automáticamente por departamento | Integración con API de transportadora colombiana |
| 4 | Ofrecer una experiencia de búsqueda y filtrado eficiente | El usuario encuentra cualquier producto en ≤3 clics |
| 5 | Permitir registro opcional de clientes | Firebase Auth funcionando con email y Google |
| 6 | Ser responsive y accesible desde cualquier dispositivo | Funcional en móvil, tablet y desktop |

---

## 3. Marcas Disponibles

| Marca | Categoría principal |
|-------|-------------------|
| ANI-K | Cosméticos |
| BLOOMSHELL | Cosméticos |
| MILAGROS | Cuidado capilar |
| LATTIN NAILS | Productos para uñas |
| LA POCIÓN | Cuidado capilar / Tratamientos |
| RITUAL BOTÁNICO | Cuidado capilar / Tratamientos |

> **Nota:** El sistema debe permitir agregar nuevas marcas en el futuro sin modificar la estructura de la aplicación.

---

## 4. Funcionalidades Principales

### 4.1 Página de Inicio (Home)
- Hero section con banner principal de la marca
- Sección de **productos recomendados** (más vendidos)
- Acceso rápido a categorías y marcas
- Barra de navegación con menú desplegable de marcas

### 4.2 Catálogo de Productos
- Listado de productos con imagen, nombre, precio y marca
- **Filtros por:**
  - Marca (desplegable con las 6 marcas)
  - Categoría (cosméticos, uñas, cabello)
  - Palabras clave (búsqueda libre)
  - Rango de precio
- Ordenamiento (precio ascendente/descendente, más vendidos, más recientes)
- Paginación o scroll infinito

### 4.3 Página de Producto Individual
- Imagen(es) del producto
- Nombre, descripción detallada, precio
- Marca y categoría
- Selector de cantidad
- Botón "Agregar al carrito"
- Productos relacionados

### 4.4 Carrito de Compras
- Listado de productos agregados con cantidad y subtotal
- Modificar cantidad o eliminar productos
- Cálculo de subtotal, envío y total
- Botón para proceder al pago

### 4.5 Proceso de Pago (Checkout)
- Formulario de datos de envío (nombre, dirección, departamento, ciudad, teléfono)
- Selección de departamento → cálculo automático de tarifa de envío vía API de transportadora
- Resumen del pedido
- Integración con **MercadoPago** para procesar el pago
- Medios de pago: tarjetas crédito/débito, PSE, Nequi, Efecty, Baloto, etc.

### 4.6 Autenticación (Opcional)
- Registro con email/contraseña
- Inicio de sesión con Google (Firebase Auth)
- Perfil del usuario con historial de pedidos
- El registro **no es obligatorio** para comprar

### 4.7 Página "Sobre Nosotros"
- Historia de Posata Cosmetics
- Misión, visión y valores
- Equipo o marca personal

### 4.8 Página de Contacto
- Enlace directo a **WhatsApp** como soporte técnico
- Formulario de contacto (opcional)
- Información de contacto (email, redes sociales)

### 4.9 Seguimiento de Pedidos
- El cliente puede consultar el estado de su pedido
- Integración con el sistema de la transportadora para tracking
- Notificación de estado (confirmado, en camino, entregado)

---

## 5. Fuera de Alcance (No incluido en esta versión)

| Funcionalidad | Razón |
|---------------|-------|
| Panel de administración web | Los productos y pedidos se gestionan directamente desde Firebase Console |
| Blog / Tips de belleza | Se evaluará para una versión futura |
| Programa de fidelidad / puntos | Complejidad adicional, se evaluará para una versión futura |
| Wishlist / Lista de deseos | Se evaluará para una versión futura |
| Reseñas / Testimonios | Se evaluará para una versión futura |
| Inventario automatizado | Se gestiona manualmente desde Firebase |
| Multi-idioma | Solo español por ahora |
| Aplicación móvil nativa | Solo web responsive |

---

## 6. Usuarios del Sistema

### 6.1 Cliente (Usuario Final)
- Navega el catálogo
- Filtra y busca productos
- Agrega productos al carrito
- Realiza pagos
- Opcionalmente crea una cuenta
- Consulta el estado de sus pedidos

### 6.2 Administrador (Propietario)
- Gestiona productos desde Firebase Console (CRUD)
- Revisa pedidos desde Firebase Console
- Atiende soporte vía WhatsApp

---

## 7. Restricciones y Supuestos

### Restricciones
- Operación exclusiva en **Colombia** (moneda COP)
- Sin panel de administración propio (uso de Firebase Console)
- Hosting gratuito o de bajo costo (Firebase Hosting)

### Supuestos
- El catálogo inicial tendrá entre 50–200 productos
- El tráfico esperado es bajo-medio (< 1000 usuarios diarios al inicio)
- Los productos tienen un solo precio (sin variantes de tamaño/color inicialmente)
- Las imágenes de productos serán proporcionadas por el propietario

---

## 8. Criterios de Aceptación General

1. El usuario puede navegar todo el catálogo sin errores
2. El filtrado por marca, categoría y búsqueda funciona correctamente
3. El carrito persiste durante la sesión del usuario
4. El checkout calcula envío correctamente según departamento
5. El pago se procesa exitosamente con MercadoPago
6. El sitio es responsive (mobile-first)
7. Los tiempos de carga son aceptables (< 3 segundos en conexiones estándar)

---

## Referencias

- [Fases del Proyecto](./fases_del_proyecto.md)
- [Arquitectura del Proyecto](./arquitectura_del_proyecto.md)
- [Sistema de Diseño](./sistema_de_diseño.md)
