import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppConversionRates from '../app-conversion-rates';
import AppCarousel from "../app-carousel-three";



// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        你好，欢迎访问莆田源头工厂，全场包邮👋
      </Typography>


        <Grid xs={12} md={6} lg={4}>
            <AppCarousel
                title="今日热销"
                subheader="当前热度top3商品"
                items={[
                    { image: '/assets/images/products/product_1.jpg', url: 'http://localhost:3030/products' },
                    { image: '/assets/images/products/product_2.jpg', url: 'http://localhost:3030/products' },
                    { image: '/assets/images/products/product_3.jpg', url: 'http://localhost:3030/products' },
                ]}
                autoPlayInterval={3000}
            />

        </Grid>

      <Grid container spacing={3}>
        <Grid xs={6} sm={6} md={3}>
          <AppWidgetSummary
            title="周销售额"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={6} sm={6} md={3}>
          <AppWidgetSummary
            title="注册用户数量"
            total={13528}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={6} sm={6} md={3}>
          <AppWidgetSummary
            title="购物订单数量"
            total={17235}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={6} sm={6} md={3}>
          <AppWidgetSummary
            title="售后退款订单数"
            total={1388}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>



          <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="本季度热销产品份额"
            chart={{
              series: [
                { label: 'Yeezy 350', value: 4344 },
                { label: 'Air Jordan 1', value: 5435 },
                { label: 'Nike Air Force 1', value: 1443 },
                { label: 'Converse 1970s', value: 4443 },
                { label: '其他', value: 667 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="本月各国销售额"
            subheader="(+49%) 比上月增长"
            chart={{
              series: [
                { label: '中国', value: 13416 },
                { label: '俄罗斯', value: 5488 },
                { label: '美国', value: 4679 },
                { label: '英国', value: 3753 },
                { label: '加拿大', value: 2452},
                { label: '澳大利亚', value: 1563 },
                { label: '新加坡', value: 583 },
                { label: '法国', value: 100 },
                { label: '德国', value: 120 },
                { label: '其他国家与地区', value: 156 },
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="我的订单"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'Order #37745 for yeezy 700,black,43',
                'Order #26546 for yeezy 350,static,42.5',
                'Order #66645 for air force 1,triple-black,43',
                'Order #7749  for converse 1970s,black/white,43',
                'Order #8864  for vans old skool,black,43',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="分享邀请新用户下单得至高520元优惠券❀"
            list={[
              {
                name: '微信',
                value: 42342,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'QQ',
                value: 23333,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: '微博',
                value: 21213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: '小红书',
                value: 42232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

    {/*     <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}
