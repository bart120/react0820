import axios from 'axios';

class BaseService {

    get(url) {
        return axios.get(url).then(this.promiseResolve).catch(this.promiseRefect);
    }

    post(url, obj) {
        return axios.post(url, obj).then(this.promiseResolve).catch(this.promiseRefect);
    }

    put(url, obj) {
        return axios.put(url, obj).then(this.promiseResolve).catch(this.promiseRefect);
    }

    delete(url) {
        return axios.delete(url).then(this.promiseResolve).catch(this.promiseRefect);
    }


    promiseResolve(resp) {
        if (resp.data == null) {
            //return Promise.resolve([]);
            return Promise.reject('La ressource est introuvable');
        }
        return Promise.resolve(resp.data);
    }

    promiseRefect(err) {
        console.warn(err);
        //....
        return Promise.reject(err.message || err);
    }
}

export default BaseService;