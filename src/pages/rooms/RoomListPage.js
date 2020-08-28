import React, { Component } from 'react';
//import RoomService from '../../services/RoomService';
import { TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Paper, Button } from '@material-ui/core';
import { connect } from 'react-redux';

/*const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});*/

class RoomListPage extends Component {

    //servRoom = new RoomService();
    //classes = useStyles();

    state = {
        rooms: null
    }

    componentDidMount() {
        //console.log('PROPS: ', this.props);
        this.props.servRoom.getRooms().then((data) => {
            this.setState({ rooms: data });
            //console.log(data);
        });
    }

    deleteRow(id) {
        this.props.servRoom.deleteRoom(id).then((room) => {
            alert(`La salle ${room.name} a été supprimé.`);
            this.props.servRoom.getRooms().then((data) => {
                this.setState({ rooms: data });
            });
        });
        //console.log('ID', id);
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
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rooms.map((room) => (
                                    <TableRow key={room.id}>
                                        <TableCell component="th" scope="row">
                                            {room.name}
                                        </TableCell>
                                        <TableCell align="right">{room.price}</TableCell>
                                        <TableCell align="right">{room.seatCount}</TableCell>
                                        <TableCell align="right">
                                            <Button variant="contained" color="primary" onClick={() => this.deleteRow(room.id)}>Supprimer</Button>
                                        </TableCell>
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

const mapStateToProps = (stateStore) => {
    //console.log('STORE', stateStore);
    return { servRoom: stateStore.service.serviceRoom };
}

export default connect(mapStateToProps)(RoomListPage);