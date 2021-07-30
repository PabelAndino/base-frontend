import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";


// styles
import useStyles from "./styles";



// context

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import Alert from "../Alerts/Alert";

function Login({login,isLoading, isAuthenticated}) {
  var classes = useStyles();

 /* // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");*/


  const [formData, setFormData] = useState({
    username:'',
    password:'',
    btnDisable:true
  });
  const [activeTabId, setActiveTabId] = useState(0);

  const {username, password,btnDisable} = formData;

  const onChange = e => {

    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });


    if(username.length > 3 && password.length > 3){
      setFormData({...formData,[e.target.name]:e.target.value,btnDisable: false});
    }else{
      setFormData({...formData,[e.target.name]:e.target.value,btnDisable: true});
    }

  }



  const handleLogin = (e) =>{
    e.preventDefault();
    login(username,password);
    console.log(username,password);
  }

  if(isAuthenticated){
    return <Redirect to={'/'}/>
  }


//admin@flatlogic.com   password
  return (

    <Grid container className={classes.container}>
      <Alert/>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered

          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            {/*<Tab label="New User" classes={{ root: classes.tab }} />*/}
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
              </Typography>
              {/*<Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>*/}
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>  </Typography>
                <div className={classes.formDivider} />
              </div>

              <TextField
                id="username"
                name="username"
                autoComplete={'off'}
                InputProps={{
                  classes: {

                    input: classes.textField,
                  },
                }}
                value={username}
                onChange={e=>onChange(e)}
                margin="normal"
                placeholder="Usuario"
                type="text"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                autoComplete={'off'}
                InputProps={{
                  classes: {
                    input: classes.textField,
                  },
                }}
                value={password}
                onChange={e=>onChange(e)}
                margin="normal"
                placeholder="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      //username.length === 0 || password.length === 0
                      btnDisable
                    }
                    onClick={e =>
                      handleLogin(e)
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}

              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create your account
              </Typography>





             {/* <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>*/}
            </React.Fragment>
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
        © 2021-{new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://facebook.com/ferreterianoelitojr" rel="noopener noreferrer" target="_blank">Ferreteria Noelito</a>. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}


Login.propTypes = {
  login:PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading:state.auth.isLoading
})

export default connect(mapStateToProps,{login})(Login);

//export default withRouter(Login);
