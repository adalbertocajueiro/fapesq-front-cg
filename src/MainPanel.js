import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import {Button,Card,OverlayTrigger,Tooltip,Popover,Image} from 'react-bootstrap'
import TabFiltros from './views/TabFiltros'
import Base from './views/Base'
import Sobre from './views/Sobre'
import Tutorial from './views/Tutorial'
import MapaCG from './views/MapaCG'
import MapaPB from './views/MapaPB'
import Mainpage from './views/Mainpage'
import { BsListUl,BsCloudUpload,BsQuestionCircle,BsBook } from "react-icons/bs"
import { GrMapLocation,GrMap } from "react-icons/gr";
import Logo from "./img/logo.jpg"
import './MainPanel.css'
import { None } from 'vega'
import Principal from './Principal'

function MainPanel() {
  return (
  		<div id='principal' className='animated fadeIn'>
				<nav className='navbar' id="navbar">
					<h4 className='text-dark' id='title'>Nome do projeto</h4>
					<Link to='/' id='link'>Painel Geral</Link>
					<Link to='/registros' id='link'>Registros</Link>
					<Link to='/mapapb' id='link'> Mapa da Paraiba</Link>
					<Link to='/mapacg' id='link'> Mapa Campina Grande</Link>
					<Link to='/sobre' id='link'> Sobre</Link>
				</nav>
			
			
		<div className='row mt-2 mr-4 pl-4 w-100'>
				<div className='col-9'>
					    <Switch>
				          	<Route path='/' component={Mainpage} exact />
				          	<Route path='/registros' component={TabFiltros}/>
				          	<Route path='/base' component={Base}/>
				          	<Route path='/mapapb' component={MapaPB}/>
				          	<Route path='/mapacg' component={MapaCG}/>
				          	<Route path='/help' component={Tutorial}/>
				          	<Route path='/sobre' component={Sobre}/>
				        </Switch>
				</div>
		</div>
			
  		</div>
  );
}

export default MainPanel;