import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Semaforo } from "./Semaforo";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
  const [contador, setContador] = useState(10);

  useEffect(() => {
    const cuentaRegresiva = setInterval(() => {
      setContador((prev) => {
        if (prev <= 1) {
          
          setColor((prevColor) => {
            if (prevColor === "red") return "yellow";
            if (prevColor === "yellow") return "green";
            return "red";
          });
          return 10; 
        }
        return prev - 1;
      });
    }, 1000); 
    return () => clearInterval(cuentaRegresiva);
  }, []);

  const cambiarColor = () => {
    setColor((prevColor) => {
      if (prevColor === "red") return "yellow";
      if (prevColor === "yellow") return "green";
      return "red";
    });
  };
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <Semaforo color={color} />
      <h2 className="contador"> {contador} </h2>
      <button className="btn btn-danger mt-3" onClick={cambiarColor}>Cambiar luz 🚦</button>
    </div>
  );
};

export default Home;