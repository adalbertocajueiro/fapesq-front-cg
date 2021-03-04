import React, { useEffect, useState }  from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Principal from './Principal'
import MainPanel from './MainPanel'
import context from './utils/Context'
import {BACK_END_URL} from './utils/Utils'
import axios from 'axios'

export default function App() {
  
  const { Provider } = context;

  const [dataInfo, setDataInfo] = useState([])
  const [historicoPB, setHistoricoPB] = useState([])

  useEffect(() => {
    const fetchData = async () => {
   
        const dataInfoBuscado = await axios.get(BACK_END_URL+'/registros');
        setDataInfo({ dataInfo:dataInfoBuscado.data });

        const historicoPBBuscado = await axios.get(BACK_END_URL+'/pbdatafiltered');
        setHistoricoPB({ historicoPB:historicoPBBuscado.data });
    }
    fetchData();

  },[]);
  

  return (
    <Provider
      value={{
        dataInfo,
        historicoPB
      }}
    >
      <BrowserRouter>
        <MainPanel />
      </BrowserRouter>
    </Provider>
  );
  
}
