# Vantage AI

## Descripción
Sistema de gestión de usuarios en tiempo real. Este proyecto sincroniza automáticamente los eventos de autenticación de **Clerk** con una base de datos **Neon (PostgreSQL)** mediante el uso de webhooks.

## Tecnologías
- **Framework:** Next.js (App Router)
- **Autenticación:** Clerk
- **Base de Datos:** Neon PostgreSQL
- **ORM:** Drizzle ORM
- **Verificación:** Svix (Webhooks)

## Configuración y Despliegue
Este proyecto está optimizado para su despliegue en **Vercel**.

### Variables de Entorno (.env.local)
Para que el proyecto funcione, debes configurar las siguientes variables en tu archivo `.env.local`:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Tu llave pública de Clerk.
- `CLERK_SECRET_KEY`: Tu llave secreta de Clerk.
- `DATABASE_URL`: URL de conexión a tu base de datos Neon.
- `CLERK_WEBHOOK_SECRET`: El secreto del endpoint de webhook de Clerk.

### Instalación local
1. Clona el repositorio.
2. Instala dependencias: `npm install`
3. Ejecuta el servidor: `npm run dev`

---
*Desarrollado para la automatización de flujos de trabajo con integración continua en Vercel.*