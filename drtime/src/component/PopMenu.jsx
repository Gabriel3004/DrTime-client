import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PopupGfg({ logOut }) {
  // const location = useLocation();
  const { id } = useParams();
  // useEffect(() => {
  //     const hmButton = document.querySelector('.hm');
  //     if (hmButton) {
  //         if (location.pathname === '/home') {
  //             hmButton.style.display = 'none';
  //         } else {
  //             hmButton.style.display = 'flex';
  //         }
  //     }
  // }, [location.pathname]);

  const [doctor, setDoctor] = useState(null);
  const doctorId = sessionStorage.getItem("doctorId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_DR_TIME}/doctors/${doctorId}`
        );
        setDoctor(response.data);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };
    fetchData();
  }, [id]);
  const closePopupOnLinkClick = () => {
    Popup.close();
  };
  return (
    <div>
      <Popup
        trigger={
          <button>
            {" "}
            <BiMenu />{" "}
          </button>
        }
        modal
        nested
        closeOnDocumentClick={false}
      >
        {
          <div id="sd" className="h-auto  bg-cyan-400 px-2">
            <div className="flex flex-col  ">
              <div className="flex justify-center  pt-4">
                {/* if(window.location="/home"){
                                    document.querySelector('.hm').style.display='none'
                                } else{
                                    document.querySelector('.hm').style.display='flex' 
                                } */}
                <Link to="/home" onClick={closePopupOnLinkClick}>
                  {" "}
                  <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-44 h-14 text-white hm">
                    Home{" "}
                  </button>
                </Link>
              </div>

              <div className="flex justify-center pt-4">
                <Link to="/auth" onClick={closePopupOnLinkClick}>
                  <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-44 h-14 text-white">
                    Profil
                  </button>
                </Link>
              </div>

              <div className="flex justify-center pt-4">
                <Link
                  to={`/ArtzProfil/${doctorId}`}
                  onClick={closePopupOnLinkClick}
                >
                  {" "}
                  <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-44 h-14 text-white">
                    Arzt ändern
                  </button>
                </Link>
              </div>
              <div className="flex justify-center pt-4">
                <Link to="/MyTermine" onClick={closePopupOnLinkClick}>
                  {" "}
                  <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-44 h-14 text-white">
                    Termine
                  </button>
                </Link>
              </div>

              <div className="flex justify-center pt-4 pb-4">
                <Link to="/login">
                  {" "}
                  <button
                    onClick={logOut}
                    className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-44 h-14 text-white"
                  >
                    Ausloggen
                  </button>
                </Link>
              </div>
            </div>
          </div>
        }
      </Popup>
    </div>
  );
}
