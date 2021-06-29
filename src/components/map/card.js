import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai'
import Switch from '@material-ui/core/Switch';
import Toggle from '../../images/toggle.png'
export default ({time,status}) => {
    const [stelth,setstelth]=React.useState(false)
    return <div className=" card-1">
        <div className="d-flex-card">
            <div>
                <AiOutlineClockCircle color="#09D9EC" size={40} className="icon-stl-cst" />
            </div>
            <div>
                <p className="identity-text cl-prm mt-25">TIME RUNNING</p>
                <p className="identity-text cl-wht mt-25">{time}</p>
            </div>
        </div>
        <hr className="card-1-brd"></hr>
        <div className="d-flex-card mt-25 mb-25" >
            <div>
            <div className="toggleParent"  >
                    <img className="toggle-img" src={Toggle}/>
                </div>
                {/* 
                <div>
                    <Switch
                        size="small"
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div> */}

            </div>
           <div className="stelth-box">
           <div style={{marginTop: -21}}> 
                <p className="identity-text cl-prm mt-25">STEALTHVPN</p>
                <p className="identity-text cl-wht mt-25" style={{fontSize:14}}>{stelth?"ENABLED":"DISABLED"}</p>
            </div>
           <div style={{position:'relative',}}>
           <Switch
                        checked={stelth}
                        size="large"
                        color="primary"
                        name="checkedB"
                        onChange={()=>{setstelth(!stelth)}}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
               </div>
           </div>
        </div>

    </div>
}