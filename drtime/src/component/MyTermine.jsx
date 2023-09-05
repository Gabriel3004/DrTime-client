import Header from "./Header";
import PropTypes from "prop-types";

export default function MyTermine() {
  // export default function MyTermine({ citasSeleccionadas }) {

  // fix for the termine
  const citasSeleccionadas = {};

  MyTermine.propTypes = {
    citasSeleccionadas: PropTypes.array.isRequired, // Define la validación para citasSeleccionadas
  };

  return (
    <>
      <Header />
      <div>
        <div
          id="Hier die termine"
          className="flex flex-col items-center justify-center mt-10"
        >
          <div className="mb-5">
            <h1 className="text-4xl text-purple-700  font-bold ">Termine</h1>
          </div>
          <div
            id="Weisse platz"
            className=" rounded-xl flex justify-center items-center"
          >
            <div className="flex flex-col items-center w-auto justify-center">
              {citasSeleccionadas.length > 0 ? (
                citasSeleccionadas.map((cita, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r  from-blue-600 via-blue-700 to-blue-600 
                    rounded-xl flex justify-center items-center flex-col text-white font-bold  m-3"
                  >
                    <span className="mb-4 text-xl">HausArzt</span>
                    <span>Date: {cita.fecha}</span>
                    <span>Time: {cita.hora}</span>
                  </div>
                ))
              ) : (
                <p className="text-4xl text-purple-700 w-60 font-bold">Du hast noch keinen Termin </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
