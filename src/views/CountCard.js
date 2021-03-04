import React, { useEffect, useState } from 'react'
import './CountCard.css'
import Axios from 'axios';
import { BACK_END_URL } from '../utils/Utils';


const url = BACK_END_URL + '/registrosconfirmados'

export default function BlueCard(props) {
    
    const [confirmed, setConfirmed] = useState(0)

    useEffect(() => {
        const temp = async () => {
            const response = await Axios.get(url)
            setConfirmed(response.data)
        }
        temp()
    })

    return (
        <div className='cartao'>
            <div className='titulo'>
                <h5 className='text-white'>Casos confirmados</h5>
            </div>
            <div className='corpo'>
                <h2 className='text-white'>{ confirmed }</h2>
            </div>
        </div>
    )
}