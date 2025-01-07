import { PodcastStoreProvider } from '@store';
import { Routes } from 'react-router-dom';
import routes from '../routing/route-config';
import { renderRoutes } from '@sdf-design-system/router';

export default function App() {
  return (
    <PodcastStoreProvider>
      <Routes>{renderRoutes(routes)}</Routes>
    </PodcastStoreProvider>
  );
}
