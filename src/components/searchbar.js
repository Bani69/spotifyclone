import "../App.css"
import 'font-awesome/css/font-awesome.min.css'
import {useContext} from "react";
import List from "./listcontext";

export default function Searchbar() {
    const {listofalbum,setlistofalbum,search, setsearch} = useContext(List)
const styles = "h-full justify-center flex place-items-center "
    const btnstyle="bg-[#000] px-3 py-2 rounded-full"

    const setinput=(e)=>{
        setsearch(e.target.value)


    }
    return (

        <>
            <div className="w-full h-16 rounded-2xl flex place-items-center justify-between px-5 align-middle bg-[#1a1a1a]">
                <div className={styles +"gap-2 text-white opacity-80"}>
                    <button className={btnstyle}> <i className="fa fa-arrow-left"></i></button>
                    <button className={btnstyle}> <i className="fa fa-arrow-right"></i></button>

                </div>

                <div className={styles+"w-[50%]"}>
                    <div  className="m rounded-xl bg-[#242424] flex  gap-2 place-items-center w-full h-[70%] justify-center p-2 text-xl text-white font-light relative">
                        <i className="fa fa-search opacity-60 "></i> <input type="text" onChange={setinput} className="bg-transparent focus:outline-none border-0 w-full text-[#a7a7a7] text-sm " placeholder="What do you want to listen to?"/> </div>
                </div>
                <div className={styles + "text-white opacity-80 text-2xl"}>

                    <button><i className="fa fa-user-secret"> </i></button>
                </div>
            </div>


        </>

    )


}