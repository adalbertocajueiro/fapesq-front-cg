import React from 'react'
import Virus from '../img/virus.png'
import Logo from '../img/logo.jpg'
import './Mainpage.css'
import BlueCard from './CountCard'
import RecoverCard from './RecoverCard'
import GreenWidget from './GreenWidget'
import BlueWidget from'./BlueWidget'
import Coords from './Coords'


function Mainpage(){
    return(
        <div className= 'main'>
            <div className='logo'>
                <div id='img0'>
                    <img src = {Logo} class='mw-100 rounded-float-left' alt='logotype'></img>     
                </div>
                <div id='img1'>
                    <img src = {Virus} class='mw-100 rounded-float-right' alt='covid'></img>
                </div>
            </div>
                Acompanhamento de Casos de Covid-19 no estado da Paraíba
                <h2>Painel Geral:
                    <p>
                        Covid 19 - Campina Grande 
                    </p>
                </h2>
                <div class="mt-2 row">
                    <section class="page-element col-xs-9 col-sm-9 col-md-9 col-lg-7">
                        <RecoverCard />
                    </section>
                    <section class="page-element col-xs-3 col-sm-3 col-md-3 col-lg-5">
                        <BlueCard />
                    </section>
                </div>

            <div class='mt-2 row'>
                <GreenWidget/>
            </div>

            <div class='mt-2 row'>
                <BlueWidget/>
            </div>
            <div className='coords'>
                <Coords/>
            </div>

        </div>
        );
        
}

export default Mainpage;