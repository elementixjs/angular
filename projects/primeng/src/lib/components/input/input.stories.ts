import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

type Story = StoryObj<InputComponent>;

const meta: Meta<InputComponent> = {
    title: 'Form/Input',
    component: InputComponent,
    tags: ['autodocs'],
    // render: (args: InputComponent) => ({
    //     props: {
    //         backgroundColor: null,
    //         ...args,
    //     },
    // }),
    // argTypes: {
    //     backgroundColor: {
    //         control: 'color',
    //     },
    // },
};
export default meta;

export const Primary: Story = {
    // args: {
    //     primary: true,
    //     label: 'Button',
    // },
};
