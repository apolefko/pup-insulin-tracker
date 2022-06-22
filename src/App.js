import React from 'react';
import { Grid } from '@mui/material';
import AddInfo from './components/AddInfo';
import TableMonth from './components/TableMonth';
import Header from './components/Header';
import { gql, useQuery } from '@apollo/client';

//June 22 added get area beneath AddInfo, need to move to TableMonth.js 


const GET_INSULIN = gql `
query getInsulin {
  insulin {
    day
    eveningDose
    eveningReading
    morningDose
    morningReading
    week
  }
}`;

function App() {
  const {data, loading, error} = useQuery(GET_INSULIN); 
  console.log(data, "hm");

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Header />
      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
        <Grid style={{paddingTop:80}} item xs={12} md={7}>
            <TableMonth />
        </Grid>
        <Grid style={{paddingTop:20}} item xs={12} md={7}>
            <AddInfo />
        </Grid>
        <Grid style={{paddingTop:20}} item xs={12} md={7}>
            <div>
            {data.insulin.map((insulin) => (<p key={insulin.week}><span>Day = {insulin.day} Week = {insulin.week} Morning Dose = {insulin.morningDose}</span></p>))}
            </div>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
