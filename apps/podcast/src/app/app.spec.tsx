import { render, screen } from '@testing-library/react';
import App from './app';
import { RouterTestProviders } from '@sdf-design-system/router';

const mocks = vi.hoisted(() => {
  return {
    usePodcastsLoad: vi.fn(),
  };
});

vi.mock("@api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@api")>();
  return {
    ...actual,
    usePodcastsLoad: mocks.usePodcastsLoad,
  };
});

const renderComponent = () =>
  render(
    <RouterTestProviders>
      <App />
    </RouterTestProviders>
  );

describe('App Component', () => {
  it('should render PodcastStoreProvider, Routes and mocked route content', () => {
    // Render the App component inside BrowserRouter (needed for routing context)
    mocks.usePodcastsLoad.mockReturnValue([]);
    renderComponent();

    // Assert that PodcastStoreProvider is present (by checking for something inside it)
    expect(screen.getByText('NO RESULTS FOUND')).toBeInTheDocument();
  });
});
