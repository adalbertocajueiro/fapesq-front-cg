import React, { useEffect, useState } from 'react'
import MapContainer from './MapContainer'
import Axios from 'axios';
import './Coords.css';
import { BACK_END_URL } from '../utils/Utils';

const cep = '58400283'
const raio = '1'
const url = BACK_END_URL + '/area/' + cep + '/' + raio

export default function Coords(props) {

    const [coords, setCoords] = useState([])
    const [render, setRender] = useState(false)

    useEffect(() => {
        const temp = async () => {
            const response = await Axios.get(url)
            setCoords(response.data)
            setRender(true)
        }
        
        if (render !== true) {
            temp()
        }
    }, [coords]);


    return (
        <React.StrictMode>
            { console.log(coords) }
        <div className='map'>
            {render === true && <MapContainer center={{ lat: -7.2025664, lng: -35.8998616 }} zoom={14} positions={coords} />}
        </div>
        </React.StrictMode>
        
    )
}