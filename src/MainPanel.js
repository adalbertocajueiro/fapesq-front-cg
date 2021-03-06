import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import {Button,Card,OverlayTrigger,Tooltip,Popover,Image} from 'react-bootstrap'
import TabFiltros from './views/TabFiltros'
import Base from './views/Base'
import Sobre from './views/Sobre'
import Tutorial from './views/Tutorial'
import MapaCG from './views/MapaCG'
import MapaPB from './views/MapaPB'
<<<<<<< Updated upstream
import Alerta from './views/Alerta'
import { BsListUl,BsCloudUpload,BsQuestionCircle,BsBook,BsAlarmFill } from "react-icons/bs"
=======
import Mainpage from './views/Mainpage'
import { BsListUl,BsCloudUpload,BsQuestionCircle,BsBook } from "react-icons/bs"
>>>>>>> Stashed changes
import { GrMapLocation,GrMap } from "react-icons/gr";
import Logo from "./img/logo.jpg"
import './MainPanel.css'
import { None } from 'vega'
import Principal from './Principal'

function MainPanel() {
  return (
  		<div id='principal' className='animated fadeIn'>
<<<<<<< Updated upstream
			<div className='row w-100 h-120px'>
				<div className='col-1 d-flex pr-0 h-120px'>
					<Card className='w-100 gray-100 px-0 mx-0'>
						<Card.Body className='pl-2 mx-0 pt-2'>
						    <div className='row'>
						      	<div className='col-4 px-0 mx-auto'>
						      		<Link to='/registros' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='bottom'
										    overlay=
										      <Tooltip id='tooltip-records'>
										          Registros e filtros
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto' size="md" block variant='light'><BsListUl className='bt-menu'/></Button>
						      			</OverlayTrigger>
						      		</Link>
						      	</div>
						      	<div className='col-4 px-0 mx-auto'>
						      		<Link to='/base' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='bottom'
										    overlay=
										      <Tooltip id='tooltip-database'>
										          Atualizar base de dados
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto mx-auto' size="md" block variant='light'><BsCloudUpload className='bt-menu'/></Button>
						      			</OverlayTrigger>
						      			
						      		</Link>
						      	</div>
						      	<div className='col-4 px-0'>
						      		<Link to='/mapapb' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='right'
										    overlay=
										      <Tooltip id='tooltip-mapapb'>
										          Mapa da Paraíba
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto mx-auto' size="md" block variant='light'><GrMapLocation className='bt-menu' /></Button>
						      			</OverlayTrigger>

						      		</Link>
						      	</div>
						    </div>
						    <div className='row'>
						      	<div className='col-4 px-0 mx-auto'>
						      		<Link to='/mapacg' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='bottom'
										    overlay=
										      <Tooltip id='tooltip-mapacg'>
										          Mapa de Campina Grande
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto' size="md" block variant='light'><GrMap className='bt-menu' /></Button>
						      			</OverlayTrigger>
						      		</Link>
						      	</div>
						      	<div className='col-4 px-0 mx-auto'>
						      		<Link to='/help' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='bottom'
										    overlay=
										      <Tooltip id='tooltip-help'>
										          Tutorial
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto mx-auto' size="md" block variant='light'><BsBook className='bt-menu' /></Button>
						      			</OverlayTrigger>
						      			
						      		</Link>
						      	</div>
						      	<div className='col-4 px-0'>
						      		<Link to='/sobre' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='right'
										    overlay=
										      <Tooltip id='tooltip-sobre'>
										          Equipe e contatos
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto mx-auto' size="md" block variant='light'><BsQuestionCircle className='bt-menu' /></Button>
						      			</OverlayTrigger>

						      		</Link>
						      	</div>
										<div className='col-4 px-0'>
						      		<Link to='/alerta' className='text-decoration-none'>
						      			<OverlayTrigger 
      										placement='right'
										    overlay=
										      <Tooltip id='tooltip-alertas'>
										          Alertas no Google Mapas
										      </Tooltip>
										>
						      				<Button className='pl-2 my-auto mx-auto' size="md" block variant='light'><BsAlarmFill className='bt-menu' /></Button>
						      			</OverlayTrigger>

						      		</Link>
						      	</div>
						    </div>
						  </Card.Body>
					</Card>
				</div>
				<div className='col pl-0 pr-0 h-120px'>			
						<Image src={Logo} fluid className='h-120px contains rounded'/>
				</div>
			</div>
			<div className='row mt-2 mr-4 pl-4 w-100'>
=======
				<nav class='navbar' id="navbar">
					<h4 class='text-dark' id='title'>Nome do projeto</h4>
					<Link to='/' id='link'>Painel Geral</Link>
					<Link to='/registros' id='link'>Registros</Link>
					<Link to='/mapapb' id='link'> Mapa da Paraiba</Link>
					<Link to='/mapacg' id='link'> Mapa Campina Grande</Link>
					<Link to='/sobre' id='link'> Sobre</Link>
				</nav>
			
			
		<div className='row mt-2 mr-4 pl-4 w-100'>
>>>>>>> Stashed changes
				<div className='col-9'>
					    <Switch>
				          	<Route path='/' component={Mainpage} exact />
				          	<Route path='/registros' component={TabFiltros}/>
				          	<Route path='/base' component={Base}/>
				          	<Route path='/mapapb' component={MapaPB}/>
				          	<Route path='/mapacg' component={MapaCG}/>
				          	<Route path='/help' component={Tutorial}/>
				          	<Route path='/sobre' component={Sobre}/>
										<Route path= '/alerta' component = {Alerta} />
				        </Switch>
				</div>
		</div>
			
  		</div>
  );
}

export default MainPanel;