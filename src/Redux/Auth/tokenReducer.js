import { GET_TOKEN } from './tokenTypes';
const initialState = {
    accessToken: ''
}

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN: return {
            ...state,
            accessToken: action.payload
        }
        default: return state;
    }
}

export default tokenReducer