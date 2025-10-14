import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./Semaforo.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <h1>Bienvenido</h1>
			<br />
			<Semaforo/>
			

		</div>
	);
};

export default Home;