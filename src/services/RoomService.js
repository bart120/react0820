
//import axios from 'axios';
import BaseService from './BaseService';

const URL_ROOMS = "http://formation-roomy.inow.fr/api/Rooms";

class RoomService extends BaseService {

    getRooms() {
        //return axios.get(URL_ROOMS);
        return this.get(URL_ROOMS);
    }

    deleteRoom(id) {
        return this.delete(`${URL_ROOMS}/${id}`);
    }

    addRoom(room) {
        return this.post(URL_ROOMS, room);
    }

    updateRoom(room) {
        return this.put(`${URL_ROOMS}/${room.id}`, room);
    }

}


export default RoomService;