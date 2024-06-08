import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  Divider,
  Snackbar,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { products } from 'src/_mock/products';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RouterLink } from '../../../routes/components';
import Logo from '../../../components/logo';
import useCartStore from '../../../stores/cartStore';
import CartWidget from '../product-cart-widget';
import useCheckStore from '../../../stores/checkStore';
import { useRouter } from '../../../routes/hooks';

// ----------------------------------------------------------------------

export default function ProductDetailView() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const cartWidgetRef = React.useRef();

  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [purchaseType, setPurchaseType] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [expanded, setExpanded] = useState(false); // 控制购买类型折叠面板的展开状态
  const [expandedParams, setExpandedParams] = useState(false);
  const { addCheck } = useCheckStore();
  const router = useRouter();
  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handlePurchaseTypeChange = (selectedType) => {
    setPurchaseType(selectedType);
  };

  const handleBuyNow = () => {
    if (!size || !color || !purchaseType) {
      setShowAlert(true);
      setExpanded(true); // 展开购买类型选择界面
    } else {

      addCheck({
        id: product.id,
        name: product.name,
        quantity: '1',
        price: product.price,
      });
      router.push('/checkout');
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const renderHeader = (
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        width: 1,
        lineHeight: 0,
        position: 'fixed',
        p: (theme) => ({ xs: theme.spacing(3, 3, 0), sm: theme.spacing(5, 5, 0) }),
      }}
    >
      <Logo />
    </Box>
  );

  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.cover,
      quantity: 1,
    };
    addToCart(item);
    cartWidgetRef.current.toggle();

  };

  if (!product) {
    return (
      <>
        {renderHeader}

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

            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
              sure to check your spelling.
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
      </>
    );

  }

  return (
    <Container>
      <Button variant="contained" onClick={() => navigate('/products')} sx={{ mb: 3 }}>
        返回列表
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.cover}
            alt={product.name}
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {product.name}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2, color: 'text.secondary' }}>
            ¥{product.price}
          </Typography>
          {product.priceSale && (
            <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
              销售价: ¥{product.priceSale}
            </Typography>
          )}
          <Typography variant="body1" sx={{ mb: 2 }}>
            {product.description}
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Accordion expanded={expandedParams} onChange={(event, isExpanded) => setExpandedParams(isExpanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>商品参数</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">型号: {product.specifications.model}</Typography>
              <Typography variant="body2">品牌: {product.specifications.brand}</Typography>
              <Typography variant="body2">重量: {product.specifications.weight}</Typography>
              <Typography variant="body2">尺寸: {product.specifications.dimensions}</Typography>
              <Typography variant="body2">颜色: {product.specifications.color}</Typography>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 2 }} />

          <Accordion expanded={expanded} onChange={(event, isExpanded) => setExpanded(isExpanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>购买类型</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                {['类型1', '类型2', '类型3'].map((type) => (
                  <Button
                    key={type}
                    variant={purchaseType === type ? 'contained' : 'outlined'}
                    onClick={() => handlePurchaseTypeChange(type)}
                    sx={{
                      borderRadius: 3,
                      fontWeight: purchaseType === type ? 'bold' : 'normal',
                      backgroundColor: purchaseType === type ? 'primary.main' : 'background.paper',
                      color: purchaseType === type ? 'common.white' : 'text.primary',
                      '&:hover': {
                        backgroundColor: purchaseType === type ? 'primary.dark' : 'action.hover',
                      },
                    }}
                  >
                    {type}
                  </Button>
                ))}
              </Box>

              <Typography variant="subtitle1" sx={{ mb: 1 }}>尺码</Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                {['S', 'M', 'L', 'XL'].map((s) => (
                  <Button
                    key={s}
                    variant={size === s ? 'contained' : 'outlined'}
                    onClick={() => handleSizeChange(s)}
                    sx={{
                      borderRadius: 3,
                      fontWeight: size === s ? 'bold' : 'normal',
                      backgroundColor: size === s ? 'primary.main' : 'background.paper',
                      color: size === s ? 'common.white' : 'text.primary',
                      '&:hover': {
                        backgroundColor: size === s ? 'primary.dark' : 'action.hover',
                      },
                    }}
                  >
                    {s}
                  </Button>
                ))}
              </Box>

              <Typography variant="subtitle1" sx={{ mb: 1 }}>颜色</Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                {['红色', '蓝色', '绿色', '黑色'].map((c) => (
                  <Button
                    key={c}
                    variant={color === c ? 'contained' : 'outlined'}
                    onClick={() => handleColorChange(c)}
                    sx={{
                      borderRadius: 3,
                      fontWeight: color === c ? 'bold' : 'normal',
                      backgroundColor: color === c ? 'primary.main' : 'background.paper',
                      color: color === c ? 'common.white' : 'text.primary',
                      '&:hover': {
                        backgroundColor: color === c ? 'primary.dark' : 'action.hover',
                      },
                    }}
                  >
                    {c}
                  </Button>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2">销量: {product.sales}</Typography>
            <Typography variant="body2">库存: {product.stock}</Typography>
            <Typography variant="body2">浏览量: {product.views}</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              sx={{
                flexGrow: 1,
                borderRadius: 3,
                fontWeight: 'bold',
                backgroundColor: 'primary.main',
                color: 'common.white',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              加入购物车
            </Button>
            <Button
              variant="contained"
              onClick={handleBuyNow}
              sx={{
                flexGrow: 1,
                borderRadius: 3,
                fontWeight: 'bold',
                backgroundColor: 'primary.main',
                color: 'common.white',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              }}
            >
              立即购买
            </Button>
          </Box>
        </Grid>
      </Grid>
      <CartWidget ref={cartWidgetRef} />
      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
          请先选择购买类型、尺码和颜色！
        </Alert>
      </Snackbar>
    </Container>
  );
}
