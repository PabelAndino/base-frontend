import {v4 as uuid} from 'uuid';
import {SET_ALERT, REMOVE_ALERT} from "./types";
import {toast} from 'react-toastify';


export const setAlert = (msg, alertType, timeout= 5000)=> dispatch =>{
    const id = uuid();

    dispatch({
        type:SET_ALERT,
        payload:{msg,alertType, id}
    });


    /* //This works perfectly
    switch (alertType) {
        case 'success':
            toast.success(msg);
            break;

        case 'error':
            toast.error(msg);
            break;

        case 'warning':
            toast.warning(msg);
            break;

        default :
            toast.info(msg);
    }
*/


    setTimeout(()=>dispatch({
        type:REMOVE_ALERT,
        payload:id
    }),timeout);

}