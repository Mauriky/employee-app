import PeopleAlt from '@mui/icons-material/PeopleAlt';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';


const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
     
        
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
              <Button href='/employee'>
              <ListItem  key="employee">
                <ListItemIcon>
                 <PeopleAlt/>
                </ListItemIcon>
                <ListItemText primary="Employee" />
              </ListItem>
              </Button>
          </List>
          <Divider />
          
        </Box>
      </Drawer>
      
    </Box>
  );
}
