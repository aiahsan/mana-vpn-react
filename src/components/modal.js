import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import {BiArrowBack} from 'react-icons/bi'

import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
    paper: {
        backgroundColor: '#262f51',

        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 0, 0), 
        border: 'none',
        borderRadius: 14,
        borderWidth: 0,
        maxWidth: 400,
        margin: 'auto',
        color: 'white'
    },
}));

export default function TransitionsModal({ modal, setmodal }) {
    const classes = useStyles();
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
<Dialog
        fullScreen={fullScreen}
        open={modal}
        onClose={() => {
            setmodal(false)
        }}
        aria-labelledby="responsive-dialog-title"
      > 
      <DialogActions>
      <div className="region-list-header" style={{backgroundColor:'transparent'}} >
            <BiArrowBack color="white" onClick={()=>setmodal(false)} className="region-backicon "/>
            <h2 className="region-h2">Settings</h2>
        </div>
        </DialogActions>
       <div className="d-flex cst-modal-1" >
                        <h2 id="transition-modal-title">Account Managment</h2>
                        <h3 className="cstaccount">App Settings</h3>
                        <div style={{ marginTop: 30 }}>
                            <FormControl component="fieldset" >
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch />}
                                        label="Auto Launch"
                                    />
                                    <FormControlLabel
                                        control={<Switch />}
                                        label="Auto Connect"
                                    />
                                    <FormControlLabel
                                        control={<Switch />}
                                        label=" Save Login"
                                    />
                                </FormGroup>
                            </FormControl>

                        </div>

                        <h3 style={{ marginTop: 30 }}>VPN Configurations</h3>
                        <div style={{ marginTop: 30 }}>
                            <FormControl component="fieldset" >
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch />}
                                        label="StealthVPN "
                                    />
                                    <FormControlLabel
                                        control={<Switch />}
                                        label="Kill Switch "
                                    />
                                    <FormControlLabel
                                        control={<Switch />}
                                        label="Disable IPv6"
                                    />
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Cipher</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </FormControl>

                        </div>
                    </div>
      
        
      </Dialog>
          
        </div>
    );
}
