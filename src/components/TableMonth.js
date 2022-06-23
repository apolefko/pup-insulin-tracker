import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { gql, useQuery } from '@apollo/client';

//5 rows (header + 4 weeks)
//7 columns (Sunday through Monday)
//FIXME what if there's not a Sunday or whatever, empty spaces, etc. 

const GET_INSULIN_WEEK1 = gql `
query MyQuery {
    insulin(order_by: {day: asc}, where: {week: {_eq: 11}}) {
      day
      eveningDose
      eveningReading
      id
      morningDose
      morningReading
      week
    }
  }`;

const GET_INSULIN_WEEK2 = gql `
query MyQuery {
    insulin(order_by: {day: asc}, where: {week: {_eq: 22}}) {
      day
      eveningDose
      eveningReading
      id
      morningDose
      morningReading
      week
    }
  }`;

const GET_INSULIN_WEEK3 = gql `
query MyQuery {
    insulin(order_by: {day: asc}, where: {week: {_eq: 33}}) {
      day
      eveningDose
      eveningReading
      id
      morningDose
      morningReading
      week
    }
  }`;

  const GET_INSULIN_WEEK4 = gql `
  query MyQuery {
    insulin(order_by: {day: asc}, where: {week: {_eq: 44}}) {
      day
      eveningDose
      eveningReading
      id
      morningDose
      morningReading
      week
    }
  }`;

/*function tempInfo(
    sun,
    mon,
    tue,
    wed,
    thr,
    fri,
    sat
) {
    return { sun,mon,tue,wed,thr,fri,sat };
  }

const rows = [
    tempInfo(1, 2, 3, 4, 5, 6, 7),
    tempInfo(5, 2, 3, 6, 5, 6, 71),
    tempInfo(3, 2, 3, 3, 5, 6, 72),
    tempInfo(6, 2, 3, 2, 5, 6, 55),
  ];

  console.log(rows);

  {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        >
                            <TableCell align='right'>{row.sun}</TableCell>
                            <TableCell align="right">{row.mon}</TableCell>
                            <TableCell align="right">{row.tue}</TableCell>
                            <TableCell align="right">{row.wed}</TableCell>
                            <TableCell align="right">{row.thr}</TableCell>
                            <TableCell align="right">{row.fri}</TableCell>
                            <TableCell align="right">{row.sat}</TableCell>
                        </TableRow>
                    ))}


  */

function TableMonth() {
    const WeekQuery = () => {
        const week1 = useQuery(GET_INSULIN_WEEK1);
        const week2 = useQuery(GET_INSULIN_WEEK2);
        const week3 = useQuery(GET_INSULIN_WEEK3);
        const week4 = useQuery(GET_INSULIN_WEEK4);

        return [week1, week2, week3, week4];
      }
      
      const [
        { loading: loading1, data: data1 },
        { loading: loading2, data: data2 },
        { loading: loading3, data: data3 },
        { loading: loading4, data: data4 }
      ] = WeekQuery()
      
    if (loading1) return 'Loading...';
    if (loading2) return 'Loading...';
    if (loading3) return 'Loading...';
    if (loading4) return 'Loading...';
    //if (error1) return `Error! ${error.message}`;
    
    return (
        <>
        <TableContainer component={Paper}>
            <Table style={{ minWidth: 650 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'> Month </TableCell>
                        <TableCell align='center'>Sunday</TableCell>
                        <TableCell align='center'>Monday</TableCell>
                        <TableCell align='center'>Tuesday</TableCell>
                        <TableCell align='center'>Wednesday</TableCell>
                        <TableCell align='center'>Thursday</TableCell>
                        <TableCell align='center'>Friday</TableCell>
                        <TableCell align='center'>Saturday</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow> <TableCell>Week 1</TableCell> 
                        {data1.insulin.map((insulin) => (
                            <TableCell key={insulin.id}><ul><li>{insulin.day}</li><li>Morning Dose = {insulin.morningDose}</li><li>Evening Dose = {insulin.eveningDose}</li></ul></TableCell>
                            ))}
                    </TableRow>
                    <TableRow> <TableCell>Week 2</TableCell>
                        {data2.insulin.map((insulin) => (
                            <TableCell key={insulin.id}><ul><li>{insulin.day}</li><li>Morning Dose = {insulin.morningDose}</li><li>Evening Dose = {insulin.eveningDose}</li></ul></TableCell>
                            ))}
                    </TableRow>
                    <TableRow> <TableCell>Week 3</TableCell>
                        {data3.insulin.map((insulin) => (
                            <TableCell key={insulin.id}><ul><li>{insulin.day}</li><li>Morning Dose = {insulin.morningDose}</li><li>Evening Dose = {insulin.eveningDose}</li></ul></TableCell>
                            ))}
                    </TableRow>
                    <TableRow> <TableCell>Week 4</TableCell>
                        {data4.insulin.map((insulin) => (
                            <TableCell key={insulin.id}><ul><li>{insulin.day}</li><li>Morning Dose = {insulin.morningDose}</li><li>Evening Dose = {insulin.eveningDose}</li></ul></TableCell>
                            ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default TableMonth; 