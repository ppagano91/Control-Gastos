import React from "react";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ gastos, presupuesto }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const valorInicial = 0;
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      valorInicial
    );

    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (
      (100 * (presupuesto - totalDisponible)) /
      presupuesto
    ).toFixed(2);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
  }, [gastos]);

  const handleCurrency = (valor) => {
    return valor.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div className="">
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
          })}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span>
          {handleCurrency(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible:</span>
          {handleCurrency(disponible)}
        </p>

        <p>
          <span>Gastado:</span>
          {handleCurrency(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
