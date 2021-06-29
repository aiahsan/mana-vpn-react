import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default ({setmodal})=>{
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return   <div className="pos-menu">
    <div className="menu-body" >
        <div>
            <p className="cl-wht txt-right" >Olive Yew</p>
            <p className="color-menu-1 txt-right">Basic Account</p>
        </div>

        <img className="logo-img cr-prt" onClick={handleClick} src="https://www.w3schools.com/howto/img_avatar.png" />
    </div>

    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PopoverClasses="MuiMenu-paper1"
        style={{ borderColor: 'black' }}
    >
        <MenuItem ><a style={{color:'white',textDecoration:'none'}} href="https://manavpn.com/me/login">Account Management</a></MenuItem>
        <MenuItem onClick={()=>{
            setmodal(true)
        }}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>

    </Menu>
</div>

}