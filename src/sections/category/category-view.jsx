import React, { useState } from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText, Divider, Container, Button } from '@mui/material';
import { products } from 'src/_mock/products';
import { Link as RouterLink } from 'react-router-dom';

const categories = [
  '精选', '鞋类', '潮服', '包袋', '配饰', '数码', '全球购', '美妆', '女装', '手表', '运动', '家居', '潮玩', '家电', '食饮', '车品'
];

const brands = [
  { name: 'Asics', logo: products[0].cover },
  { name: 'Converse', logo: products[1].cover },
  { name: 'ANTA', logo: products[2].cover },
  // 添加更多品牌
];

const categorizedProducts = {
  精选: [products[0], products[1], products[2]],
  鞋类: [products[3], products[4], products[5]],
  潮服: [products[6], products[7], products[8]],
  // 添加更多分类和产品
};

export default function CategoryView() {
  const [selectedCategory, setSelectedCategory] = useState('精选');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderHeader = (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
      <Typography variant="h6">品牌推荐</Typography>
    </Box>
  );

  const renderNoProductMessage = (
    <Container>
      <Box
        sx={{
          py: 12,
          maxWidth: 480,
          mx: 'auto',
          display: 'flex',
          minHeight: '100vh',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" sx={{ mb: 3 }}>
          抱歉，未找到商品
        </Typography>
        <Box
          component="img"
          src="/assets/illustrations/illustration_404.svg"
          sx={{
            mx: 'auto',
            height: 260,
            my: { xs: 5, sm: 10 },
          }}
        />
        <Button href="/dashboard" size="large" variant="contained" component={RouterLink}>
          回到主页
        </Button>
      </Box>
    </Container>
  );

  const productsToDisplay = categorizedProducts[selectedCategory] || [];

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ minWidth: 160, borderRight: 1, borderColor: 'divider' }}>
        <List>
          {categories.map((category, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleCategoryClick(category)}
              sx={{
                backgroundColor: selectedCategory === category ? 'primary.main' : 'inherit',
                color: selectedCategory === category ? 'white' : 'inherit',
                '&:hover': {
                  backgroundColor: selectedCategory === category ? 'primary.dark' : 'grey.100',
                },
              }}
            >
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
        {renderHeader}
        <Grid container spacing={2}>
          {brands.map((brand, index) => (
            <Grid item xs={4} sm={3} md={2} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={brand.logo} alt={brand.name} style={{ width: '60%' }} />
                <Typography>{brand.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" gutterBottom>
          {selectedCategory} 热门产品
        </Typography>
        {productsToDisplay.length === 0 ? (
          renderNoProductMessage
        ) : (
          <Grid container spacing={2}>
            {productsToDisplay.map((product, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <img src={product.cover} alt={product.name} style={{ width: '80%' }} />
                  <Typography>{product.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
