

import React from 'react';
import logo from '../../images/logo.png'
import HomeIcon from '@material-ui/icons/Home';
import {BsCaretRight} from 'react-icons/bs'
export default ({Icon,hasRight,setDrawerstate,isSelected,selected,title,hasBigText})=>{
    return <div className={`w-100 d-flex-btn-new ${setDrawerstate?"btn-region-select":""}`} onClick={()=>setDrawerstate?setDrawerstate(true):null}>
    <div style={{display:'flex',paddingLeft:'10%',justifyContent:'space-around',alignItems:'center'}}>
    <div style={{}}>
      {Icon}
    </div>
    <div>
        <p className="identity-text cl-prm mt-25">{title}</p>
        <p className={`identity-text cl-wht mt-25 ${hasBigText?"cts-btn-ntl-1":"cts-btn-ntl"}`}>California, US</p>
        <p className="identity-text cl-prm fs-14 mt-25" >127.0.0.1</p>
    </div>
    </div>
    {
        hasRight?  <BsCaretRight style={{paddingRight:'16%'}} className="control-right-icon"/>
:<></>
    }
  </div>

}