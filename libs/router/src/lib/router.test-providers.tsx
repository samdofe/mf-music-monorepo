import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import type {ReactElement} from 'react';
import {MemoryRouter} from 'react-router-dom';

/**
 * Providers needed to render components in tests.
 * @returns Providers wraapping the component to be tested.
 */
export const RouterTestProviders = ({children}: {children: ReactElement}): ReactElement => (
  <MemoryRouter>
    <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
  </MemoryRouter>
);

/**
 * Providers needed to render components in tests with a specific path.
 * @returns Providers wraapping the component to be tested.
 */
export const RouterTestProvidersWithSpecificPath = ({
  children,
  path
}: {
  children: ReactElement;
  path: string;
}): ReactElement => (
  <MemoryRouter initialEntries={[path]}>
    <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
  </MemoryRouter>
);
