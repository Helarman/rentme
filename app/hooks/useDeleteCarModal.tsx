import { create } from 'zustand';

interface DeleteCarModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDeleteCarModal = create<DeleteCarModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true}),
  onClose: () => set({ isOpen: false})
}));


export default useDeleteCarModal;
