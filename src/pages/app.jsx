import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> 主页 | 莆田商城 </title>
      </Helmet>

      <AppView />
    </>
  );
}
