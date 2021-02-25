import React from 'react'
import axios from 'axios'
import WrappedMap from './WrappedMap'


export default class Alerta extends React.Component{
    state = {
        circles: [] 
    }

    componentDidMount(){
        axios.get("http://localhost:3001/circles")
            .then(resp => {
                const circles = resp.data;
                this.setState({circles});
            })
    }

    render(){
        return(
        <div style = { {width: '70vw' , height: '70vh'}}>     
            <WrappedMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuxEcCmAeZnCimhP-VZ7r4rco1CgXfe4k"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />} 
            circles  = {this.state.circles}>

            </WrappedMap>
      
        </div>
   
        );

    }

}


