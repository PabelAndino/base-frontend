import {LOGIN_SUCCESS,LOGOUT} from "../actions/types";

const initialState ={
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    loading:false
}

export default function (state=initialState,action){
    const {type,payload} =  action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.access);
            return {
                ...state,
                isAuthenticated: true,
                token:payload.access
            }
        case LOGOUT:
            localStorage.removeItem('token');

        default :
            return state;
    }
}