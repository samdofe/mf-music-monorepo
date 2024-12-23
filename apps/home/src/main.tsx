import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './app/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@inditex/api';

const root = ReactDOM.createRoot(document.getElementById('home-root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
