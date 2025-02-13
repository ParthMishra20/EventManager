// src/pages/MainPage.js
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Button, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar';
import EventForm from '../components/EventForm';
import { useTheme } from '../context/ThemeContext'; // Correct import
import '../styles/globalStyles.css'; // Correct import

const MainPage = () => {
  const { darkMode, toggleTheme } = useTheme(); // Now this will work

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Button
          onClick={toggleTheme}
          className={darkMode ? 'button-secondary' : 'button-primary'}
          style={{ marginBottom: '20px' }}
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </Button>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <EventForm />
        </Paper>
      </Box>
    </Box>
  );
};

export default MainPage;