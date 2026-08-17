import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './Button.constants';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: BUTTON_VARIANTS,
    },
    size: {
      control: 'select',
      options: BUTTON_SIZES,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Add To Cart',
  },
};

export const Outline: Story = {
  args: {
    children: 'View Product',
    variant: 'outline',
  },
};

export const Large: Story = {
  args: {
    children: 'Checkout',
    size: 'lg',
  },
};

export const Loading: Story = {
  args: {
    children: 'Processing',
    loading: true,
  },
};

export const WithIcons: Story = {
  args: {
    children: 'Add To Cart',
    leftIcon: '🛒',
    rightIcon: '→',
  },
};