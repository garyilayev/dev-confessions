import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';


// Action Creators

export const getConfessions = () => async (dispatch) => {
    
    try {

        const { data } = await api.fetchConfessions();
        console.log(data);
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (err) {
        console.log(err); 
    }
}

export const createConfession = (confession) => async (dispatch) => {
    
    try {

        const { data } = await api.createConfession(confession);
        dispatch({ type: CREATE, payload: data });

    } catch (err) {
        console.log(err); 
    }
}

export const updateConfession = (id, confession) => async (dispatch) => {
    
    try {

        const { data } = await api.updateConfession(id, confession);
        dispatch({ type: UPDATE, payload: data });

    } catch (err) {
        console.log(err); 
    }
}

export const deleteConfession = (id) => async (dispatch) => {
    
    try {

        await api.deleteConfession(id);
        dispatch({ type: DELETE, payload: id });

    } catch (err) {
        console.log(err); 
    }
}