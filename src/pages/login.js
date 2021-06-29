import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { BsFillEyeSlashFill } from 'react-icons/bs'
import Logo from '../images/logo.png'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: 15,


  },
  background: {
    backgroundColor: 'transparent',

  },
  iconColor: {
    color: '#0EBBDA'
  },
  TextFieldParent: {
    backgroundColor: 'transparent',

    color: 'white',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'white'
    },
    '&::before': {
      border: 'none'
    },

  },
  TextField: {
    border: 'none'
  }


}));

export default function InputWithIcon({setuser}) {
  const classes = useStyles();
  const history1=useHistory();
  return (
    <div className="flex-box">
      <img src={Logo} className="logo" />
      <p className="ft-av-nex-thin title-font">ManaVPN</p>
      <div className={`TextFieldSize bckground-color-inner padding-inner`}>
        <p className="txt-center ft-av-nex-thin status-font-1">Welcome</p>
        <h2 className="txt-center cl-wht log-head-det">Log Into Your Account</h2>
        <Grid container>
          <Grid item xs={12}>
            <p className="status-font-2"  >Email</p>

            <TextField
              className={[classes.margin, classes.TextFieldParent]}
              id="input-with-icon-textfield"
              label="Your Email"
              fullWidth
              variant="outlined"

              InputLabelProps={{
                style: { color: 'white' }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle className={classes.iconColor} />
                  </InputAdornment>
                ),
                className: [classes.TextFieldParent]
              }}
            />

          </Grid>
          <Grid item xs={12}>
            <p className="status-font-2" >Password</p>
            <TextField

              className={[classes.margin, classes.TextFieldParent]}
              id="input-with-icon-textfield"
              label="Your Password"
              fullWidth
              InputLabelProps={{
                style: { color: 'white' }
              }}
              
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <BsFillEyeSlashFill size={24} className={classes.iconColor} />
                  </InputAdornment>
                ),
                className: [classes.TextFieldParent]
              }}
            />
            <div className="stelth-box">
              <p className="txt-right status-font-2" style={{ marginBottom: 50 }} ><FormControlLabel
                control={
                  <Checkbox

                    name="checkedB"
                    color="primary"
                  />
                }
                label="Remember Me"
              /></p>

              <p className="txt-right status-font-2 ftg-pass" style={{ marginTop: 25 }} ><a style={{color:'white',textDecoration:'none'}} href="https://manavpn.com/me/login">Forgot Password?</a></p>

            </div>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={()=>setuser({name:''})} fullWidth variant="contained" className="lg-btn" color="primary">
            LOGIN
      </Button>
          </Grid>
        </Grid>

      </div>

    </div>
  );
}
