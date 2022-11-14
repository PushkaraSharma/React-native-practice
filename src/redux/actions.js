export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';
export const GET_CITIES = 'GET_CITIES';

const API_URL = 'https://mocki.io/v1/a2efefe7-0056-4166-ad60-d9a2df73b99a';

export const setName = name => dispatch => {
    dispatch({
        type: SET_NAME,
        payload: name,
    });
};

export const setAge = age => dispatch => {
    dispatch({
        type: SET_AGE,
        payload: age,
    });
};

export const increaseAge = age => dispatch => {
    dispatch({
        type: INCREASE_AGE,
        payload: age,
    });
};

export const getCities = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: 'GET_CITIES',
                    payload: json
                })
            }
            else {
                console.log("There is some issue with API!!");
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}