import React from 'react';
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    { id: 1, name: '商品 1', price: 99, quantity: 1, imageUrl: '/assets/images/products/product_1.jpg' },
    { id: 2, name: '商品 2', price: 200, quantity: 2, imageUrl: '/assets/images/products/product_2.jpg' },
  ]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // 结算逻辑
  };

  const handleQuantityChange = (id, delta) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item,
    ));
  };


  return (
    <div>

      <IconButton color="inherit" onClick={toggleCart}>
        <Badge badgeContent={items.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={toggleCart}
        PaperProps={{
          sx: { width: 430, p: 2 },
        }}
      >
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>
              <Card style={{ width: '100%' }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6" sx={{ mb: 1 }}>{item.name}</Typography>
                      <Typography variant="caption" color="textSecondary"
                                  sx={{ mb: 1 }}>¥{item.price}</Typography>
                      <Grid container alignItems="center">
                        <IconButton size="small" onClick={() => handleQuantityChange(item.id, -1)}>
                          <RemoveIcon />
                        </IconButton>
                        <Typography color="textSecondary">{item.quantity}</Typography>
                        <IconButton size="small" onClick={() => handleQuantityChange(item.id, 1)}>
                          <AddIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <img src={item.imageUrl} alt={item.name}
                           style={{ width: '100px', height: '100px', marginTop: '8px' }} /> {/* 添加图片 */}
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
      </Drawer>
    </div>
  );
};

export default Cart;
