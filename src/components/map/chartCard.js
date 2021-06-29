import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai'
import Switch from '@material-ui/core/Switch';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';

export default ({data,status,Icon,title}) => {
    const datachart = [
        {									
            color: "steelblue", 
            points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
        }
    ];
    return <div className=" card-2">
        <div className="d-flex-card"  >
            <div>
                {Icon}
               
            </div>
            <div>
                <p className="identity-text cl-prm mt-25">{title}</p>
                <p className="identity-text cl-wht mt-25">{data}</p>
            </div>
        </div>
        <hr style={{borderColor:'transparent'}}></hr>
        <div className="d-flex-card mt-25 mb-25" >
            <div>
            {/* <LineChart 
						width={200}
						height={100}
                        margins={0}
						data={datachart}
                        
					/> */}
            </div> 
        </div>

    </div>
}