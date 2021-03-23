import axios from 'axios';
import { API } from '../../EndPoints';
import { bake_cookie } from 'sfcookies';

export const performLogin = async (user) => {
    const response = await axios.post(API._login, user);
    return response;
}

export const performSignup = async (user) => {
    const response = await axios.post(API._signup, user);
    return response;
}

export const getAccessToken = async (refreshToken) => {
    const response = await axios.post(API._refresh, refreshToken);
    return response;
}