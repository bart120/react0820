
//import axios from 'axios';
import BaseService from './BaseService';

const URL_ROOMS = "http://formation-roomy.inow.fr/api/Rooms";

class RoomService extends BaseService {

    getRooms() {
        //return axios.get(URL_ROOMS);
        return this.get(URL_ROOMS);
    }


}


export default RoomService;