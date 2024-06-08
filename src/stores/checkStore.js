import { create } from 'zustand';

const checkData = [
  {
    id: '1',
    name: 'Professional plan',
    quantity: '1',
    price: '15.00',
  }
];
const useCheckStore = create((set) => ({
  check: [  ],
  addCheck: (item) => set((state) => {
    const itemExists = state.check.some(checkItem => checkItem.id === item.id);
    if (!itemExists) {
      return { check: [...state.check, item] };
    }
    return state;
  }),
  removeCheck: (itemId) => set((state) => ({ check: state.check.filter((item) => item.id !== itemId) })),
  clearCheck: () => set({ check: [] }),
}));

export default useCheckStore;