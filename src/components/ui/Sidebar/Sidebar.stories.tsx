import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="h-screen relative">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
