

# Vidext - Prueba Técnica
## Editor es una aplicación que utiliza la biblioteca de Tldraw. El proyecto integra varias tecnologías modernas, incluyendo Nextjs, TailwindCSS, Shadcn y tRPC. La aplicación muestra operaciones básicas con un enfoque en la integración con Tldraw y la actualización de datos.

## Instalación
### 1 - Clona el Repositorio:
```
git clone https://github.com/CristianMozetich/vidext.git
```
### 2 - Instala las Dependencias:
```
cd client
npm install
```
### 3 - Ejecuta el servidor de Desarrollo:
```
npm run dev
```

## Puebas
### Para ejecutar las pruebas de los endpoints solicitados con Jest:
```
npm test
```
## Detalles de los componentes
### Editor Tldraw
#### Botón Update
- Envía datos actualizados del editor del usuario a una base de datos local para que persista la información en su navegador.
#### Botón Share
- Recibe los datos del editor del usuario que provienen de los datos previamentes guardados en la base de datos local.
### Componentes Adicionales
#### Sidebar de Navegación: 
- Se adapta a diseños responsive.

## Tecnologías
[![next.js](https://img.shields.io/badge/next.js-000?style=for-the-badge&logo=next.js&logoColor)](https://nextui.org/)
[![tailwindcss](https://img.shields.io/badge/tailwindcss-000?style=for-the-badge&logo=tailwindcss&logoColor)](https://tailwindcss.com/)
[![react](https://img.shields.io/badge/react-000?style=for-the-badge&logo=react&logoColor)](https://react.dev/)
[![typescript](https://img.shields.io/badge/typescript-000?style=for-the-badge&logo=typescript&logoColor)](https://www.typescriptlang.org/)
[![tRPC](https://img.shields.io/badge/trpc-000?style=for-the-badge&logo=trpc&logoColor)](https://trpc.io/)
[![shadcnui](https://img.shields.io/badge/shadcn/ui-000?style=for-the-badge&logo=shadcn/ui&logoColor)](https://ui.shadcn.com/)
[![jest](https://img.shields.io/badge/jest-000?style=for-the-badge&logo=jest&logoColor)](https://jestjs.io/)

