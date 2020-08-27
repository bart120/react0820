import React, { Component } from 'react';
import RoomService from '../../services/RoomService';
import { TableContainer, Table, TableCell, TableHead, TableRow, TableBody, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

class RoomListPage extends Component {

    servRoom = new RoomService();
    //classes = useStyles();

    state = {
        rooms: null
    }

    componentDidMount() {
        this.servRoom.getRooms().then((data) => {
            this.setState({ rooms: data });
        });
    }

    render() {
        return (
            <>
                <h2>Liste des salles</h2>
                {this.state.rooms ? (
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom</TableCell>
                                    <TableCell align="right">Prix</TableCell>
                                    <TableCell align="right">Places</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rooms.map((room) => (
                                    <TableRow key={room.name}>
                                        <TableCell component="th" scope="row">
                                            {room.name}
                                        </TableCell>
                                        <TableCell align="right">{room.price}</TableCell>
                                        <TableCell align="right">{room.seatCount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (<></>)}
            </>
        );
    }

}



export default RoomListPage;