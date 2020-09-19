import React, { useState } from 'react';
import './Section.css';

const Section = () => {

    let textoFront = "Front End es la parte de una aplicación que interactúa con los usuarios, es conocida como el lado del cliente. Básicamente es todo lo que vemos en la pantalla cuando accedemos a un sitio web o aplicación: tipos de letra, colores, adaptación para distintas pantallas(RWD), los efectos del ratón, teclado, movimientos, desplazamientos, efectos visuales… y otros elementos que permiten navegar dentro de una página web. Este conjunto crea la experiencia del usuario.Como hemos dicho, el desarrollador front end se encarga de la experiencia del usuario, es decir,  en el momento en el que este entra a una página web, debe ser capaz de navegar por ella, por lo que el usuario verá una interface sencilla de usar, atractiva y funcional.Un desarrollador front end debe conocer los siguientes lenguajes de programación: HTML5, CSS3, JavaScript, Jquery, Ajax.";

    let textoBack = "Como hemos dicho antes, Front end es todo con lo que el usuario se encuentra directamente en la web o aplicación, entonces cuando hablamos de “Back end” nos referimos al interior de las aplicaciones que viven en el servidor y al que a menudo se le denomina “el lado del servidor”.El back end del sitio web consiste en un servidor, una aplicación y una base de datos. Se toman los datos, se procesa la información y se envía al usuario.  Los desarrolladores de Front end y Back end suelen trabajar juntos para que todo funcione correctamente.Un desarrollador Back end debe tener amplios conocimientos de los siguientes lenguajes: frameworks y los tipos de base de datos. No siendo necesario conocer todos los lenguajes pero sí entender y saber trabajar con algunos de ellos. ASP.NET , PHP, Python, Ruby, Node.js, Java, MySQL, SQL Server, PostgreSQL, Oracle, MongoDB";

    const [displayFront, setDisplayFront] = useState(true);
    const [inputText, setInputText]       = useState("");

    if(displayFront) {
        return (
            <div className= 'contenido'>

            <p className='titulo-parrafo'>FRONTEND:</p>
            <p className='texto-parrafo'>{textoFront}</p>
            
            <button type="button" className='button' onClick={() => setDisplayFront(false)}>Ir a Backend</button>

            </div>
        );
    } else {
        return (
            <div className= 'contenido'>

            <p className='titulo-parrafo'>BACKEND:</p>
            <p className='texto-parrafo'>{textoBack}</p>
                
            <button type="button" className='button' onClick={() => setDisplayFront(true)}>Ir a Frontend</button>

            </div>
        );
    }
};
export default Section;