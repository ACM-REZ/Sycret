import types from "./types";

const InitialState = {
    loaded: false,
    current: null,
    data: {},
    error: ''
}

export default (state = InitialState, {type, payload}) => {
    switch(type) {
        case types.setCurrent: 
            return {
                ...state, 
                current: payload
            }
        case types.fetchDataList:
            return {
                ...state,
                data: {...payload},
                loaded: true
            }
        case types.ErrorFetch:
            return {
                ...state,
                error: {...payload}
            }
        default:
            return state;
    }
}

export const setCurrent = (payload) => ({type: types.setCurrent, payload})