import { create } from 'zustand';


const mockProducts = [];

const useCartStore = create((set) => ({
  cart: mockProducts,
  addToCart: (item) => set((state) => {
    const itemExists = state.cart.some(cartItem => cartItem.id === item.id);
    if (!itemExists) {
      return { cart: [...state.cart, item] };
    }
    return state;
  }),
  removeFromCart: (itemId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
  clearCart: () => set({ cart: [] }),
  updateQuantity: (itemId, newQuantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item,
      ),
    })),
}));

export default useCartStore;