import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from './HomeIcon'
import Dashboard from './Dashboard'

import Drawer from '@mui/material/Drawer';

export default function ButtonAppBar() {
    return (
        <Drawer
            variant="permanent"
            anchor="top"
        >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button href="/home" variant='outline' ><HomeIcon />Home</Button>
                        </Typography>
                        <Dashboard />
                    </Toolbar>
                </AppBar>
            </Box>
        </Drawer>
    );
}
