import React from 'react';
import { Button, Grid, Select, TextField, MenuItem} from '@mui/material';
import {gql, useMutation } from '@apollo/client';

/* <Grid item xs={3}>
                    <TextField fullWidth placeholder='Input Morning Dose'></TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField fullWidth placeholder='Input Evening Dose'></TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField fullWidth placeholder='Input Morning Reading'></TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField fullWidth placeholder='Input Evening Reading'></TextField>
                </Grid>
                <Box width="100%"/>
                <Grid item xs={6}>
                    <Button fullWidth variant='contained'> Add </Button>
               </Grid>
               <Grid item xs={6}>
                    <Button fullWidth color='error' variant='outlined'> Reset Month </Button>
                </Grid>

function textAddLabel() {
    const [day, setDay] = React.useState('');
  
    const handleDaySelect = (event) => {
      setDay(event.target.value);
    };
*/

//FIXME add Select label functionality
//TODO Link the text values first to the dB onClick
//TODO Then conditionals for day and week
//June 22 added test add with manual values

const ADD_INSULIN = gql `
mutation addInsulin($week: Int!, $day: Int!, $md: String, $ed: String, $mr: String, $er: String) {
    insert_insulin(objects: {week: $week, day: $day, morningDose: $md, eveningDose: $ed, morningReading: $mr, eveningReading: $er}) {
      returning {
        day
        week
        eveningDose
        eveningReading
        morningDose
        morningReading
      }
    }
  }  `;



function AddInfo() {
    const [addInsulin] = useMutation(ADD_INSULIN); 


    async function handleAddInsulin(event) {
        event.preventDefault();
        //if (!todoText.trim()) return;
        //const data = await addInsulin({ variables: {week: 33, day:50, mr:"Please work, we see"}});
        await addInsulin({ variables: {week: 11, day:20, md:"1 unit", ed:"2 units",mr:"huh",er:"hmm" }});
      }

    return (
        <>
        <form>
            <Grid container spacing={2}
          alignItems="center"
          justifyContent="center"
          >
                <Grid item xs={2}>
                    <Select
                        style={{margin:'5px'}}
                        fullWidth
                        labelId="fixme"
                        id="fixme"
                        value={null}
                        label="Day"
                        onChange={null}
                        placeholder="Day"
                    >
                    <MenuItem value={10}>Sunday</MenuItem>
                    <MenuItem value={20}>Monday</MenuItem>
                    <MenuItem value={30}>Tuesday</MenuItem>
                    <MenuItem value={40}>Wednesday</MenuItem>
                    <MenuItem value={50}>Thursday</MenuItem>
                    <MenuItem value={60}>Friday</MenuItem>
                    <MenuItem value={70}>Saturday</MenuItem>
                    </Select>
                    <Select
                        style={{margin:'5px'}}
                        fullWidth
                        labelId="fixme2"
                        id="fixme2"
                        value={null}
                        label="Week"
                        onChange={null}
                        placeholder="Week"
                    >
                    <MenuItem value={11}>Week 1</MenuItem>
                    <MenuItem value={22}>Week 2</MenuItem>
                    <MenuItem value={33}>Week 3</MenuItem>
                    <MenuItem value={44}>Week 4</MenuItem>
                    </Select>
                </Grid>

                <Grid item xs={2}>
                        <TextField style={{padding:'5px'}}  placeholder='Input Morning Dose'></TextField>
                        <TextField style={{padding:'5px'}}  placeholder='Input Evening Dose'></TextField>
                        <TextField style={{padding:'5px'}}  placeholder='Input Morning Reading'></TextField>
                        <TextField style={{padding:'5px'}}  placeholder='Input Evening Reading'></TextField>
                </Grid>
                

                <Grid item xs={2}>
                    <Button onClick={handleAddInsulin} style={{margin:'5px', width:"100%"}} variant='contained'> Add </Button>
                    <Button style={{margin:'5px', width:"100%"}} color='error' variant='outlined'> Reset Month </Button>
                </Grid>
            </Grid>
        </form>
        </>
    )
}

export default AddInfo; 