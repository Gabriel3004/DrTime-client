import { BiPlusMedical } from "react-icons/bi";

export default function HomePage() {

    return (
        <>
        <div>
            <div className='  bg-blue-200 pt-4'>
                    <section id="my buttons für arzt termin">

                                <div className='flex flex-col  '>
                                    <div className='flex justify-center pt-4'>
                                    <button className='bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white'>Hausarzt</button>
                                    </div>

                                    <div className='flex justify-center pt-4'>
                                    <button className='bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white'>Kinderarzt</button>
                                    </div>
                                </div>

                                    <div className='flex justify-center pt-4'>
                                    <button className='bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-20 h-20 text-white flex justify-center items-center text-2xl'> <BiPlusMedical /> </button>
                                    </div>

                    </section>

                    <div className="flex justify-center pt-8">
                        <h1 className="text-5xl"> Hallo {}</h1>
                    </div>

                    <section className="flex justify-center pt-2">
                        <div className="pt-8">
                            <h1 className="text-4xl flex justify-center pb-10">Ihr nächster Temin</h1>
                            <div className="bg-white flex justify-center w-80 ">
                                <h1> Datum{}, Uhr{} </h1>
                            </div>

                        </div>
                    </section>

                    <div className='flex justify-center pt-48 pb-5'>
                            <button className='bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white'>Termine</button>
                    </div>


            </div>
        </div>
        </>
    )
    
}