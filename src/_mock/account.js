// ----------------------------------------------------------------------

export const account = {
  displayName: '16号楼彭于晏',
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatars/avatar_25.jpg',
};
export const login = (email, password) => {
  const mockEmail = 'admin@test.com';
  const mockPassword = 'admin';
  return email === mockEmail && password === mockPassword;
};

