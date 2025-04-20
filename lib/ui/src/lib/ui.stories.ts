import type { Meta, StoryObj } from '@storybook/react';
import Ui from './ui';

const meta = {
  title: 'Icons',
  component: Ui,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Ui>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  args: {},
};
