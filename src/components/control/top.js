import React from 'react';
import logo from '../../images/logo.png'
import SemiCircleProgressBar from "react-progressbar-semicircle";
import ArcProgress from 'react-arc-progress';
export default ({ status }) => {
    return <div className="bckground-color-inner w-100 d-flex" style={{ paddingTop: 30, paddingBottom: 40 }}>
      {status==1?  <div className="h-200">

<ArcProgress
    progress={.7}

    arcEnd={360}
    fillThickness={15}
    fillColor={{ gradient: ["#1492c1", "#17b3d5", "#89e9fe"] }}
    thickness={15}
    arcStart={180}
    observer={(current) => {
        const { percentage, currentText } = current;
        console.log('observer:', percentage, currentText);
    }}
    animationEnd={({ progress, text }) => {

    }}
/>
<div className="prg-meter">
    <h2 className="prg-meter-h2">
        650MB
    </h2>
    <h5>
        TRAFFIC LEFT
    </h5>


</div>
</div>
:<>
   <img className="logo" src={logo} />
   <h2 className="ft-av-nex-thin title-font">ManaVPN</h2>
</>}
        <p className="ft-av-nex-thin status-font">{status==0?"UNSECURE":"SECURED"}</p>
        <p className="status-msg">{status==0?"Your Identity Is Not Protected":"Your Identity Is Protected"}</p>
      
    
    </div>
}