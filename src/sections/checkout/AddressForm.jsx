import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm() {
  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} md={12}>
        <FormLabel htmlFor="姓名" required>
          收件人
        </FormLabel>
        <OutlinedInput
          id="name"
          name="name"
          type="name"
          placeholder="收件人姓名"
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={12}>
        <FormLabel htmlFor="手机号" required>
          手机号
        </FormLabel>
        <OutlinedInput
          id="phone"
          name="phone"
          type="phone"
          placeholder="手机号"
          required
        />
      </FormGrid>
      <FormGrid item xs={6} md={6}>
        <FormLabel htmlFor="city" required>
          省份
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="北京"
          autoComplete="City"
          required
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="state" required>
          城市
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state"
          type="state"
          placeholder="北京市"
          autoComplete="State"
          required
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="zip" required>
          区
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="zip"
          type="zip"
          placeholder="海淀区"
          autoComplete="shipping postal-code"
          required
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="country" required>
          街道
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="country"
          placeholder="北下关街道"
          autoComplete="shipping country"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          详细地址
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="北京交通大学"
          autoComplete="shipping address-line1"
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="保存为默认地址"
        />
      </FormGrid>
    </Grid>
  );
}
