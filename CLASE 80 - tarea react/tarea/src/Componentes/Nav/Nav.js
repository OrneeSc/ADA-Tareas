import React from 'react'; // va siempre acá
import './Nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <a href="https://adaitw.org/carreras/"  className='enlaces'>Carreras</a>
            <a href="https://adaitw.org/equipo/"    className='enlaces'>Equipo</a>
            <a href="https://adaitw.org/novedades/" className='enlaces'>Novedades</a>
            <a href="https://adaitw.org/contacto/"  className='enlaces'>Contacto</a>
        </nav>    
    )
}
export default Nav; 