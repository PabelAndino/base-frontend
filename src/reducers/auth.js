import {LOGIN_SUCCESS,LOGOUT} from "../actions/types";



let access = () =>{
    const credential = localStorage.getItem("token");
    if(credential) return true;
    else return false;
};

const initialState ={
    logged:access(),
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
                logged:true
            }
        case LOGOUT:
            let remove = localStorage.removeItem('token');
            return {
                remove
            }

        default :
            return state;
    }
}