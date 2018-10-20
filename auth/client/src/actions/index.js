import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = (formProps) => dispatch => {
    axios.post('http://localhost:9001/signup', formProps);
};
