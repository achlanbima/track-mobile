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
        case 'clean_error_message':
            return {...state, errorMessage:''}
        default:
            return state
    }
};

const tryLocalSignin = dispatch => async ({ email, password }) => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({
            type: 'signin',
            payload: response.data.token
        });
        navigate('TrackList');
    }else{
        navigate('Signin');
    }
}

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

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clean_error_message' });
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
    {signup, signin, clearErrorMessage, tryLocalSignin},
    { token: '', errorMessage:'' }
);