import { render } from '@testing-library/react';
import App from './app';

const renderView = (queryParams?: string) => {
  return render(<App />);
}

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderView();
    expect(baseElement).toBeTruthy();
  });
});
