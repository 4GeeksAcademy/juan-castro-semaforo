import React, { useState } from "react";

const Semaforo = () => {
  const [color, setColor] = useState("rojo");

  const cambiarColor = () => {
    if (color === "rojo") setColor("verde");
    else if (color === "verde") setColor("amarillo");
    else setColor("rojo");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}>
      <div style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: color === "rojo" ? "red" : "#333",
        margin: 8,
        border: "2px solid #222"
      }} />
      <div style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: color === "amarillo" ? "yellow" : "#333",
        margin: 8,
        border: "2px solid #222"
      }} />
      <div style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: color === "verde" ? "green" : "#333",
        margin: 8,
        border: "2px solid #222"
      }} />
      <button onClick={cambiarColor}> Haz clic para cambiar el color </button>
    </div>
  );
};

export default Semaforo;