import { styled } from '@mui/material/styles';

import {
  IconButton,
  Drawer,
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
  Button,
  Badge,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useImperativeHandle } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Iconify from '../../components/iconify';
import useCartStore from '../../stores/cartStore';
import { useRouter } from '../../routes/hooks';
import useCheckStore from '../../stores/checkStore';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
  borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 },
}));


// ...

const CartWidget = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const router = useRouter();
  const { addCheck } = useCheckStore();

  useImperativeHandle(ref, () => ({
    toggle: () => setOpen(!open),
  }));

  const handleQuantityChange = (id, delta) => {
    const newItem = cart.find((item) => item.id === id);
    if (newItem) {
      const newQuantity = newItem.quantity + delta;
      if (newQuantity >= 1) {
        updateQuantity(id, newQuantity);
      }
    }
  };

  const handleDelete = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    // 将购物车的内容赋值给 check
    cart.forEach(item => addCheck(item));
    router.push('/checkout');
  };

  return (
    <>
      <StyledRoot>
        <Badge showZero badgeContent={cart.length} color="error" max={99} onClick={() => setOpen(true)}>
          <Iconify icon="eva:shopping-cart-fill" width={24} height={24} />
        </Badge>
      </StyledRoot>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 430, p: 2 } }}>
        <Box display="flex" flexDirection="column">

          <Box display="flex" justifyContent="flex-start">
            <IconButton onClick={() => setOpen(false)}>
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <List>
            {cart.map((item) => (
              <ListItem key={item.id}>
                <Card style={{ width: '100%' }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h6" sx={{ mb: 1 }}>{item.name}</Typography>
                        <Grid container alignItems="center">
                          <IconButton size="small" onClick={() => handleQuantityChange(item.id, -1)}>
                            <RemoveIcon />
                          </IconButton>
                          <Typography color="textSecondary">{item.quantity}</Typography>
                          <IconButton size="small" onClick={() => handleQuantityChange(item.id, 1)}>
                            <AddIcon />
                          </IconButton>
                        </Grid>
                        <Typography variant="caption" color="textSecondary" sx={{ mb: 1 }}>
                          ¥{item.price}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <img src={item.imageUrl} alt={item.name}
                             style={{ width: '100px', height: '100px', marginTop: '8px' }} />
                      </Grid>
                      <Grid item xs={1}>
                        <IconButton onClick={() => handleDelete(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>
          <Button variant="contained" color="primary" onClick={handleCheckout}>
            结算
          </Button>
        </Box>
      </Drawer>
    </>
  );
});

export default CartWidget;