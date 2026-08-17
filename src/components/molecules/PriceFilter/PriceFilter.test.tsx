import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { PriceFilter } from './PriceFilter';

describe('PriceFilter', () => {
  // =========================================================
  // TEST 1: Default label
  // =========================================================

  it('should render the default label', () => {
    render(
      <PriceFilter
        value={[20, 70]}
        onChange={() => {}}
      />
    );

    expect(screen.getByText('Price')).toBeInTheDocument();
  });


  // =========================================================
  // TEST 2: Custom label
  // =========================================================

  it('should render a custom label', () => {
    render(
      <PriceFilter
        value={[20, 70]}
        label="Price Range"
        onChange={() => {}}
      />
    );

    expect(
      screen.getByText('Price Range')
    ).toBeInTheDocument();
  });


  // =========================================================
  // TEST 3: Display selected prices
  // =========================================================

  it('should display the selected minimum and maximum prices', () => {
    render(
      <PriceFilter
        value={[25, 75]}
        onChange={() => {}}
      />
    );

    expect(
      screen.getByText(/\$25/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/\$75/)
    ).toBeInTheDocument();
  });


  // =========================================================
  // TEST 4: Currency formatting
  // =========================================================

  it('should format values using the configured currency', () => {
    render(
      <PriceFilter
        value={[20, 70]}
        currency="EUR"
        onChange={() => {}}
      />
    );

    expect(screen.getAllByText(/€/)).toHaveLength(2);
  });


  // =========================================================
  // TEST 5: Locale formatting
  // =========================================================

  it('should format values using the configured locale', () => {
  render(
    <PriceFilter
      value={[500, 5000]}
      max={5000}
      currency="MUR"
      locale="en-MU"
      onChange={() => {}}
    />
  );

  expect(
    screen.getByText(/Rs 500\.00/)
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Rs 5,000\.00/)
  ).toBeInTheDocument();
});


  // =========================================================
  // TEST 6: Slider receives correct values
  // =========================================================

  it('should pass the correct values to the Slider', () => {
    render(
      <PriceFilter
        value={[30, 80]}
        min={0}
        max={100}
        onChange={() => {}}
      />
    );

    const sliders = screen.getAllByRole('slider');

    expect(sliders).toHaveLength(2);

    // Minimum thumb
    expect(sliders[0]).toHaveAttribute(
      'aria-valuenow',
      '30'
    );

    // Maximum thumb
    expect(sliders[1]).toHaveAttribute(
      'aria-valuenow',
      '80'
    );
  });

  it('should clamp displayed and slider values to the configured range', () => {
    render(
      <PriceFilter
        value={[-20, 120]}
        min={0}
        max={100}
        onChange={() => {}}
      />
    );

    const sliders = screen.getAllByRole('slider');

    expect(sliders[0]).toHaveAttribute('aria-valuenow', '0');
    expect(sliders[1]).toHaveAttribute('aria-valuenow', '100');
    expect(screen.getByText(/\$0/)).toBeInTheDocument();
    expect(screen.getByText(/\$100/)).toBeInTheDocument();
  });


  // =========================================================
  // TEST 7: onChange callback
  // =========================================================

  it('should call onChange with updated price tuple', async () => {
    const mockOnChange = vi.fn();

    render(
      <PriceFilter
        value={[20, 70]}
        min={0}
        max={100}
        step={1}
        onChange={mockOnChange}
      />
    );

    const sliders = screen.getAllByRole('slider');

    expect(sliders).toHaveLength(2);

    // Focus the minimum thumb
    sliders[0].focus();

    // Move minimum value from 20 to 21
    await userEvent.keyboard('{ArrowRight}');

    expect(mockOnChange).toHaveBeenCalled();

    const updatedValue = mockOnChange.mock.calls.at(-1)?.[0];

    expect(Array.isArray(updatedValue)).toBe(true);
    expect(updatedValue).toHaveLength(2);
  });


  // =========================================================
  // TEST 8: Minimum value
  // =========================================================

  it('should respect the configured minimum value', () => {
    render(
      <PriceFilter
        value={[60, 80]}
        min={50}
        onChange={() => {}}
      />
    );

    const sliders = screen.getAllByRole('slider');

    expect(sliders[0]).toHaveAttribute(
      'aria-valuemin',
      '50'
    );
  });


  // =========================================================
  // TEST 9: Maximum value
  // =========================================================

  it('should respect the configured maximum value', () => {
    render(
      <PriceFilter
        value={[20, 80]}
        max={500}
        onChange={() => {}}
      />
    );

    const sliders = screen.getAllByRole('slider');

    expect(sliders).toHaveLength(2);

    expect(sliders[1]).toHaveAttribute(
      'aria-valuemax',
      '500'
    );
  });


  // =========================================================
  // TEST 10: Step value
  // =========================================================

  it('should respect the configured step', async () => {
    const mockOnChange = vi.fn();

    render(
      <PriceFilter
        value={[20, 70]}
        step={10}
        onChange={mockOnChange}
      />
    );

    const sliders = screen.getAllByRole('slider');

    sliders[0].focus();

    await userEvent.keyboard('{ArrowRight}');

    expect(mockOnChange).toHaveBeenCalled();

    const updatedValue =
      mockOnChange.mock.calls.at(-1)?.[0];

    expect(updatedValue).toEqual([30, 70]);
  });


  // =========================================================
  // TEST 11: Disabled state
  // =========================================================

  it('should apply disabled styling when disabled prop is true', () => {
    const { container } = render(
      <PriceFilter
        value={[20, 70]}
        disabled={true}
        onChange={() => {}}
      />
    );

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toHaveClass('opacity-50');
    expect(wrapper).toHaveClass('pointer-events-none');
  });


  // =========================================================
  // TEST 12: Accessibility labels
  // =========================================================

  it('should provide accessible labels for both slider thumbs', () => {
    render(
      <PriceFilter
        value={[20, 70]}
        onChange={() => {}}
      />
    );

    const sliders = screen.getAllByRole('slider');

    expect(sliders).toHaveLength(2);

    expect(sliders[0]).toHaveAttribute(
      'aria-label',
      'Min'
    );

    expect(sliders[1]).toHaveAttribute(
      'aria-label',
      'Max'
    );
  });


  // =========================================================
  // TEST 13: Custom className
  // =========================================================

  it('should apply custom CSS classes', () => {
    const { container } = render(
      <PriceFilter
        value={[20, 70]}
        className="custom-class"
        onChange={() => {}}
      />
    );

    const wrapper = container.firstChild as HTMLElement;

    expect(wrapper).toHaveClass('custom-class');
  });


  // =========================================================
  // TEST 14: Presentation focused
  // =========================================================

  it('should not perform product filtering', () => {
    const mockOnChange = vi.fn();

    render(
      <PriceFilter
        value={[20, 70]}
        onChange={mockOnChange}
      />
    );

    expect(
      mockOnChange
    ).not.toHaveBeenCalled();
  });


  // =========================================================
  // TEST 15: Large price values
  // =========================================================

  it('should handle large price values correctly', () => {
    render(
      <PriceFilter
        value={[500000, 1500000]}
        min={0}
        max={10000000}
        currency="USD"
        locale="en-US"
        onChange={() => {}}
      />
    );

    expect(
      screen.getByText(/\$500,000\.00/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/\$1,500,000\.00/)
    ).toBeInTheDocument();
  });


  // =========================================================
  // TEST 16: Decimal price values
  // =========================================================

  it('should handle decimal price values', () => {
    render(
      <PriceFilter
        value={[10.5, 99.99]}
        min={0}
        max={100}
        step={0.1}
        onChange={() => {}}
      />
    );

    expect(
      screen.getByText(/10\.5|10,5/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/99\.99|99,99/)
    ).toBeInTheDocument();
  });
});
