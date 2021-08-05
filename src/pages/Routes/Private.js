import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";


const Private = ({ component, isAuthenticated,logged ,...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        logged ? (
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
  isAuthenticated: PropTypes.bool,
  logged: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  logged: state.auth.logged
})

export default connect(mapStateToProps,)(Private);