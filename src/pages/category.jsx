import { Helmet } from 'react-helmet-async';
import { CategoryView } from 'src/sections/category';

// ----------------------------------------------------------------------

export default function CategoryPage() {
  return (
    <>
      <Helmet>
        <title> 分类 | 莆田商城 </title>
      </Helmet>

      <CategoryView />
    </>
  );
}
