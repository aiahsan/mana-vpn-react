import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai'

export default ({icon,city,region,hasBorder,i,onClose})=>

{
    console.log(i)
    return <><div onClick={onClose} className="w-100 d-flex-btn" style={{marginLeft:0,marginBottom:20,width:'90%',paddingLeft:'10%'}} >
    <div >
        <img src={icon} className="rg-img"/>
    </div>
    <div>
        <p className="identity-text cl-prm mt-25">City</p>
        <p className="identity-text cl-wht  ">{city}</p>
        
        <p className="identity-text cl-prm fs-14 mt-25" >Region</p>
        <p className="identity-text cl-wht  ">{region}</p>

    </div>

    </div>
        <hr className="card-1-brd" style={{width:hasBorder?'80%':"0%"}}></hr>
</>
}