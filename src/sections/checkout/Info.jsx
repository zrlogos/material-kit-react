import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import useCheckStore from '../../stores/checkStore';

function Info() {
  const { check: products } = useCheckStore();
  const totalPrice = products.reduce((total, product) => total + (product.quantity * product.price), 0);

  return (
    <>
      <Typography variant="subtitle2" color="text.secondary">
        合计
      </Typography>
      <Typography variant="h4" gutterBottom>
        ¥ {totalPrice}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={`×${product.quantity}`}
            />
            <Typography variant="body1" fontWeight="medium">
              ¥{product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Info;

