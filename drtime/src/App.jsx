import { useState } from 'react'
import Startsite from "./component/Startsite";
import HomePage from './component/HomePage';
// import Header from './component/Header';
import Register from './component/Register';
import Login from './component/Login';
import MyCalendar from './component/MyCalendar';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    


    <div className=" bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 pt-4'> min-h-screen flex justify-center ">
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



    </>
  )
}

export default App
