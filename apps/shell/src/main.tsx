import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@inditex/api';
import './styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('shell-root') as HTMLElement
);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
