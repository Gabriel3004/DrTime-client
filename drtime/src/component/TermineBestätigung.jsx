import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import juste from "../assets/images/juste.png";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";
import { DateTime } from "luxon";

export default function TermineBestätigung({ user }) {
  const [lastAppointment, setLastAppointment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllTermins = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_DR_TIME}/auth/${user._id}`
        );

        setLastAppointment(response.data[response.data.length - 1]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (user && user._id) {
      getAllTermins();
    }
  }, [user]);

  return (
    <>
      {user && user._id && (
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div className="flex flex-col justify-center items-center mt-20">
              <div className="w-80 h-80 bg-gradient-to-b from-blue-800 to-blue-800 relative flex items-center justify-center rounded-full overflow-hidden duration-5000">
                <h2 className="z-10 text-white text-9xl animate-pulse font-extrabold">
                  {" "}
                  <BsCheck />{" "}
                </h2>
                <div className="absolute inset-5 bg-blue-800 rounded-md"></div>
                <div className="absolute w-[90%] h-[90%] bg-gradient-to-b from-blue-300 via-blue-700 to-blue-300 animate-pulse duration-5000 rounded-full"></div>
              </div>

              <div className="mt-10">
                <p className="text-2xl text-purple-700 font-bold font-sans">
                  Sie haben Ihren Termin vereinbart:
                </p>
              </div>
              <div
                id="terminDatum"
                className="text-4xl text-purple-700 font-bold flex flex-col justify-center items-center mt-10 animate-pulse duration-5000"
              >
                <span className="flex justify-center">
                  Datum:{" "}
                  {DateTime.fromFormat(
                    lastAppointment.appointmentdate,
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
                  ).toLocaleString({
                    locale: "de-DE",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
                <span className="flex justify-center">
                  Zeit:{" "}
                  {DateTime.fromFormat(
                    lastAppointment.appointmentdate,
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
                  ).toLocaleString({
                    locale: "de-DE",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                    timeZone: "Europe/Berlin",
                  })}
                </span>
              </div>
              <Link to="/home">
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white mx-auto cursor-pointer mt-20">
                  Weiter
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}
