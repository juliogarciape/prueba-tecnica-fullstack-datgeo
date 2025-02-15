# :sparkles: Prueba Técnica: Full Stack Developer :dart:

## Descripción :page_facing_up:

Este proyecto es una prueba técnica para el puesto de Full Stack Developer en la empresa DATGEO TECHNOLOGY. El proyecto consiste en desarrollar una aplicación web para la gestión de empleados en una empresa. 

El área de Recursos Humanos será responsable de registrar a los empleados en la aplicación, tras lo cual cada empleado deberá iniciar sesión y subir tres documentos escaneados (documento de identidad, licencia de conducir y CV) requeridos por la empresa en formato PDF.

> [!NOTE]
> Para información más detallada sobre los requerimientos de la prueba técnica, revisar el archivo [prueba-tecnica-datgeo-technology.docx](media/prueba-tecnica-datgeo-technology.docx).

## Tecnologías :computer:

- **Base de Datos**: PostgreSQL
- **Backend**: Node.js, Nest.js, TypeORM
- **Frontend**: React, Next.js, Material UI
- **Servicios**: AWS (S3)

## Instalación :inbox_tray:

1) **Clona el repositorio:**

```bash
git clone https://github.com/juliogarciape/prueba-tecnica-fullstack-datgeo.git
```

2) **Instala las dependencias:**

```bash
npm install && npm run install    # Instala las dependencias del proyecto usando concurrently
```

3) **Ejecuta la aplicación:**

```bash
npm run dev    # Modo Desarrollo
ó
npm run start  # Modo Produccion 
```

> [!IMPORTANT]
> Esta configuración solo se realizó con el fin de probar la aplicación web en pocos comandos y de forma rápida, para un entorno de producción lo mas recomendable es separar los proyectos en diferentes repositorios con una configuracion independiente.

## Notas :memo:

- En el directorio `app/backend` se creó un [README.md](app/backend/README.md) más detallado sobre el backend
- En el directorio `app/frontend` se creó un [README.md](app/frontend/README.md) más detallado sobre el frontend

## Detalles Técnicos :bulb:

- Se utilizó la capa Free Tier de AWS para la creacion de un Bucket en AWS S3
- Se utilizó el paquete `concurrently` para ejecutar el backend y el frontend al mismo tiempo con un solo comando.
