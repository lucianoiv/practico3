import React from 'react'
import ReactState, {useState} from 'react'


export const EnterName = () => {
  


  const [nombre, setNombre] = useState('');

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  }

  return (
    <>
        <p className="title">Enter your name</p>
        <input type="text" className="nombre" id="nombre" maxLength="10" onChange={e => cambiarNombre(e.target.value)} placeholder="Enter name"></input>
    </>
  )
}
