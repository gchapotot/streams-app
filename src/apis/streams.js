import axios from 'axios';

//Connexion to json-server api (local database)
export default axios.create({
    baseURL: 'http://localhost:3001'
});