import { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomePage({ user }) {
  const [lastAppointment, setLastAppointment] = useState([]);

  useEffect(() => {
    const getAllTermins = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_DR_TIME}/appointments/`
        );

        setLastAppointment(response.data[response.data.length - 1]);
      } catch (error) {
        console.error(error);
      }
    };
    getAllTermins();
  }, []);

  return (
    <>
      {user && (
        <div>
          <div className="pt-4">
            <section id="my buttons für arzt termin">
              <div className="flex flex-col  ">
                <div className="flex justify-center pt-4">
                  {/* ArtzSuchen wenn kein Profil und Beschreibung wenn es ein Profil gibt */}

                  <Link to="/doctors">
                    {" "}
                    <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white">
                      Hausarzt
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center pt-4">
                  <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white">
                    Kinderarzt
                  </button>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-20 h-20 text-white flex justify-center items-center text-2xl">
                  {" "}
                  <BiPlusMedical />{" "}
                </button>
              </div>
            </section>

            <div className="flex justify-center pt-8">
              <h1 className="text-5xl"> {`Hallo ${user.firstName}`} </h1>
            </div>

            <section className="flex justify-center pt-2">
              <div className="pt-8">
                <h1 className="text-4xl flex justify-center pb-10">
                  Ihr nächster Termin
                </h1>
                <div className="bg-white flex justify-center w-80 ">
                  <h1>
                    {/* {" "}
                    Datum{} {lastAppointment}, Uhr{}{" "} */}
                    <span>
                      Datum:{" "}
                      {new Date(
                        lastAppointment.appointmentdate
                      ).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </span>{" "}
                    <span>
                      Zeit:{" "}
                      {new Date(
                        lastAppointment.appointmentdate
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </h1>
                </div>
              </div>
            </section>

            <div id="termine" className="flex justify-center pt-40 pb-5">
              <Link to="/MyTermine">
                {" "}
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white">
                  Termine
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
