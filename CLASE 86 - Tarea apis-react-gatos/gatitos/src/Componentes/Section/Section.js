import React from 'react';
import './Section.css';

const Section = ({url}) => {
    return (
        <div className="content">
            <img className ="img" src={ url } alt="gato"/>
        </div>
    )
}

export default Section;