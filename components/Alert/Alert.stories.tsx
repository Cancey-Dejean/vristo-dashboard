import type { Meta, StoryObj } from '@storybook/react';

import Alert from './';
import IconBellBing from '../icon/icon-bell-bing';
import IconSettings from '../icon/icon-settings';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    render: (args) => {
        return (
            <div className="grid grid-cols-2 gap-5">
                <Alert variant="primary-solid" {...args} />
                <Alert variant="secondary-solid" {...args} />
                <Alert variant="success-solid" {...args} />
                <Alert variant="warning-solid" {...args} />
                <Alert variant="danger-solid" {...args} />
                <Alert variant="info-solid" {...args} />

                <Alert variant="primary-light" {...args} />
                <Alert variant="secondary-light" {...args} />
                <Alert variant="success-light" {...args} />
                <Alert variant="warning-light" {...args} />
                <Alert variant="danger-light" {...args} />
                <Alert variant="info-light" {...args} />

                <Alert variant="primary-light" alertIcon={<IconSettings />} {...args} />
                <Alert variant="secondary-light" alertIcon={<IconSettings />} {...args} />
                <Alert variant="success-light" alertIcon={<IconSettings />} {...args} />
                <Alert variant="warning-light" alertIcon={<IconSettings />} {...args} />
                <Alert variant="danger-light" alertIcon={<IconSettings />} {...args} />
                <Alert variant="info-light" alertIcon={<IconSettings />} {...args} />

                <Alert variant="primary-outline" {...args} />
                <Alert variant="secondary-outline" {...args} />
                <Alert variant="success-outline" {...args} />
                <Alert variant="warning-outline" {...args} />
                <Alert variant="danger-outline" {...args} />
                <Alert variant="info-outline" {...args} />

                {/* Customs */}
                <Alert variant="danger-outline" customButton={<button className="bg-white-dark text-white p-2 rounded">Button</button>} {...args} />
            </div>
        );
    },
};
