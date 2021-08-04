import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Public = ({ component, isAuthenticated,token, ...rest}) => {

  console.log('THE PUBLIC ' + token);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
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
  token:PropTypes.bool

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  token:state.auth.token
})

export default connect(mapStateToProps,)(Public);