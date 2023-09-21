
import "../App.css"
import Navbar from "./navbar";
import Main from "./main";


export default function Spotify (prop){
    const {code} = prop;
    return (
        <>
           <div className="w-full h-full  bg-[#000] p-2  ">
              <div className="flex w-full h-full  rounded-2xl gap-3">
               <Navbar/>
              <Main code={code}/>
              </div>

           </div>

        </>

    )




}