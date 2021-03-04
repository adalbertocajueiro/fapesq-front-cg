import React, { useEffect, useState } from 'react'
import './RecoverCard.css'
import Axios from 'axios';
import { BACK_END_URL } from '../utils/Utils';

const url = BACK_END_URL + "/registrosrecuperados"

export default function RecoverCard(props) {

    const [recovered, setRecovered] = useState(0)

    useEffect(() => {
        const temp = async () => {
            const response = await Axios.get(url)
            setRecovered(response.data)
        }
        temp()
    })


    return (
        <div className='confirmado'>
            <div className='titulo'>
                <h5 className='text-white'>Casos Recuperados</h5>
            </div>
            <div className='corpo1'>
                <h2 className='text-white'> { recovered }</h2>
            </div>
        </div>
    )
}