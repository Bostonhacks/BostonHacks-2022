import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
const useStyles = makeStyles({
    table: {
        maxWidth: 800,
    },
    tableCell: {
        borderBottom: '1px solid white',
    },
    col1: {
        color: 'white',
        borderBottom: '1px solid white',
        backgroundColor: '#304773',
    },
    col2and4: { color: 'white', backgroundColor: '#344a88' },
    col3and5: { color: 'white', backgroundColor: '#3c578a' },
})

function createData(name, first, second, third, fourth) {
    return { name, first, second, third, fourth }
}

const rows = [
    createData('General email*', '✓', '✓', '✓', '✓'),
    createData('Bring API', '✓', '✓', '✓', '✓'),
    createData('Bring mentors', '2', '4', '∞', '∞'),
    createData('Host special side challenge**', '', '', '✓', '✓'),
    createData(
        'Speak at opening ceremony (can be pre-recorded or live)',
        '',
        '2 min',
        '4 min',
        '8 min'
    ),
    createData(
        'Access to emails to distribute recruiting materials',
        'Post-event',
        'Post-event',
        'Pre-event',
        'Pre-event'
    ),
    createData('Access to resumes', '', 'Post-event', 'Pre-event', 'Pre-event'),
    createData('Bring recruiters', '', '1', '2', '4'),
    createData('Virtual interview rooms', '', '', '✓', '✓'),
    createData('Email hackathon attendees', '', '', '✓', '✓'),
    createData('Distribute swag', '✓', '✓', '✓', '✓'),
    createData('Give branded/API prize', '✓', '✓', '✓', '✓'),
    createData('Logo on website & T-shirt', '✓', '✓', '✓', '✓'),
    createData('Branded virtual event', '', '', '✓', '✓'),
    createData('Sponsored Track (contact us!)', '', '', '', '✓'),
]
const SponsorTable = () => {
    const classes = useStyles()
    return (
        <TableContainer>
            <Table className={classes.table} align="center">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">$1.5k</TableCell>
                        <TableCell align="center">$3K</TableCell>
                        <TableCell align="center">$5K</TableCell>
                        <TableCell align="center">$7.5K</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            <TableCell
                                className={classes.col1}
                                align="left"
                                variant="body"
                            >
                                {row.name}
                            </TableCell>
                            <TableCell
                                className={
                                    (classes.tableCell, classes.col2and4)
                                }
                                align="center"
                            >
                                {row.first}
                            </TableCell>
                            <TableCell
                                className={
                                    (classes.tableCell, classes.col3and5)
                                }
                                align="center"
                            >
                                {row.second}
                            </TableCell>
                            <TableCell
                                className={
                                    (classes.tableCell, classes.col2and4)
                                }
                                align="center"
                            >
                                {row.third}
                            </TableCell>
                            <TableCell
                                className={
                                    (classes.tableCell, classes.col3and5)
                                }
                                align="center"
                            >
                                {row.fourth}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SponsorTable
