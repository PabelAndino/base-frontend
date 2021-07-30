import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Private = ({ component, isAuthenticated,...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};


Private.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,)(Private);