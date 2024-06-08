import { create } from 'zustand';

const product = {
  id: '1', // 商品的唯一标识
  name: 'Product Name', // 商品的名称
  price: 100, // 商品的价格
  quantity: 1, // 商品在购物车中的数量
  image: 'url-to-image', // 商品的图片链接
};

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (itemId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;