// Loader.test.tsx
import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('renders the ThreeDotsScaleIcon', () => {
    render(<Loader />);

    // Check if the ThreeDotsScaleIcon is rendered
    const icon = screen.getByTestId('three-dots-scale-icon-testid');
    expect(icon).toBeInTheDocument();
  });
});
