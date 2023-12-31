import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="py-20 flex justify-center">
                <Story />
            </div>
        ),
    ],
    args: {
        imgSrc: 'https://dummyimage.com/80x80.png/dddddd/ffffff',
        name: 'Name',
        size: 'medium',
        notification: false,
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        return <Avatar {...args} />;
    },
};
