import React from 'react';
import { Routes } from 'react-router-dom';
import routes from '../routing/route-config';
import { renderRoutes } from '@inditex/router';

export default function App() {
  return <Routes>{renderRoutes(routes)}</Routes>;
}
