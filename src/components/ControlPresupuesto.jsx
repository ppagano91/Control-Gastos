import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const handleCurrency = (valor) =>{
        return valor.toLocaleString('en-US',{ style: 'currency', currency: 'USD'})

    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div className=''>
            <p>Gráfica aquí</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>
                    Presupuesto: 
                </span>
                {handleCurrency(presupuesto)}
            </p>

            <p>
                <span>
                    Disponible: 
                </span>
                {handleCurrency(0)}
            </p>

            <p>
                <span>
                    Gastado: 
                </span>
                {handleCurrency(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto