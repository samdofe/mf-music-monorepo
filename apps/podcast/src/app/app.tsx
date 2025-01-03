import React from 'react';
import { Routes } from 'react-router-dom';
import routes from '../routing/route-config';
import { renderRoutes } from '@inditex/router';
import { PodcastStoreProvider } from '@store';

export default function App() {
  return (
    <PodcastStoreProvider>
      <Routes>{renderRoutes(routes)}</Routes>
    </PodcastStoreProvider>
  );
}
