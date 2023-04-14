import React from 'react'
import {useState, useEffect } from 'react'


const ControlPresupuesto = ({gastos, presupuesto}) => {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
      const valorInicial = 0;
      const totalGastado = gastos.reduce((total, gasto)=>gasto.cantidad+total, valorInicial
      );
      const totalDisponible = presupuesto-totalGastado;
      setDisponible(totalDisponible);
      setGastado(totalGastado);
    }, [gastos])
    

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
                {handleCurrency(disponible)}
            </p>

            <p>
                <span>
                    Gastado: 
                </span>
                {handleCurrency(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto