import axios from "axios";
import {setAlert} from "./alert";
import {LOGIN_SUCCESS,LOGOUT} from "./types";

export const login = (username,password) => async dispatch => {
    const config = {
        headers :{
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({username,password});

    try{
        const res = await axios.post('http://127.0.0.1:8000/api/gettoken/',body,config)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        });
    }
    catch(error) {
        if(!error.response){
            dispatch(setAlert('No hay coneccion con el servidor', 'error'));
            //
        }else{
            dispatch(setAlert(''+error.response.data.detail, 'error'));
        }

    }
}

export const logout =()=> dispatch =>{
    dispatch(setAlert('Logout Successfully','success'))
    dispatch({
        type:LOGOUT
    })
}