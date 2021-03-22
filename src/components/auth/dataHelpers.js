import axios from 'axios';
import { API } from '../../EndPoints';

export const performLogin = async (user) => {
    const response = await axios.post(API._login, user);
    return response;
}