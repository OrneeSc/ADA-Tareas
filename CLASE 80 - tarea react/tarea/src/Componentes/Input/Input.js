import React, { useState } from 'react'; 
import './Input.css';

const Input = () => {

    const [inputValue, setInputValue] = useState('');
    
    return (
        <React.Fragment>
            <input type="text" className='input' onChange={e => setInputValue(e.target.value)}/>
            <div>
                { inputValue }
            </div>
        </React.Fragment>
          
    )
}
export default Input; 