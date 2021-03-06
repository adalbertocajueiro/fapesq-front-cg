import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Table,Button,Pagination,OverlayTrigger,Tooltip} from 'react-bootstrap'
import { MdVisibility } from "react-icons/md";
import {extrairEstados,extrairTiposTeste,formatData,extrairMunicipios,extrairBairros,removerEspacosBrancos} from '../utils/Utils'
import ModalViewRegistro from './ModalViewRegistro'
import context from '../utils/Context'

function Registros(){
	const { state } = React.useContext(context);
	const [registros,setRegistros] = React.useState(state.dataInfo);
	const [registrosFiltrados, setRegistrosFiltrados] = React.useState([]);
	const [estados,setEstados] = React.useState([]);
	const [municipiosFiltrados,setMunicipiosFiltrados] = React.useState([]);
	const [bairrosFiltrados,setBairrosFiltrados] = React.useState([]);
	const [tiposTeste,setTiposTeste] = React.useState([]);
	const [estadoSelected,setEstadoSelected] = React.useState(undefined);
	const [municipioSelected,setMunicipioSelected] = React.useState(undefined);

	const [show, setShow] = React.useState(false);
	const [registroSelecionado, setRegistroSelecionado] = React.useState(undefined);
	const [numeroRegistrosExibidos,setNumeroRegistrosExibidos] = React.useState(20);
	const [activePage,setActivePage] = React.useState(1);
	const [firstPage,setFirstPage] = React.useState(1); //primeira pagina mostrada
	const [lastPage,setLastPage] = React.useState(10); //ultima pagina mostrada
	const [maxPage,setMaxPage] = React.useState(10);
	//const [paginationItems,setPaginationItems] = React.useState([]);
	const [firstRecord,setFirstRecord] = React.useState(1);
	const [lastRecord,setLastRecord] = React.useState(19);
	const [registrosExibidos,setRegistrosExibidos] = React.useState([]);


  	const handleClose = () => {
  		setShow(false)
  		setRegistroSelecionado(undefined)
  	}
  	//const handleShow = () => setShow(true);


	//const [resultados,setResultados] = React.useState([]);
	function openModalRegistro(r){
		setRegistroSelecionado(r)
		setShow(true)
	}

	function previousPage(){

		if(activePage === firstPage){
			setFirstPage(firstPage - 1)
			setLastPage(lastPage - 1)
		}
		mudarPaginaAtiva(activePage - 1)
	}
	function nextPage(){

		if(activePage === lastPage){
			setFirstPage(firstPage + 1)
			setLastPage(lastPage + 1)
		}
		mudarPaginaAtiva(activePage + 1)
	}
	function activateFirstPage(){
		setFirstPage(1)
		setLastPage(10)
		mudarPaginaAtiva(1)
	}
	function activateLastPage(){
		setLastPage(maxPage)
		setFirstPage(maxPage > 10?maxPage - 9:1)		
		mudarPaginaAtiva(maxPage)
	}
	function buildPaginationItems(){
		var numeroRegistros = registrosFiltrados.length
		var items = []
		var paginasAMostrar = Math.ceil(numeroRegistros/numeroRegistrosExibidos);
		//setMaxPage(paginasAMostrar)
		//console.log('pagina maxima',maxPage)

		items.push(<Pagination.First key='first' disabled={activePage === 1} onClick={() => activateFirstPage()}/>)
		items.push(<Pagination.Prev key='prev-first' disabled={activePage === 1} onClick={() => previousPage()}/>)
		for (let number = firstPage; number <= Math.min(lastPage,paginasAMostrar); number++) {
  			items.push(
    			<Pagination.Item key={number} active={number === activePage} onClick={() => mudarPaginaAtiva(number)}>{number} </Pagination.Item>
    		);
		}

		items.push(<Pagination.Next key='next-last' disabled={activePage === maxPage} onClick={() => nextPage()}/>)
		items.push(<Pagination.Last key='last' disabled={activePage === maxPage} onClick={() => activateLastPage()}/>)

		return items
	}

	function mudarPaginaAtiva(number){
		setActivePage(number)
		//console.log('Pagina escolhida',number)
		//console.log('Ultima pagina',lastPage)
		var primeiroRegistro = (number-1)*numeroRegistrosExibidos
		setFirstRecord(primeiroRegistro)
		//console.log('Primeiro registro',primeiroRegistro)
		var ultimoRegistro = number*numeroRegistrosExibidos - 1
		setLastRecord(number*numeroRegistrosExibidos - 1)
		//console.log('Umtimo registro',ultimoRegistro)
		setRegistrosExibidos(registrosFiltrados.slice(primeiroRegistro,Math.min(ultimoRegistro +1,registrosFiltrados.length)))
	}

    useEffect(() => {
        if(state.dataInfo){
        	setRegistros(state.dataInfo)
        	setRegistrosExibidos(state.dataInfo.records.slice(0,20))
            //console.log('Registro exibidos',registrosExibidos)
            setRegistrosFiltrados(state.dataInfo.records)
            setEstados(extrairEstados(state.dataInfo.records))
            setTiposTeste(extrairTiposTeste(state.dataInfo.records))
            //setResultados(extrairResultados(registrosBuscados.data.records))
            //console.log('Registros',registrosBuscados.data)
            //console.log('Resultados',resultados)
			var paginasAMostrar = Math.ceil(state.dataInfo.records.length/numeroRegistrosExibidos);
			setMaxPage(paginasAMostrar)
        }
      },[state.dataInfo] );

    function aplicarFiltros(){
    	var estado = document.getElementById('estado').value;
    	var filtro = registros.records
    	//console.log('Por estados',filtro)
    	if(estadoSelected){
    		filtro = filtrarPorEstado(estado);
    		//console.log('Por estado', filtro.length)
    		if(municipioSelected){
    			filtro = filtrarPorMunicipio(filtro,municipioSelected);
    			//console.log('Por municipio',filtro.length)
    			var bairro = document.getElementById('bairro').value;
    			//console.log('Bairro',bairro)
    			if(bairro !== '' && bairro !== 'Bairro'){
    				filtro = filtrarPorBairro(filtro,bairro)
    				//console.log('Por bairro',filtro.length)
    			}
    		}
    	}
    	var tipoTeste = document.getElementById('tipoTeste').value;
    	filtro = filtrarPorTipoTeste(filtro,tipoTeste)
    	var resultado = document.getElementById('resultado').value;
    	filtro = filtrarPorResultado(filtro,resultado)
    	setRegistrosFiltrados(filtro)
    	setFirstPage(1)
    	var paginasAMostrar = Math.ceil(filtro.length/numeroRegistrosExibidos);
		setMaxPage(paginasAMostrar)
    	setRegistrosExibidos(filtro.slice(0,Math.min(19 +1,filtro.length)))
    	setLastPage(paginasAMostrar > 10?10:paginasAMostrar)
	}
	function filtrarPorEstado(estado){
		return registros.records.filter( r =>
	    		estado === "" || estado=== 'Estado'? true: r.estadoResidencia === estado
	    	);
	}
	function filtrarPorMunicipio(regs,municipio){
		return regs.filter( r =>
	    		r.municipio === municipio
	    	);
	}
	function filtrarPorBairro(regs,bairro){
		return regs.filter( r =>
	    		r.bairro === bairro
	    	);
	}
	function filtrarPorTipoTeste(regs,tipoTeste){
		return regs.filter( r =>
	    		tipoTeste === "" || tipoTeste=== 'TipoTeste'? true: r.tipoTeste === tipoTeste
	    	);
	}
	function filtrarPorResultado(regs,resultado){
		return regs.filter( r =>
	    		resultado === "" || resultado=== 'Resultado'? true: (resultado === 'Positivo'?(r.resultadoTeste === true):(r.resultadoTeste === false))
	    	);
	}
	function selectEstado(){
		var estado = document.getElementById('estado').value;
		var municipios = [];
		if (estado !== "" && estado !== 'Estado'){
			setEstadoSelected(estado);
			var filtro = filtrarPorEstado(estado);
			municipios = extrairMunicipios(filtro);
		}else{
			setEstadoSelected(undefined)
		}
		setMunicipiosFiltrados(municipios)
	}
	function selectMunicipio(){
		var estado = document.getElementById('estado').value;
		var bairros = [];
		if (estado !== "" && estado !== 'Estado'){
			setEstadoSelected(estado);
			var filtro = filtrarPorEstado(estado);
			var municipio = document.getElementById('municipio').value;
			
			if (municipio !== "" && municipio !== 'Municipio'){
				setMunicipioSelected(municipio)
				filtro = filtrarPorMunicipio(filtro,municipio);
				bairros = extrairBairros(filtro);
				//console.log('Bairros',bairros)
			}else{
				setMunicipioSelected(undefined)
			}
		}else{
			setEstadoSelected(undefined)
		}
		setBairrosFiltrados(bairros)
	}

	function mudarNumeroRegistrosExibir(){
		var opcao = document.getElementById('exibir').value;
		console.log('Tipo de opcao',typeof opcao)
		console.log('Opcao',opcao)
		opcao = parseInt(opcao)
		console.log('Opcao int',opcao)
		if (opcao !== 0){
			if(numeroRegistrosExibidos !== opcao){
				setNumeroRegistrosExibidos(opcao)
			}
		}
	}
	return(
		<div className='animated fadeIn mt-0 pt-0'>
			<ModalViewRegistro show={show} handleClose={handleClose} registro={registroSelecionado}/>
  			<div align='justify'>
	  			<div className='f-s-15'>
	  				<div className='font-weight-bold text-uppercase py-2'>
	  					Busca avançada e filtros sobre registros
	  				</div>
	  			</div>
	  			<div className='row'>
	  				<div className='col-2 mr-0'>
	  					<OverlayTrigger 
      						placement='bottom'
							overlay=
							<Tooltip id='tooltip-select-estado'>
								Selecione um estado para habilitar municípios
							</Tooltip>
						>
							<Form.Control id='estado' as='select' className='f-s-13' onChange={()=>selectEstado()}>
								<option hidden value='Estado'>Estado</option>
								<option value=''>Todos</option>
									{estados.map( e => 
										<option key={e} value={e}>{e}</option>
									)}
							</Form.Control>
						</OverlayTrigger>

	  					
	  				</div>
	  				<div className='col-2 mr-0'>
	  					<OverlayTrigger 
      						placement='bottom'
							overlay=
							<Tooltip id='tooltip-select-municipio'>
								Selecione um município para habilitar bairros
							</Tooltip>
						>
							<Form.Control id='municipio' as='select' className='f-s-13' disabled={estadoSelected === undefined} onChange={()=>selectMunicipio()}>
						    	<option hidden value='Municipio'>Município</option>
						    	<option value=''>Todos</option>
						    	{municipiosFiltrados.map( m => 
						    		<option key={m} value={m}>{m}</option>
						    		)}
							</Form.Control>
						</OverlayTrigger>
	  				</div>
	  				<div className='col-2 mr-0'>
	  					<OverlayTrigger 
      						placement='bottom'
							overlay=
							<Tooltip id='tooltip-select-bairro'>
								Selecione um bairro
							</Tooltip>
						>
							<Form.Control id='bairro' as='select' className='f-s-13' disabled={municipioSelected === undefined}>
						    	<option hidden value='Bairro'>Bairro</option>
						    	<option value=''>Todos</option>
						    	{bairrosFiltrados.map( b => 
						    		<option key={b} value={b}>{b}</option>
						    		)}
							</Form.Control>
						</OverlayTrigger>
	  				</div>
	  				<div className='col-2 ml-0 pl-0'>
	  					<Form.Control id='tipoTeste' as='select' className='f-s-13'>
					    	<option hidden value='TipoTeste'>Tipo de Teste</option>
					    	<option value=''>Todos</option>
					    	{tiposTeste.map( e => 
					    		<option key={e} value={e}>{e}</option>
					    		)}
						</Form.Control>
	  				</div>
	  				<div className='col-2 pl-0'>
	  					<Form.Control id='resultado' as='select' className='px-0 f-s-13'>
					    	<option hidden value='Resultado'>Resultado</option>
					    	<option value=''>Todos</option>
					    	<option value='Positivo'>Positivo</option>
					    	<option value='Negativo'>Negativo</option>
						</Form.Control>
	  				</div>
	  				{/* <div className='col-1 ml-0 pl-0'>
	  					<Form.Control id='exibir' as='select' className='px-0 f-s-13' onChange={() => mudarNumeroRegistrosExibir()}>
					    	<option hidden value={0}>Exibir</option>
					    	<option value={20}>20</option>
					    	<option value={30}>30</option>
					    	<option value={40}>40</option>
					    	<option value={50}>50</option>
						</Form.Control>
	  				</div> */}
	  				<div className='col'>
	  				</div>
	  				<div className='col-1 px-0'>
	  					<Button className='mx-auto' size='sm' variant='outline-info' onClick={() => aplicarFiltros()}>
	  					Filtrar</Button>
	  				</div>
	  			</div>
	  			<div className='py-2 f-s-14 font-weight-bold'>
  					Registros encontrados: {registrosFiltrados.length} (exibindo {numeroRegistrosExibidos} por página)
  				</div>
  				<div>
  					<Pagination size='sm'>
					  {buildPaginationItems()}
					</Pagination>
  				</div>
  				<div className='scroll-y h-600 mt-2'>
  					<Table hover striped bordered responsive>
  						<thead>
						    <tr className='f-s-13 text-center align-middle'>
						      <th className='py-1 col-width-20 align-middle'>Ver</th>
						      <th className='py-1 align-middle'>Data Notificação</th>
						      <th className='py-1 align-middle'>Tipo de teste</th>
						      <th className='py-1 align-middle'>Estado</th>
						      <th className='py-1 align-middle'>Município</th>
						      <th className='py-1 align-middle'>Bairro</th>
						      <th className='py-1 align-middle'>Resultado</th>
						      {/* <th className='py-1 align-middle'>CEP</th> */}
						    </tr>
						</thead>
						<tbody>
							{ registrosExibidos.map( r =>
									<tr key={r.id}>
										<td className='py-0 f-s-12 text-center'><Link onClick={()=> openModalRegistro(r)}><MdVisibility /></Link></td>
										<td className='py-0 f-s-12 text-center'>{formatData(r.dataNotificacao)}</td>
										<td className='py-0 f-s-12'>{removerEspacosBrancos(r.tipoTeste)}</td>
										<td className='py-0 f-s-12'>{r.estadoResidencia}</td>
										<td className='py-0 f-s-12'>{r.municipio}</td>
										<td className='py-0 f-s-12'>{r.bairro}</td>
										<td className='py-0 f-s-12'>{r.resultadoTeste?'Positivo':'Negativo'}</td>
										{/* <td className='py-0 f-s-12'>{r.cep}</td> */}
									</tr>
								)}

							
						</tbody>
  					</Table>
  				</div>

  			</div>
  		</div>
	);
}

export default Registros;