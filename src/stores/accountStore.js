import create from "zustand";

const useAccountStore = create((set) => ({
  account: {
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: '/assets/images/avatars/avatar_25.jpg',
  },
  setAccount: (account) => set({ account })
}));

export default useAccountStore;