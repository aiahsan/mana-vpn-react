import React from 'react';

import Top from './control/top'
import ControlButton from './control/button'
import {FaHome} from 'react-icons/fa'
import {GiPoliceBadge} from 'react-icons/gi'
import {FaPowerOff} from 'react-icons/fa'
export default ({setDrawerstate,status,setstatus,selected,isSelected}) => {
    return <>
        <Top status={status} />
        <div className="w-100 d-flex">
            
           <ControlButton hasBigText={false} title="Identity" Icon={<FaHome color="#09DDEF"  size={40} className="icon-stl-cst"/> }/>
           <ControlButton hasBigText={true} title="Selected Region" selected={selected} isSelected={isSelected}  setDrawerstate={setDrawerstate} hasRight={true} Icon={<GiPoliceBadge color="#09D9EC" size={40} className="icon-stl-cst"/> }/>
          
            <div className="pd30pr">
                <button onClick={()=>setstatus(status==0?2:0)} className={`${status==2?"btn-normal1":"btn-normal"}`}>
                    
                    {status==2?<FaPowerOff/>:"Connect"}
                    
                </button>
            </div>
        </div>
    </>
}