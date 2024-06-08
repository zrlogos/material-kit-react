import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';
// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> 分类 | 莆田商城 </title>
      </Helmet>
      <BlogView />
    </>
  );
}
