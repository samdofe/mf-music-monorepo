
# Podcast Remote Application

## Description
The **Podcast** application is a remote micro-frontend that handles the core podcast functionality, including:
- Listing the most popular podcasts.
- Details of a specific podcast.
- Details of individual episodes with a basic audio player.

This application is designed to integrate with the **Shell** via **Module Federation**.

---

## Structure
The main structure includes:

### **`src/`**
Contains the source code for the application. Within this folder, the following subfolders and files can be found:

- **`src/api/`**: Contains files that manage API requests using `tanstack/react-query`. All API query logic is centralized here to keep the code organized and decoupled.

- **`src/app/`**: The root folder of the application where its general configuration resides. This folder handles aspects like global configuration and routing structure.

- **`src/assets/`**: Contains all the static assets for the application, such as images, icons, and other files that are not part of the code but are necessary for the functioning and user interface.

- **`src/hooks/`**: This folder contains the custom hooks used throughout the application. These hooks encapsulate logic that can be reused across components, making the code cleaner and more modular.

- **`src/layouts/`**: Contains the different layouts used in the application. A layout is an interface template used to structure pages and ensure consistent appearance across the app.

- **`src/models/`**: Defines the data models for the application, which are used to manage and validate information. Models help maintain data consistency throughout the project.

- **`src/pages/`**: Contains the application pages, corresponding to routes defined in the routing configuration. Some of the pages include:
  - **episode-player**: Displays an individual podcast episode with its player and description.
  - **episodes-list**: List of episodes for a specific podcast.
  - **podcasts-details**: Displays the details of a podcast, including a list of episodes.
  - **podcasts-grid**: Displays the most popular podcasts in a grid format.
    Each page manages its own data fetching and presentation logic.

- **`src/routing/`**: Defines and configures the application routes. It manages navigation between views in the SPA (Single Page Application), ensuring a smooth user experience without page reloads.

- **`src/store/`**: Contains the application's state management, likely using a state management library (such as Redux or Zustand). All global application state is centralized here, allowing components to access it efficiently.

- **`src/tests/`**: Configuration for tests using Vitest. Unit, integration, and end-to-end tests are organized and configured here to ensure the application functions correctly and that changes to the code don't break existing functionality.

- **`src/ui/`**: Contains reusable common UI components such as buttons, forms, modals, and other interface elements. These components are designed for reuse across the application to promote visual consistency.

- **`vite.config.ts`**: Configuration for exposing the application as a remote micro-frontend.

---

## Scripts
From the root directory of the project:

### Development
- **Start the Podcast application in development mode**:
  ```bash
  pnpm start:project:dev --PROJECT=podcast
  ```

- **Preview in production mode**:
  ```bash
  pnpm start:project:preview --PROJECT=podcast
  ```

### Build
- **Build the application**:
  ```bash
  pnpm build:apps
  ```

### Testing
- **Run unit tests**:
  ```bash
  pnpm test:project --PROJECT=podcast
  ```
- **Run tests with Vitest UI**:
  ```bash
  pnpm test:project:ui --PROJECT=podcast
  ```

  #### **With Nx Console**:

  ![Nx console](../../readme-helpers/assets/images/vitest-ui-nx-console.gif)

  #### **With the terminal**:

  ![Nx console](../../readme-helpers/assets/images/vitest-ui-terminal.gif)

  #### **Vitest UI**

  ![Nx console](../../readme-helpers/assets/images/vitest-ui-dashboard.gif)


---

## Technical Details
### Module Federation
The `vite.config.ts` file declares the necessary configuration for this application to be consumed as a remote micro-frontend by the Shell.

### Features
1. **Podcast Listing**: Consumes the Apple Podcasts API and uses the `@sdf-design-system/api` library to manage requests.
2. **Podcast Details**: Renders reusable components such as **cdk-card** and **cdk-table** from the design system.
3. **Episode Details**: Includes a basic HTML5 audio player to play episodes.

### Dependencies

The application has dependencies on reusable libraries:
- Design System Components (**cdk**) are imported from the `@sdf-design-system/cdk` library.
- Design System API (**api**) is imported from the `@sdf-design-system/api` library.
- Design System Icons (**icons**) are imported from the `@sdf-design-system/icons` library.
- Design System Router (**router**) is imported from the `@sdf-design-system/router` library.
- Design System Utilities (**utils**) are imported from the `@sdf-design-system/utils` library.

---

## Notes
1. Ensure the Shell application is running to fully interact with this application.
2. Use `pnpm graph` to visualize dependencies between micro-frontends and libraries.

![Nx console](../../readme-helpers/assets/images/nx-use.gif)

3. The filtering functionality uses the `@sdf-design-system/utils` library for common operations.

---

For more information, consult the general documentation in the root README.
