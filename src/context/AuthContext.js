import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";

const authReducer = ( state, action ) => {
    switch(action.type){
        case 'add_error':
            return { ...state, errorMessage:action.payload }
        case 'signup':
            return {...state, token:action.payload, errorMessage:''}
        default:
            return state
    }
};

const signin = dispatch => {
    return ({ email, password }) => {

    }
}

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            AsyncStorage.setItem('token',response.data.token);
            dispatch({
                type: 'signup',
                payload: response.data.token
            });

            console.log(response.data);
        } catch (error) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with signup'
            });
        }
    }
}

const signout = dispatch => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup},
    { token: '', errorMessage:'' }
);