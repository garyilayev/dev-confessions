import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// export this function to combine reducers
export default (confessions = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...confessions, action.payload];
        case UPDATE:
            return confessions.map((confession) => confession._id === action.payload._id ? action.payload : confession);
        case DELETE:
            return confessions.filter((confession) => confession._id !== action.payload);
        default:
            return confessions;
    }
}