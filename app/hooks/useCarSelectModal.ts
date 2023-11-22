import { create } from 'zustand';

interface CarSelectModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCarSelectModal = create<CarSelectModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useCarSelectModal;
