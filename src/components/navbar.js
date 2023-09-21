
import "../App.css"
import 'font-awesome/css/font-awesome.min.css'
export  default function Navbar(){

    return (
        // bg-[#121212]
        <>

          <nav className="w-20 grid gap-3 grid-rows-6 ">

              <div className=" bg-[#121212] rounded-xl flex justify-center h-30">
                   <ul className="flex flex-col place-items-center justify-center text-[30px] opacity-50 ">

                       <li><i className="fa fa-home text-white " ></i></li>
                       <li> <i className="fa fa-search text-white"></i></li>
                   </ul>

              </div>
                <div className=" bg-[#121212] rounded-xl row-span-5  " >


                </div>

          </nav>



        </>
    )


}