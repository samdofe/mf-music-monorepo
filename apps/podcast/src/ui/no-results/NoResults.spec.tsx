// NoResults.test.tsx
import { render, screen } from '@testing-library/react';
import { NoResults } from './NoResults';

describe('NoResults', () => {
  it('renders the NO RESULTS FOUND', () => {
    render(<NoResults />);

    // Check if the ThreeDotsScaleIcon is rendered
    const icon = screen.getByTestId('no-results-testid');
    expect(icon).toBeInTheDocument();
  });
});
