import { useState } from 'react'
import Startsite from "./component/Startsite";
import HomePage from './component/HomePage';
import Register from './component/Register';
import Login from './component/Login';
import MyCalendar from './component/MyCalendar';
import Profil from './component/Profil';
import ArtzProfil from './component/ArtzProfil';
import EditProfil from './component/EditProfil';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 min-h-screen flex justify-center items-center">
      <Startsite />
    </div>

    <div className='bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 min-h-screen '>
      <Login />
    </div> 

    <div className='bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400  min-h-screen'>
      <Register />
    </div> 

    <div className='bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400  min-h-screen'>
      <HomePage />
    </div>

    <div  className='bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400  min-h-screen'>
      <MyCalendar />
    </div>

    <div  className='bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400  min-h-screen'>
      <Profil />
    </div>

    <div  className='bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400  min-h-screen'>
      <ArtzProfil />
    </div>

    <div  className='bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400  min-h-screen'>
      <EditProfil />
    </div>






    </>
  )
}

export default App