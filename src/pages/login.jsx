import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/login';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> 登录 | 莆田商城 </title>
      </Helmet>

      <LoginView />
    </>
  );
}
