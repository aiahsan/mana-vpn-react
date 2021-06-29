import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../images/logo.png'
import HomeIcon from '@material-ui/icons/Home';
import Map from '../images/map.png'
import Control from '../components/control'
import CardGrid from '../components/map/cardGrid'
import Drawer from '@material-ui/core/Drawer';
import Austria from '../images/at.png'
import Aust from '../images/au.png'
import Bel from '../images/bg.png'
import RegionList from '../components/Region/regionList'
import Menu from '../components/menu'
import Modal from '../components/modal'

export default () => {
    const [Drawerstate, setDrawerstate] = React.useState(false);
    const [FavRegion, setFavRegion] = React.useState([{
        img: Aust,
        cit: 'Brisbane',
        region: 'Queensland'
    }, {
        img: Austria,
        cit: 'Brisbane',
        region: 'Queensland'
    }, {
        img: Austria,
        cit: 'Brisbane',
        region: 'Queensland'
    }]);
    const [Region, setRegion] = React.useState([{
        img: Bel,
        cit: 'Brisbane',
        region: 'Queensland'
    }, {
        img: Austria,
        cit: 'Brisbane',
        region: 'Queensland'
    }, {
        img: Aust,
        cit: 'Brisbane',
        region: 'Queensland'
    }]);
    //0 for not connected 1 for limit 2 for connected
    const [status,setstatus]=React.useState(0);
    const [modal,setmodal]=useState(false);
    const [isSelected,setisSelected]=React.useState(false);
    const [selected,setselected]=React.useState({
        img: '',
        cit: '',
        region: ''   
    })
    const handleSelect=(select)=>{
        setselected(select);
        setisSelected(true);
    }
    return <>
        <Menu setmodal={setmodal} />
        <Grid container>
            <Grid item xs={12} md={3} container >
                <Control isSelected={isSelected} selected={selected} status={status} setDrawerstate={setDrawerstate} setstatus={setstatus} />
            </Grid>
            <Grid item xs={12} sm={12} md={9} container >
                <Drawer anchor="left" open={Drawerstate} onClose={() => setDrawerstate(false)}>
                    <RegionList FavRegion={FavRegion} onClose={() => setDrawerstate(false)} Region={Region} />
                </Drawer>
                <img src={Map} className="map-main" />
                <CardGrid />

            </Grid>

        </Grid>
        <Modal modal={modal} setmodal={setmodal}/>
        
    </>
}