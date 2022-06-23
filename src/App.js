import React from 'react';
import { Grid } from '@mui/material';
import AddInfo from './components/AddInfo';
import TableMonth from './components/TableMonth';
import Header from './components/Header';


/*const GET_INSULIN = gql `
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

const {data, loading, error} = useQuery(GET_INSULIN); 
//console.log(data, "hm");

if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;

<Grid style={{paddingTop:20}} item xs={12} md={7}>
            <div>
            {data.insulin.map((insulin) => (<p><span>Day = {insulin.day} | Week = {insulin.week} | Morning Dose = {insulin.morningDose}</span></p>))}
            </div>
        </Grid>
*/

function App() {


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
      </Grid>
    </>
  );
}

export default App;
