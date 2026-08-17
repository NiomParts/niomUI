import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders the button content', () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
  });

  it('applies the requested variant classes', () => {
    render(<Button variant="outline">View Product</Button>);

    expect(screen.getByRole('button', { name: 'View Product' })).toHaveClass('border');
  });

  it('applies the requested size classes', () => {
    render(<Button size="lg">Checkout</Button>);

    expect(screen.getByRole('button', { name: 'Checkout' })).toHaveClass('h-12');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Add To Cart</Button>);

    fireEvent.click(screen.getByRole('button', { name: 'Add To Cart' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders as a different element when requested', () => {
    render(
      <Button as="a" href="https://example.com">
        Browse Products
      </Button>,
    );

    const link = screen.getByRole('link', { name: 'Browse Products' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('shows loading state and prevents interaction', () => {
    const handleClick = vi.fn();

    render(
      <Button loading onClick={handleClick}>
        Processing
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Loading...' });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders left and right icons', () => {
    render(
      <Button leftIcon={<span>icon-left</span>} rightIcon={<span>icon-right</span>}>
        Icon Button
      </Button>,
    );

    expect(screen.getByText('icon-left')).toBeInTheDocument();
    expect(screen.getByText('icon-right')).toBeInTheDocument();
  });
});