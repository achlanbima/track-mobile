import createDataContext from "./createDataContext";
import TrackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = ( state, action ) => {
    switch(action.type){
        case 'add_error':
            return { ...state, errorMessage:action.payload }
        case 'signup':
            return {...state, token:action.payload, errorMessage:''}
        case 'signin':
            return {...state, token:action.payload, errorMessage:''}
        default:
            return state
    }
};

const signin = dispatch => async ({ email, password }) => {
    try{
        const response = await TrackerApi.post('/signin', { email, password });
        AsyncStorage.setItem('token',response.data.token);
        dispatch({
            type: 'signin',
            payload: response.data.token
        });
        navigate('TrackList');
    }catch(err){
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with signin'
        });
    }
}

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await TrackerApi.post('/signup', { email, password });
            AsyncStorage.setItem('token',response.data.token);
            dispatch({
                type: 'signup',
                payload: response.data.token
            });
            navigate('TrackList');
            console.log(response.data);
        } catch (error) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with signup'
            });
        }
    }
}

const signout = dispatch =>  () => {
        
    }

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin},
    { token: '', errorMessage:'' }
);