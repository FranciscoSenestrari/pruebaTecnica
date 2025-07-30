// src/components/ui/CustomButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  title: "UI/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: { type: "select" },
      options: ["default", "confirm", "danger", "warning", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
  args: {
    title: "Default",
    variant: "default",
    size: "md",
  },
};

export const Confirm: Story = {
  args: {
    title: "Confirmar",
    variant: "confirm",
  },
};

export const Danger: Story = {
  args: {
    title: "Eliminar",
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    title: "Advertencia",
    variant: "warning",
  },
};

export const Ghost: Story = {
  args: {
    title: "Ghost",
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    title: "Deshabilitado",
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <CustomButton title="Pequeño" size="sm" />
      <CustomButton title="Mediano" size="md" />
      <CustomButton title="Grande" size="lg" />
    </div>
  ),
};
