import { create } from "zustand";

const useStore = create((set) => ({
  menu: false,
  list: false,
  showModal: false,
  toggleMenu: () => set((state) => ({ menu: !state.menu })),
  toggleList: (newState) => set({ list: newState }),
  toggleModal: (newState) => set({ showModal: newState }),
}));

export default useStore;
