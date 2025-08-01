import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
}
export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  closeSidebar: () => set({ isOpen: false }),
  openSidebar: () => set({ isOpen: true }),
}));
export const useSidebar = () => {
  const { isOpen, toggleSidebar, closeSidebar, openSidebar } =
    useSidebarStore();
  return { isOpen, toggleSidebar, closeSidebar, openSidebar };
};
export default useSidebarStore;
export type { SidebarState };
