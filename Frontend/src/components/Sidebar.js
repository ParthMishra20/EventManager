// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import '../styles/globalStyles.css'; // Correct import path

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: '240px', flexShrink: 0 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;