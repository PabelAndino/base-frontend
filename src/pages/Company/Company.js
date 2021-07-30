import React, {useContext, useState} from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import Widget from "../../components/Widget";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {Autorenew} from "@material-ui/icons";
import {login} from "../../actions/auth";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Alert from "../Alerts/Alert";
import { Redirect } from "react-router-dom";


const Company = ({login,isAuthenticated}) => {


  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',

        flexWrap: 'wrap',
      },
    },
    button: {
      '& > *': {
        margin: theme.spacing(1),
      },

    },
  }));
  const classes = useStyles();

  const [formData, setFormData] = useState({
    username:'',
    password:'',
    btnDisable:true
  });

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

  const handleAlert = (e)=>{
    e.preventDefault();
    //login(username,password);

  }



  return (
    <div>
      <Alert/>
      <Grid container spacing={3}>
        <Grid item xs={6} md={6}>
          <form className={classes.root} noValidate autoComplete="off">

            <Widget title="Company Data" upperTitle >
              <TextField id="nombre" name={'Nombre'} fullWidth  onChange={e=>onChange(e)} value={username} name="username" label="Nombre" variant="outlined" />
              <TextField id="direccion" name={'Direccion'} onChange={e=>onChange(e)}value={password} name="password" label="Direccion" variant="outlined" />
              <TextField id="email" name={'Email'} label="Email" variant="outlined" />
              <TextField id="ruc" name={'Ruc'} label="Ruc" variant="outlined" />
              <div className={classes.button}>
                <Button
                    variant="contained"
                    type={'submit'}
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />
                    }
                    onClick={handleAlert}
                >
                  Save
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<Autorenew />}
                >
                  Cancel
                </Button>
              </div>


            </Widget>
          </form>
        </Grid>
        {/*<Grid item xs={6} md={6}>
          <form className={classes.root} noValidate autoComplete="off">

            <Widget title="Datos del Cliente" upperTitle >
              <TextField id="outlined-basic" label="Nombre" variant="outlined" />
              <TextField id="outlined-basic" label="Direccion" variant="outlined" />
              <TextField id="outlined-basic" label="Cedula" variant="outlined" />
              <TextField id="outlined-basic" label="Telefono" variant="outlined" />
              <TextField id="outlined-basic" label="Opcion" variant="outlined" />
            </Widget>
          </form>
        </Grid>*/}

      </Grid>


    </div>
  );
};

Company.propTypes = {
  login:PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login})(Company);