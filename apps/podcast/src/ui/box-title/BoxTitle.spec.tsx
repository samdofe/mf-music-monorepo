import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BoxTitle } from './BoxTitle';


const renderComponent = (title: string) => render(<BoxTitle title={title} />);

describe('BoxTitle Component', () => {
  it('renders the title correctly', () => {
    const testTitle = 'Test Title';

    renderComponent(testTitle);

    // Assert that the title is rendered and visible
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(testTitle);
  });
});
