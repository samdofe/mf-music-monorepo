# Shell Application

## Descripción
La aplicación **Shell** actúa como el host principal en la arquitectura de micro-frontends. Es responsable de:
- Renderizar la cabecera común (**cdk-header**).
- Administrar la navegación entre micro-frontends.
- Cargar dinámicamente la aplicación remota (**Podcast**) usando **Module Federation**.

---

## Estructura
La estructura principal del proyecto incluye:
- **`src/app/`**: Contiene los componentes principales de la aplicación.
- **`src/assets/`**: Archivos estáticos y recursos.
- **`src/layouts/`**: Contiene los diferentes layouts utilizados en la aplicación. Un layout es una plantilla de interfaz que se utiliza para estructurar las páginas y asegurar una apariencia coherente a través de la aplicación.
- **`src/routing/`**: Define y configura las rutas de la aplicación. Gestiona la navegación entre las distintas vistas de la SPA (Single Page Application), asegurando una experiencia de usuario fluida sin recargar la página.
- **`src/types/`**: Define los tipos de los modulos remotos
- **`vte.config.ts`**: Configuración de Module Federation para declarar las dependencias remotas.

---

## Scripts
Desde el directorio raíz del proyecto:

### Desarrollo
- **Arrancar la aplicación Shell en modo desarrollo**:
  ```bash
  pnpm start:project:dev --PROJECT=shell
  ```

- **Vista previa en modo producción**:
  ```bash
  pnpm start:project:preview --PROJECT=shell
  ```

### Construcción
- **Construir la aplicación**:
  ```bash
  pnpm build:apps
  ```

### Testing
- **Ejecutar pruebas unitarias**:
  ```bash
  pnpm test:project --PROJECT=shell
  ```
- **Ejecutar pruebas con interfaz gráfica de Vitest**:
  ```bash
  pnpm test:project:ui --PROJECT=shell
  ```

  #### **Con la consola de Nx****:

  ![Nx console](../../readme-helpers/assets/images/vitest-ui-nx-console.gif)

  #### **Con el terminal**:

  ![Nx console](../../readme-helpers/assets/images/vitest-ui-terminal.gif)

  #### **Vitest UI**

  ![Nx console](../../readme-helpers/assets/images/vitest-ui-dashboard.gif)

---

## Detalles Técnicos
### Module Federation
El **Shell** declara la configuración de Module Federation en el archivo `vite.config.ts` para cargar dinámicamente la aplicación remota:
- **Remota**: `podcast`.
- **Componentes compartidos**: React, React DOM y dependencias relacionadas.

### Cabecera
La cabecera reutilizable (**cdk-header**) es importada desde la librería `@inditex-challenge/cdk`.

### Navegación
Se utiliza la librería `@inditex-challenge/router` para gestionar las rutas dentro del Shell y delegar la navegación al micro-frontend remoto.

---

## Notas
1. Asegúrate de que el servicio remoto (Podcast) esté ejecutándose antes de probar las funcionalidades compartidas.
2. El comando `pnpm graph` puede ayudarte a visualizar las dependencias entre proyectos y librerías.

![Nx console](../../readme-helpers/assets/images/nx-use.gif)

---

Para más información, consulta la documentación general en el README del root.
