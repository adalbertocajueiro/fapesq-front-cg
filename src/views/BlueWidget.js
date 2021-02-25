import './BlueWidget.css'
import React from 'react'
import {Link} from 'react-router-dom'
import CG from '../img/cgmap.png'

const blueWidget = props =>{
    return(
        <div className='widget'>
            <p> Gráfico de casos em Campina Grande
                <img className= 'cg' src= {CG} ></img>
            </p>
                <Link to='/mapacg'>  
                <p>Visualizar</p>
                </Link>
            
        </div>
    )
}

export default blueWidget;