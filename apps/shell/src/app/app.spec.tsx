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

  it('should have a greeting as the title', () => {
    const { getByText } = renderView();
    expect(getByText(/SHELL Host App/gi)).toBeTruthy();
  });
});
