import React from 'react'

import {Route,Switch,Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Base from './views/Base'
import Sobre from './views/Sobre'
import MapaCG from './views/MapaCG'
import MapaPB from './views/MapaPB'
<<<<<<< Updated upstream
import Alerta from './views/Alerta'
=======
import Registros from './views/Registros'

>>>>>>> Stashed changes

function Principal() {
  return (
  		<div id='principal' className='animated fadeIn'>
			<div className='row h-100 pt-0'>
				<div className='col d-flex'>
				    <div className='col-2 flex-column'>
						<div className='pt-2'/>
						<Link to='/registros' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Registros</Button></Link>
						<Link to='/base' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Base de Dados</Button></Link>
						<Link to='/mapapb' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Mapa PB</Button></Link>
						<Link to='/mapacg' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Mapa CG</Button></Link>
						<Link to='/sobre' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Sobre</Button></Link>
						<Link to='/alerta' className='text-decoration-none'><Button className='my-1' size="xl" block variant='light'>Sobre</Button></Link>

					</div>
					<div className='pt-2 mr-4 px-2 w-100'>
					    <Switch>
				          	<Route path='/registros' component={Registros}/>
				          	<Route path='/base' component={Base}/>
				          	<Route path='/mapapb' component={MapaPB}/>
				          	<Route path='/mapacg' component={MapaCG}/>
				          	<Route path='/sobre' component={Sobre}/>
										<Route path='/alerta' component={Alerta}/>
				        </Switch>
			        </div>
				</div>
			</div>
  		</div>
  );
}

export default Principal;