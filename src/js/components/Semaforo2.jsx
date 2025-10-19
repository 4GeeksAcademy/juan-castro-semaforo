import React, { useState } from "react";
import "../../styles/index.css";

const Semaforo2 = () => {
    const [color, setColor] = useState("verde");

    const cambiarColor = () => {
        if (color === "rojo") setColor("verde");
        else if (color === "verde") setColor("amarillo");
        else setColor("rojo");
    };

    return (
        <div className="semaforo-wrapper-centro">

            <div className="semaforo-container">
                <div
                    className={`semaforo-luz${color === "rojo" ? " rojo" : ""}`}
                    onClick={() => setColor("rojo")}
                ></div>
                <div
                    className={`semaforo-luz${color === "amarillo" ? " amarillo" : ""}`}
                    onClick={() => setColor("amarillo")}
                ></div>
                <div
                    className={`semaforo-luz${color === "verde" ? " verde" : ""}`}
                    onClick={() => setColor("verde")}
                ></div>
                
            </div>
             <button onClick={cambiarColor}> Haz clic para cambiar el color </button>
        </div>

    );
};

export default Semaforo2;