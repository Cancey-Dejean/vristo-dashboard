import type { Meta, StoryObj } from '@storybook/react';
import Alert from './';
import IconBellBing from '../icon/icon-bell-bing';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Alert',
    component: Alert,
    decorators: [
        (Story) => (
            <div className="min-w-[600px] w-full">
                <Story />
            </div>
        ),
    ],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: {
        variant: 'primary',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, adipisci!',
    },
    argTypes: {
        alertIcon: {
            control: { disable: true },
        },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    render: (args) => {
        return (
            <div className="flex flex-col gap-4">
                <Alert variant="primary" {...args} />
                <Alert variant="primary" alertIcon={<IconBellBing />} />
            </div>
        );
    },
};
