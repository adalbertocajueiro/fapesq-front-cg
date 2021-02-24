import React from 'react'
import './RecoverCard.css'
import Axios from 'axios';

const url = "localhost:3002/confirmados"
class RecoverCard extends React.Component{
    state ={
        casos: 0
    }

    componentDidMount(){
        Axios.get(url).then(
            res => {
                const recuperados = res.data
                this.setState({casos: recuperados})
            }
        )
    }
    render(){
        return(
            <div className='confirmado'>
                <div classname='titulo'>
                    <h5 class='text-white'>Casos Recuperados</h5>
                </div>
                <div className='corpo1'>
                    <h2 class='text-white'> {this.state.casos}</h2>
                </div>
            </div>    
        )
    }
}

export default RecoverCard;