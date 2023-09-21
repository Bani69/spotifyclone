import "../App.css"
import List from "./listcontext";
import {useContext} from "react";
import  spotify from "../spotify.png"
export default function LitofSong() {
    const {listofalbum} = useContext(List)
    const style = " h-auto  p-2"
    return (
        <>
            <div className="  flex flex-col h-full relative">

                <header className="text-[#FFFFFF] font-bold text-3xl space-x-7 px-7 py-3 tracking-wide">Recommended for you
                </header>
                <div className="grid p-3 grid-cols-6 max-[1300px]:grid-cols-4 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[450px]:grid-cols-1 overflow-y-scroll scroll-smooth pb-20">




                    {listofalbum.map(data => (
                        <div className={style} key={data.id}>
                        <Card title={data.name} link={data.images[0]?.url} paragraph={""} genre={data.genres[0]} popularity={data.popularity} followers={data.followers?.total}/>
                        </div>
                    ))


                    }
                </div>


            </div>


        </>

    )

}
const Card = (prop) => {
    const {link,title,paragraph,genre,popularity,followers} = prop
    return (
        <>
            <div className="bg-[#1a1a1a] hover:bg-[#242424] h-full w-full rounded-xl p-3 ">



                <img aria-hidden="false" draggable="false" loading="lazy"
                     src={link? link: spotify} data-testid="card-image" alt=""

                     className="rounded-xl aspect-square bg-cover"
                />



                <div className="p-2"><h1 className="font-bold text-white "> {title}</h1>
                    <p className="font-light text-white opacity-60">Genres: {genre}</p>
                    <p className="font-light text-white opacity-60">Popularity: {popularity}</p>
                    <p className="font-light text-white opacity-60">Followers: {followers.toLocaleString()}</p>


                </div>

            </div>

        </>


    )

}