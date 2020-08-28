import React, { Component } from 'react';
import { TextField, Button, Select, FormControl, InputLabel, MenuItem, Snackbar } from '@material-ui/core';
import RoomService from '../../services/RoomService';
import { Alert } from '@material-ui/lab';

class RoomAddPage extends Component {

    servRoom = new RoomService();

    state = {
        room: {},
        message: '',
        pictures: [
            { name: 'Calliope', file: 'Calliope.jpg' },
            { name: 'Thalie', file: 'Thalie.jpg' },
            { name: 'Pegase', file: 'Pegase.jpg' }
        ],
        //openAlert:false
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        //console.log(this.state.room);
        this.servRoom.addRoom(this.state.room).then((room) => {
            //alert(`La salle ${room.name} a été ajouté avec l'id ${room.id}`);
            this.setState({ message: `La salle ${room.name} a été ajouté avec l'id ${room.id}` });
        });
    }

    onChangeFormField = (ev) => {
        this.setState({ room: Object.assign(this.state.room, { [ev.target.name]: ev.target.value }) });
    }

    handleClose = () => {
        this.setState({ message: '' });
    }



    render() {
        return (
            <>
                <Snackbar open={this.state.message !== ''} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        {this.state.message}
                    </Alert>
                </Snackbar>

                <h2>Ajouter une salle</h2>
                <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <TextField label="Nom" name="name" value={this.state.room.name || ''} onChange={this.onChangeFormField} />
                    </div>
                    <div>
                        <TextField label="Prix" name="price" value={this.state.room.price || ''} onChange={this.onChangeFormField} />
                    </div>
                    <div>
                        <TextField label="Places" name="seatCount" value={this.state.room.seatCount || ''} onChange={this.onChangeFormField} />
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel id="img">Image</InputLabel>
                            <Select labelId="img" name="image" onChange={this.onChangeFormField} value={this.state.room.image || ''}>
                                {this.state.pictures.map((item) => (
                                    <MenuItem key={item.name} value={item.file}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </div>
                    <div>
                        <Button variant="contained" type="submit">Enregistrer</Button>
                    </div>
                </form>
            </>
        );
    }

}

export default RoomAddPage;