import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
import { useUserState } from "../context/UserContext";
//import Alert from "../pages/Alerts/Alert";
import {Provider} from "react-redux";
import store from '../Store';
import Private   from "../pages/Routes/Private";
import Public  from "../pages/Routes/Public";

export default function App() {
  // global
 // var { isAuthenticated } = useUserState();
  //const isAuthenticated = true;
  return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
                    <Route
                        exact
                        path="/app"
                        render={() => <Redirect to="/app/dashboard" />}
                    />

                    <Private path="/app" component={Layout} />


                    <Public path="/login" component={Login} />
                    <Route component={Error} />
                </Switch>
            </HashRouter>
        </Provider>



  );

  // #######################################################################

  /*function PrivateRoute({ component, ...rest }) {
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
  }*/

  /*function PublicRoute({ component, ...rest }) {
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
  }*/
}
