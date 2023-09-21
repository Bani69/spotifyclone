
import "../App.css"
import  spotify from "../spotify.png"

export default function Login(){
    const SPOTIFY_AUTH="https://accounts.spotify.com/authorize?client_id=955dc8de727441fb9f267874fc5b4a0b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    return (
        <>
            <div className="w-full h-screen bg-[#000] p-3  ">
                <div className=" flex h-full bg-[#121212] rounded-2xl   justify-center place-items-center">
                      <div className="bg-[#242424] p-7   w-auto flex flex-col w-auto  rounded-lg">
                      <div className=" flex flex-row gap-4 place-items-center text-5xl text-6xl font-bold opacity-60 text-[#fff] tracking-normal p-2">Spotify <img src={spotify} className="w-1/12 float-left" alt=""/></div>
                     <h1 className="text-7xl text-6xl font-bold text-[#fff] tracking-normal p-2">Music for <span className="text-[#1ed760]">Everyone</span>.</h1>
                        <div className="flex p-3">  <a href={SPOTIFY_AUTH} className="border-0 opacity-70 bg-[#1ed760] px-5 py-3.5 rounded-[5px]  text-[#121212]  font-bold tracking-wider ">Login with Spotify</a>
                         </div>


                      </div>
                </div>

            </div>

        </>

    )




}