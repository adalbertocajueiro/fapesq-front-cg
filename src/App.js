import React ,{useEffect}from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Principal from './Principal'
import MainPanel from './MainPanel'
import context from './utils/Context'
import {BACK_END_URL} from './utils/Utils'
import axios from 'axios'

function App() {
  const { Provider } = context;
  const [state, setState] = React.useState({
    dataInfo:undefined,
    historicoPB:undefined
  });
  const [reloadDataInfo,setReloadDataInfo] = React.useState(true);

  useEffect(() => {
    console.log('Reload dada info', reloadDataInfo)
    const fetchData = async () => {
      
        
        const dataInfoBuscado = await axios.get(BACK_END_URL+'/registros');
        setState({ ...state,  dataInfo:dataInfoBuscado.data});

        const historicoPBBuscado = await axios.get(BACK_END_URL+'/pbdatafiltered');
        setState({ ...state,  historicoPB:historicoPBBuscado.data});
      
        

    }
  if(reloadDataInfo){
    fetchData();
    setReloadDataInfo(false)
  }

  },[reloadDataInfo]);
  

  return (
    <Provider
      value={{
        state,
        setReloadDataInfo
      }}
    >
      <BrowserRouter>
        <MainPanel />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
