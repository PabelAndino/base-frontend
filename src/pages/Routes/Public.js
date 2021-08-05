import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Public = ({ component, isAuthenticated,logged , ...rest}) => {

  return (

    <Route
      {...rest}
      render={props =>
        logged ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
};

Public.propTypes = {
  isAuthenticated: PropTypes.bool,
  logged:PropTypes.bool

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  logged:state.auth.logged
})

export default connect(mapStateToProps,)(Public);