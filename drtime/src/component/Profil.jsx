import Header from "./Header";
import silhouetteProfil from "../assets/img-profil/silhouetteProfil.png";
// import { Link } from "react-router-dom";


export default function Profil() {


    return (
        <>
        <div>
            <div>
                <Header />
            </div>

         <div className=" flex items-center  flex-col ">
            
        
           
                <p className="text-5xl font-bold ">
                    Profile
                </p>
                <div className="justify-center rounded-full  mb-5 cursor-pointer pp"   >
                   
                <label htmlFor="profilPic"><img src={silhouetteProfil} alt="Image Silhouette" className="w-40 h-40 pic" /></label> 
                
                <input type="file" className="choosePic hidden"  id='profilPic'/>
                
                </div>
                <p className="profil-name text-xl font-bold mb-10">
                    John Doe
                </p>
                <p className="profil-mail text-xl font-bold mb-10">
                    JohnDoe@gmail.com
                </p>
                <p className="profil-tel text-xl font-bold mb-10">
                    +4956456332
                </p>
                <p className="profil-date text-xl font-bold mb-10">
                    10/09/2001
                </p>
{/*  
             <Link 
             to ="/edit"> */}
             <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white mx-auto mb-5 cursor-pointer ">
              Bearbeiten
            </button>
            {/* </Link>
            <Link to='/home'> */}
                 <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full w-72 h-20 text-3xl text-white mx-auto cursor-pointer">
              Zurück
            </button>
            {/* </Link> */}
            </div>

            </div>
        </> 

    )

}
