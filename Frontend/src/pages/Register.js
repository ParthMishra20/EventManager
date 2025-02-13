// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import '../styles/globalStyles.css'; // Correct import

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Add registration logic here
    navigate('/main');
  };

  return (
    <Container className="container">
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '100px auto' }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          Register
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleRegister}
          style={{ marginTop: '20px', width: '100%' }}
        >
          Register
        </Button>
        <Button
          onClick={() => navigate('/')}
          style={{ marginTop: '10px', width: '100%' }}
        >
          Already have an account? Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Register;