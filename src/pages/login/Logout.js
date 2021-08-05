import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import useStyles from "../../components/Header/styles"
import { Typography } from "../../components/Wrappers";

const Logout = ({logout,logged}) => {
  var classes = useStyles();

  const handleLogout = () =>{
    logout();
    console.log('loggedoyt')
  }

  if(!logged){
    console.log('REDIRECTED')
    return <Redirect to={'/'}/>

  }

  return (
    <div className={classes.profileMenuUser}>

      <Typography
        className={classes.profileMenuLink}
        color="primary"
        onClick={()=>handleLogout()}
      >
        Salir
      </Typography>
    </div>
  );
};

Logout.propTypes = {
  logout:PropTypes.func.isRequired,
  logged:PropTypes.bool
}

const mapStateToProps = state => ({
  logout:state.auth,
  logged:state.auth.logged
})

export default connect(mapStateToProps,{logout})(Logout);
