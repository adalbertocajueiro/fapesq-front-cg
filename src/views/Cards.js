import React, {Component} from 'react'
import Card from './Card'
import Edmar from '../img/Edmar.jpg'
import Catherine from '../img/catherine.jpg'
import Edson from '../img/Edson.jpg'
import Arthur from '../img/Arthur.jpg'
import Thyago from '../img/Thyago.jpg'


class Cards extends Component{
    render(){
        return(
            /* Imagens devem ter o mesmo tamanho em pixels se vao ficar lado a lado. */ 
            <div className  = "membros">
            <div className = "container-fluid d-flex justify-content-around">

                <div className = "edmar"> <Card imgsrc = {Edmar} title ="Edmar Candeia Gurjão"
                    uni = "Universidade Federal de Campina Grande" 
                    phone = "(83) 2101 - 1403"
                    email = "ecg@dee.ufcg.edu.br"
                    page = "https://ecandeia.dee.ufcg.edu.br/"
                /> </div>

                <div className = "edson"> <Card imgsrc = {Edson} title ="Edson Porto da Silva" 
                    uni  = "Universidade Federal de Campina Grande"
                    phone = "Ph.D., Adjunct Professor"
                    email = "edson.silva@dee.ufcg.edu.br"
                    page = "#"
                /></div>
            </div>
                <br/>
            <div className = "container-fluid d-flex justify-content-around">

                <div className = "catherine"> <Card imgsrc = {Catherine} title ="Catherine Sonaly F. Martins"
                    uni = "Hospital Universitário Alcides Carneiro - UFCG"
                    phone =  "(83) 3322 - 4363"
                    email =""
                    page  = "#"
                 /> </div>


                <div className = 'Arthur'> <Card imgsrc = {Arthur} title = "Arthur Almeida Alves"
                    uni  = "Universidade Federal de Campina Grande"
                    phone  = "Estudante de Ciências da Computação"
                    email = "arthur.alves@ccc.ufcg.edu.br"
                    page = "#"

                /> </div>

            </div>
                
            <div className = "container-fluid d-flex justify-content-around">
                <div className = "Thyago"> <Card imgsrc = {Thyago}
                uni  = "Universidade Federal de Campina Grande"
                phone = "Estudante de Ciências da Computação"
                email = "thyago.pereira.silva@ccc.ufcg.edu.br"
                page  =  "#"
            /></div>

            </div>

        </div>
        );
    }
}

export default Cards ;