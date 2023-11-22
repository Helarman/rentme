import { create } from 'zustand';

interface AddManufacturerModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddManufacturerModal = create<AddManufacturerModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useAddManufacturerModal;
