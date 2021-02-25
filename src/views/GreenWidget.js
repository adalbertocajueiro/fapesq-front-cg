import './GreenWidget.css'
import React from 'react'
import {Link} from 'react-router-dom'
import PB from '../img/pbmap.png'

const greenWidget = props => {
    return(
        <div className= 'green-widget'> 
            <p> Gráfico de casos na Paraíba
                <img className= 'pb' src= {PB} ></img>
            </p>
                <Link to='/mapapb'>  
                <p>Visualizar</p>
                </Link>
        </div>
    )
}

export default greenWidget