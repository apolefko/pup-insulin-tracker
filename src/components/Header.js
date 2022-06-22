import { AppBar, Toolbar, Typography} from '@mui/material';
import MedicationIcon from '@mui/icons-material/Medication'
import React from 'react';

function Header() {

    return (
        <AppBar position='fixed'>
            <Toolbar color='primary'>
                <MedicationIcon style={{marginRight: "10px"}}/>
            <Typography variant="h6" component="h1" style={{marginLeft:"5px",marginTop:'5px'}}>
                    Pup Diabetes Tracker (WIP)
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;