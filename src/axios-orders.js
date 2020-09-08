import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-1dae9.firebaseio.com/'
})

export default instance;