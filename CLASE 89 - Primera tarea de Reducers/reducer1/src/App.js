import React, {useReducer, useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {reducer, ACTION_ADD, ACTION_EDIT} from './Componente/UserReducer/UserReducer';
import './App.css';

let userId = 1;

const App = () => { 

  const [state, dispatch] = useReducer(reducer, []);

  const [name, setName] = useState('');
  const [adress, setAdress] = useState();
  const [category, setCategory] = useState();

  const [editName, setEditName] = useState('');
  const [editAdress, setEditAdress] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editId, setEditId] = useState();


    const añadir = () => {
      const payload = {
        userId,
        name,
        adress,
        category
      }
      userId ++
      dispatch({
        type: ACTION_ADD, payload
      })
      console.log('esto es state', state)
    }

    const editar = () => {
      dispatch ({ 
        type: ACTION_EDIT, payload: { id:parseInt(editId), editName, editAdress, editCategory }
      });
    

    return (

      <React.Fragment>

        <div>
          <input type="text" placeholder="nombre" onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="adress" onChange={e => setAdress(e.target.value)} />
          <input type="text" placeholder="category" onChange={e => setCategory(e.target.value)} />
          <button type="button" onClick={añadir}>
            {/* <FontAwesomeIcon icon={faUserPlus}/> */}
          </button>
        </div>

        <div>
        <input type="text" placeholder="nombre" onChange={e => setEditName(e.target.value)} />
          <input type="text" placeholder="adress" onChange={e => setEditAdress(e.target.value)} />
          <input type="text" placeholder="category" onChange={e => setEditCategory(e.target.value)} />
          <input type="number" placeholder="id" onChange={e => setEditId(e.target.value)} />
          <button type="button" onClick={editar}>
            {/* <FontAwesomeIcon icon={faEdit} /> */}
          </button>
        </div>

      </React.Fragment>
    );

  }
}

export default App;