import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { projectContent } from '@/consts/projectContent';
import { Chip, Typography } from '@mui/material';
import { LanguageChip } from './LanguageChip';

export default function ProjectTable() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableBody>
          {projectContent.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left"><img src={row.imageLink} height={70}/></TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left"><Typography style={{fontSize: 12}}>{row.description}</Typography></TableCell>
              <TableCell align='left'>{row.languages.map((props) => (
              
                <Chip label={props} size="small" style={{margin: 2}}/>
                
            ))} </TableCell>
 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
