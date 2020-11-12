import React from 'react'
import {GoogleMap, withScriptjs , withGoogleMap,Circle} from 'react-google-maps'


const WrappedMap =  withScriptjs(withGoogleMap( (props) => {
     
    const circles = props.circles.map(circle => 
         <Circle
            key = {circle.id}
            center ={{ lat: circle.lat , lng: circle.lng}}
            radius = {500}
        />

    )
    return (
        <div style = { {width: '50vw' , height: '50vh'}}>
            <GoogleMap
                defaultZoom={12}
                defaultCenter = {{ lat: -7.2195322, lng: -35.8851604}}
            >
            {circles}
            </GoogleMap>
        </div>

    );



}))
export default WrappedMap;