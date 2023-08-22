import React, { useState } from 'react';
import Header from "./Header";
import silhouetteProfil from "../assets/img-profil/silhouetteProfil.png";
import { Link } from "react-router-dom";
export default function ArtzProfil() {

   
    return (
        <>
         <div className=" flex  items-center  flex-col ">
            <div>
                <Header />
            </div>
        
           
                <p className="text-5xl font-bold ">
                    Artz
                </p>
                <div className="justify-center rounded-full  mb-5 cursor-pointer pp"   >
                   
                <label for="profilPic"><img src={silhouetteProfil} alt="Image Silhouette" className="w-40 h-40 pic" /></label> 
                
                <input type="file" className="choosePic hidden"  id='profilPic'/>
                
                </div>
               
 
             <Link to ="/editArtz">
             <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white mx-auto mb-5 cursor-pointer ">
              Bearbeiten
            </button>
            </Link>
            <Link to='/home'> <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white mx-auto mb-5 cursor-pointer">
              Zurück
            </button>
            </Link>
            </div>
        </> 
    )

}
