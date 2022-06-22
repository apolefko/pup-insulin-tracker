import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//5 rows (header + 4 weeks)
//7 columns (Sunday through Monday)

function tempInfo(
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
    tempInfo(1, 2, 3, 4, 5, 6, 7),
    tempInfo(1, 2, 3, 4, 5, 6, 7),
    tempInfo(1, 2, 3, 4, 5, 6, 7),
  ];

  console.log(rows);

function TableMonth() {
    return (
        <>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Sunday</TableCell>
                        <TableCell>Monday</TableCell>
                        <TableCell>Tuesday</TableCell>
                        <TableCell>Wednesday</TableCell>
                        <TableCell>Thursday</TableCell>
                        <TableCell>Friday</TableCell>
                        <TableCell>Saturday</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default TableMonth; 