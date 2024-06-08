import { create } from 'zustand';




const mockProducts = [
  { id: 1, name: 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear', price: 95, quantity: 1, imageUrl: '/assets/images/products/product_1.jpg' },
];

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
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    })),
}));

export default useCartStore;