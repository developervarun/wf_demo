import axios from 'axios';

export const API = {
    getData(url) {
        return  axios.get(url = '../../navigation.json').then( res => res );
    }
}