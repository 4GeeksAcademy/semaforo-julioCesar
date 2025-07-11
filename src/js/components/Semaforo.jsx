export const Semaforo = ({ color }) => {
  return (
    <div className="semaforo">
      <div className={`luz rojo ${color === "red" ? "encendida" : ""}`}></div>
      <div className={`luz amarillo ${color === "yellow" ? "encendida" : ""}`}></div>
      <div className={`luz verde ${color === "green" ? "encendida" : ""}`}></div>
    </div>
  );
};