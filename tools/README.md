# Herramientas Personalizadas

## Descripción
La carpeta **tools/** contiene scripts personalizados desarrollados con **Nx** para facilitar tareas comunes y mejorar la productividad en el monorepo.

---

## Scripts Disponibles

### 1. **serve-multiple**
- **Descripción**: Arranca múltiples aplicaciones (Shell y Podcast) en modo preview simultáneamente.
- **Comando**:
  ```bash
  pnpm start:all:preview
  ```

### 2. **build-apps**
- **Descripción**: Realiza una limpieza de la cache de Nx y construye todas las aplicaciones (Shell y Podcast).
- **Comando**:
  ```bash
  pnpm build:apps
  ```

### 3. **build-libs**
- **Descripción**: Limpia la cache de Nx y construye todas las librerías del Design System.
- **Comando**:
  ```bash
  pnpm build:libs
  ```

### 4. **test-all**
- **Descripción**: Ejecuta las pruebas unitarias para todas las aplicaciones y librerías del workspace.
- **Comando**:
  ```bash
  pnpm test:all
  ```

### 5. **new-lib**
- **Descripción**: Crea una nueva librería estándar con la estructura predefinida.
- **Comando**:
  ```bash
  pnpm new:lib --name=my-lib
  ```

### 6. **new-cdk-lib**
- **Descripción**: Crea una nueva librería para el Component Dev Kit (CDK) con la estructura predefinida.
- **Comando**:
  ```bash
  pnpm new:cdk:lib --name=my-cdk-lib
  ```

---

## Notas
1. Los scripts están configurados para trabajar con las capacidades de **Nx**, como cache inteligente y dependencias optimizadas.
2. Todos los scripts se pueden ejecutar desde el directorio raíz del proyecto.

---

Para más información sobre la configuración general del proyecto, consulta el README en el root.
