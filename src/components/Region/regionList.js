import React from 'react';
import RegionCard from './region'
import {BiArrowBack} from 'react-icons/bi'

export default ({Region,FavRegion,onClose})=>{
    return   <div className="region-list">
        <div className="region-list-header" >
            <BiArrowBack color="white" onClick={onClose} className="region-backicon "/>
            <h2 className="region-h2">Select Region</h2>
        </div>
    <h3 className="fv-crd-head">FAVORITES</h3>
    <div style={{}}>
        {FavRegion.map((x, i) => <RegionCard onClose={onClose} city={x.cit} region={x.region} i={i} hasBorder={FavRegion.length == i + 1 ? false : true} icon={x.img} />)}
    </div>
    <div style={{ backgroundColor: '#000000' ,paddingTop:10}}>
        <h3 className="fv-crd-head">SELECT REGION</h3>

        {Region.map((x,i) => <RegionCard onClose={onClose} city={x.cit} i={i} hasBorder={FavRegion.length == i + 1 ? false : true} region={x.region} icon={x.img} />)}
    </div>
</div>
}