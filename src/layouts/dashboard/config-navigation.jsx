import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: '主页',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: '产品',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: '分类',
    path: '/categories',
    icon: icon('ic_blog'),
  },
  {
    title: '登录',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: '页面未响应',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
