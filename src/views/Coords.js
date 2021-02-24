import React from 'react'
import Map from './MapContainer'
import Axios from 'axios';
import './Coords.css'

const url = 'http://localhost:3001/data'
class Coords extends React.Component{
    state ={
        data: []
    }

    componentDidMount(){
        Axios.get(url).then(
            res => {
                const dados = res.data
                this.setState({data: dados})
            }
        )
        console.log(this.state.data)
    }

    render(){
        return (
            <div className= 'map'>            
                <Map center={{ lat: -7.2025664, lng: -35.8998616 }} zoom={14} positions = {this.state.data}/>
            </div>
        )
    }
}

export default Coords;