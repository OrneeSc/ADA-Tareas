import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header/Header';
import Nav from './Componentes/Nav/Nav';
import Section from './Componentes/Section/Section';
import Footer from './Componentes/Footer/Footer';
import Input from './Componentes/Input/Input';

function App() {
  return (

      <div className="App">

          <Header />

      <div className = 'nav-menu'>
          <Nav />
      </div>
      
      <div className ='main-section'>
          <Section />
      </div>

          <Input />
          <Footer />

      </div>
    );
}

export default App;
