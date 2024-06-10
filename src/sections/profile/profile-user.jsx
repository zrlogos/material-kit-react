import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Box,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProfileUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    if (loggedInUserEmail) {
      const storedUser = JSON.parse(localStorage.getItem(loggedInUserEmail)); // 重命名为 storedUser
      setUser(storedUser);
    } else {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleUpdate = () => {
    if (!user.name || !user.email || !user.phone || !user.address) {
      setError('请填写所有字段');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = existingUsers.map(u => (u.email === user.email ? user : u));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem(user.email, JSON.stringify(user));
    localStorage.setItem('loggedInUserEmail', user.email);
    setError('');
  };

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        用户资料
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Avatar alt={user.name} src={user.avatar || '/assets/images/avatars/avatar_default.jpg'} sx={{ width: 128, height: 128 }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              margin="normal"
              id="name"
              label="姓名"
              name="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              label="电子邮件"
              name="email"
              value={user.email}
              disabled
            />
            <TextField
              fullWidth
              margin="normal"
              id="phone"
              label="电话"
              name="phone"
              value={user.phone || ''}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <TextField
              fullWidth
              margin="normal"
              id="address"
              label="地址"
              name="address"
              value={user.address || ''}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              onClick={handleUpdate}
            >
              更新资料
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
