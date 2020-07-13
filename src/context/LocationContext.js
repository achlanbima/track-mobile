import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addRecording = dispatch => () => {};

export const { Context, Provider } = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addRecording},
    { recording: false, locations: [], currentLocation: null }
);