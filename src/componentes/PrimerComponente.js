import React, {useState} from 'react'

export const PrimerComponente = () => {
  //let nombre = "Luciano Arrieta"
  let web = "luciano.com.ar"

const [nombre, setNombre] = useState("luciano");
//el useState tiene dos estados, el [estado actual, funcion que lo modifica] 

  let cursos = [
    "C#",
    "Javascript",
    "React"
  ];

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  }
  
//la palabra CLASS esta reservada por lo que en las etiquetas se escribe className

  return (
    <div>
        <h1>SOY EL PRIMER COMPONENTE</h1>
        <p>Soy el primer párrafo, perro</p>
    
        <p>Mi Nombre es: <strong className={nombre.length >4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p>

        <input type="text" onChange={e =>cambiarNombre(e.target.value)}></input>
        <button onClick={e => {
          console.log("Valor del estado es:", nombre); //imprimer por consola el valor de la variable nombre
        }}>Mostrar valor del estado</button>


        <button onClick={e => cambiarNombre("Luciano Nahuel")}>Cambiar Nombre</button>
        


        <h2>Mis cursos</h2>
        <ul>
          {
            cursos.map((mostrar, indice) => {
              return(
                <li key={indice}>
                  {mostrar}
                </li>);
            })
          }
          <li></li>
        </ul>
    </div>
  )
}
