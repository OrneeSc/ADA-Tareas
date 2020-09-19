import React from 'react'; // va siempre acá
import './Footer.css';

const Footer = () => {

    let textoFooter = "Empoderamos mujeres a través de la tecnología.";
    
    return (
        <footer>    
            <p className='pie'>{textoFooter}</p>    
        </footer>       
    )
}
export default Footer; 