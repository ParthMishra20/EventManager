// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import '../styles/globalStyles.css'; // Correct import

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
    navigate('/main');
  };

  return (
    <Container className="container">
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '100px auto' }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          Login
        </Typography>
        <TextField
          label="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          style={{ marginTop: '20px', width: '100%' }}
        >
          Login
        </Button>
        <Button
          onClick={() => navigate('/register')}
          style={{ marginTop: '10px', width: '100%' }}
        >
          Don't have an account? Register
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;