import axios from 'axios';

const url = 'https://dev-confessions-project.herokuapp.com/confessions';

export const fetchConfessions = () => axios.get(url);
export const createConfession = (newConfession) => axios.post(url, newConfession); 
export const updateConfession = (id, newConfession) => axios.patch(`${url}/${id}`, newConfession);
export const deleteConfession = (id) => axios.delete(`${url}/${id}`);  