import React, {useState,createContext} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import useStyles from "../notifications/styles";
import { ToastContainer, toast } from "react-toastify";
import NotificationsPage from "./Notifications";




const Alert = ({alerts}) => {

    let message
    let msgType
    let msg = false

    let messageData = {
        message:'',
        msgType:''
    }

    if(alerts !== null && alerts.length === 1){
        alerts.map(alert=>{
            messageData.message = alert.msg
            messageData.msgType = alert.alertType
            msg = true

         });

    }



    return (
        <>

            {

                msg ? <NotificationsPage msgType={messageData}/> : console.log('')
            }


        </>


    );



}





Alert.propTypes ={
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state =>({
    alerts:state.alert
});

export default connect(mapStateToProps)(Alert);


