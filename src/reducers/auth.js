import {LOGIN_SUCCESS,LOGOUT} from "../actions/types";


const isAuthenticated = '';
const authState = ()=>{
    const credential = localStorage.getItem("token");

    return false;
}

const initialState ={
    token:authState,
    isAuthenticated:false,
    loading:false
}

export default function (state=initialState,action){
    const {type,payload} =  action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.access);
            return {
                loading:false,
                isAuthenticated: true,
                token:true
            }
        case LOGOUT:
            localStorage.removeItem('token');

        default :
            return state;
    }
}