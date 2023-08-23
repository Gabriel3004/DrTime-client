import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from "./Header";

export default function EditProfil() {
    return(
        <>

            <div>
                <Header />
            </div>
           <div className=" flex justify-center items-center  flex-col ">         

        
            
            <p className='text-5xl font-bold mb-5 mt-5'>Daten ändern:</p>
            <form action="get">

                        <div id="anrede" className="mb-6">
                            <h1 className="text-xl font-bold mb-4 flex justify-center">Anrede</h1>

                            <div className="flex justify-evenly">

                                <div className="flex">
                                    <label htmlFor="Herr"
                                    className="font-bold mb-2">Herr</label>
                                    <input type="radio" name="anrede" id="anrede"
                                    className="mx-2 w-5 h-5" />
                                </div>
                                <div className="flex">
                                    <label htmlFor="Frau"
                                    className=" font-bold mb-2">Frau</label>
                                    <input type="radio" name="anrede" id="anrede" 
                                    className="mx-2 w-5 h-5"/>
                                </div>

                            </div>

                        </div>


                        <div className="flex mb-4">
                            <div className="flex flex-col">
                                <label htmlFor="name"
                                className="text-xl font-bold mb-2">Vorname</label>
                                <input type="text" 
                                className="placeholder-italic placeholder-slate-400 block bg-white w-32 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm mx-auto mr-8"
                                placeholder="John"/>
                            </div>

                            <div className="flex flex-col ">
                                <label htmlFor=""
                                className="text-xl font-bold mb-2">Nachname</label>
                                <input type="name"
                                className="placeholder-italic placeholder-slate-400 block bg-white w-32 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm mx-auto"
                                placeholder="Doe" />
                            </div>
                        </div>

                        <div className="mb-4">
                        <label htmlFor="email" className="text-xl font-bold ">
                            Email:
                            </label>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="placeholder-italic placeholder-slate-400 block w-80 border  rounded-full py-2 pl-9 sm:text-sm mt-2"
                            placeholder="Ihre Email hier"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" 
                            className="t text-xl font-bold ">
                            Password:
                            </label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            className="placeholder-italic placeholder-slate-400 block bg-white w-80 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm mt-2"
                            placeholder="Ihr Password hier..."
                            />
                         </div>

                         <div className="mb-4">
                            <label htmlFor="password" 
                            className="t text-xl font-bold ">
                            Password wiederholen:
                            </label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            className="placeholder-italic placeholder-slate-400 block bg-white w-80 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm mx-auto mt-2"
                            placeholder="Ihr Password wieder hier..."
                            />
                         </div>

                         <div className="flex justify-between items-center mt-7">
                            <label htmlFor=""
                            className=" text-xl font-bold ">
                                Geburstdatum</label>
                            <input type="date" 
                            className="placeholder-italic placeholder-slate-400 block bg-white w-40 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm mx-auto "/>
                         </div>

                         <div className="mt-4">
                            <label htmlFor=""
                            className=" text-xl font-bold ">Handynummer</label>
                            <input type="tel" name="telefon" id="telefon" 
                            className="placeholder-italic placeholder-slate-400 block bg-white w-80 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm mx-auto mt-2"/>
                         </div>

                         <div id="anrede" className="mb-6 mt-6">
                            <h1 className="text-xl font-bold mb-4 flex justify-center">Aderesse</h1>

                            <div className="flex justify-evenly ">

                                <div className="flex items-center">
                                    <label htmlFor="PLZ"
                                    className="font-bold mr-2">PLZ</label>
                                    <input type="number" name="plz" id="plz"
                                    className="placeholder-italic placeholder-slate-400 block bg-white w-24 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm mx-auto mr-2"
                                    placeholder="35683" />
                                </div>
                                <div className="flex items-center">
                                    <label htmlFor="Ort"
                                    className=" font-bold mr-2">Ort</label>
                                    <input type="text" name="ort" id="ort" 
                                    className="placeholder-italic placeholder-slate-400 block bg-white w-28 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm mx-auto"
                                    placeholder="Dillenburg"/>
                                </div>

                            </div>

                        </div>

                         <div className="mt-4">
                         <label htmlFor=""
                            className=" text-xl font-bold ">
                                KV-Nummer</label>
                                <input type="text" 
                                className="placeholder-italic placeholder-slate-400 block bg-white w-80 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm mx-auto mt-2"/>

                         </div>

                <div className='flex flex-col mt-3'>
                {/* <Link to ="/profil">   */}
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white mx-auto mb-5 cursor-pointer  ">
                Speichern
                </button>
                {/* </Link>
            <Link to ="/profil"> */}
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white mx-auto mb-5 cursor-pointer ">
                Abbrechen
                </button>
                {/* </Link> */}
                </div>

                </form>
            </div>
        </>
    )
}