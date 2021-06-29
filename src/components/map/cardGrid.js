import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './card'
import ChartCard from '../map/chartCard'
import {FaCloudUploadAlt,FaCloudDownloadAlt} from 'react-icons/fa'
const useStyles = makeStyles((theme) => ({
  root: {
    
  },

}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className="grid-root-card">
      <Grid container>
        <Grid item md={4} sm={6} xs={12}>
        <Card time="1 Days 12 Hrs 45 Mins" status="Enabled"/>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
        <ChartCard title="DATA RECEIVED" data="45.50 GB" Icon={<FaCloudUploadAlt color="#09D9EC" size={40} className="icon-stl-cst"/> }  />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
        <ChartCard title="DATA SENT" data="45.50 GB" Icon={<FaCloudDownloadAlt color="#09D9EC" size={40} className="icon-stl-cst"/> }  />
        </Grid>
      </Grid>
   
       </div>
  );
}
