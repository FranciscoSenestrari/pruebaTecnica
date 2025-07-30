import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Componentes/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    placeholder: "Escribí algo...",
    type: "text",
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Texto: Story = {
  args: {
    value: "",
  },
};

export const ConValorPorDefecto: Story = {
  args: {
    value: "Hola Storybook",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Contraseña",
  },
};
export const Email: Story = {
  args: {
    type: "email",
    placeholder: "a@example.com",
  },
};
