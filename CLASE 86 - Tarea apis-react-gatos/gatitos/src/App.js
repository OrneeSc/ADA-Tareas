import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Section from './Componentes/Section/Section';
import Header from './Componentes/Header/Header';

function App() {
  
  const [gatos, setGatos] = useState([]);

  const getGatos = async () =>{
    try{
      const res = await axios.get('https://api.thecatapi.com/v1/images/search');
      setGatos(res.data)
    }catch(err){
      console.log(err)
    }
  }
    useEffect(()=>{
      getGatos();
    },[]);

    return(

      <React.Fragment>

        <Header />
          <div className="main-container">
              {/* <button className="buton" onClick={ getGatos }>clic aqui</button> */}
          {
                gatos.map(gato=>{
                return(
                  <Section url={gato.url}/>
                  )
                })
            }

            <button className="buton" onClick={ getGatos }>CLIC</button>
          </div>

      </React.Fragment>
    )
}

export default App;
