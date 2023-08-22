import React, { useState } from 'react';
import Header from "./Header";

export default function EditProfil() {
    return(
        <>
            <div>
                <Header />
            </div>
        
            <div className=" flex justify-center items-center  mt-3 flex-col ">
            <p className='text-5xl font-bold mb-5'>Daten ändern:</p>
                <form action="" method='get' className=''>
                <label htmlFor="vorname" className=''>
                    Vorname:
                </label>
                <input type="text" id='vorname-profil' required placeholder='vorname...' className='placeholder-italic placeholder-slate-400 block bg-white w-80 border border-slate-300 rounded-full py-2 pl-9 sm:text-sm mx-auto mb-5' />
                <label htmlFor="nachname">
                    Nachname:
                </label>
                <input type="text" id='nachname-profil' required placeholder='Nachname...'  className='placeholder-italic placeholder-slate-400 block bg-white w-80 border border-slate-300 rounded-full py-2 pl-9 sm:text-sm mx-auto mb-5' />
                <label htmlFor="email">
                    Email:
                </label>
                <input type="email" id='email-profil' required placeholder='Email...' className='placeholder-italic placeholder-slate-400 block bg-white w-80 border border-slate-300 rounded-full py-2 pl-9 sm:text-sm mx-auto mb-5' />
                <label htmlFor="telefon">
                    Telefon:
                </label>
                <input type="number" id='telefon-profil' required placeholder='Telefon...' className='placeholder-italic placeholder-slate-400 block bg-white w-80 border border-slate-300 rounded-full py-2 pl-9 sm:text-sm mx-auto mb-5' />
                <label htmlFor="telefon">
                    Straße:
                </label>
                <input type="text" id='straße-profil' required placeholder='straße...' className='placeholder-italic placeholder-slate-400 block bg-white w-80 border border-slate-300 rounded-full py-2 pl-9 sm:text-sm mx-auto mb-5' />
               <div className='flex flex-col mt-3'>
                <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white mx-auto mb-5 cursor-pointer hover:from-blue-900 ">
              Speichern
            </button>
            <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white mx-auto mb-5 cursor-pointer  hover:from-blue-900">
              Abbrechen
            </button>
            </div>
                </form>
            </div>
        </>
    )
}