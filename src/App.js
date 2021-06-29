import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import VPN from './pages/vpn'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  colors,
  createMuiTheme,
  ThemeProvider
  
} from '@material-ui/core'
const theme = createMuiTheme({
  palette: {
   
    primary: {
      main: "#0EBBDA"
    },
    secondary: {
      main: "#ffffff"
    },
    error: {
      main: colors.red.A400
    },
   
  }
});

function App() {

  const [user,setuser]=React.useState(null);
  return (
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    {user!=null?<VPN />:<Login setuser={setuser}/>}
   </ThemeProvider>
  );
}

export default App;
