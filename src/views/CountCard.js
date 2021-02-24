import React from 'react'
import './CountCard.css'
import Axios from 'axios';


const url = "localhost:3002/confirmados"
class BlueCard extends React.Component{
    state ={
        casos: 0
    }

    componentDidMount(){
        Axios.get(url).then(
            res => {
                const confirmados = res.data
                this.setState({casos: confirmados})
            }
        )
    }

    render(){
        return(
            <div className='cartao'>
                <div classname='titulo'>
                    <h5 class='text-white'>Casos Confirmados</h5>
                </div>
                <div className='corpo'>
                    <h2 class='text-white'>{this.state.casos}</h2>
                </div>
            </div>    
        )
    }
}

export default BlueCard;