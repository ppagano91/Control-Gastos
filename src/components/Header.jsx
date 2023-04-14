import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    gastos,
    presupuesto,setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto
  }) => {
  return (
    <header>
        <h1>Planificado de Gastos</h1>
        {console.log(isValidPresupuesto)}
        {isValidPresupuesto ? 
        (<ControlPresupuesto
            presupuesto={presupuesto}
            gastos={gastos}
            />)
        :(
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
        )
        }
        
    </header>
  )
}

export default Header