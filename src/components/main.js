import "../App.css"
import 'font-awesome/css/font-awesome.min.css'
import Searchbar from "./searchbar";
import LitofSong from "./listofsong";
import {useEffect, useState} from "react";
import List from "./listcontext";

export default function Main(prop) {
    const {code} = prop;
    const CLIENTID = "955dc8de727441fb9f267874fc5b4a0b"
    const CLIENTSECRET = "6e990a55dcd54f7c80b25c12deb4da40"
// const accessToken=useAuth(code)
    const [listofalbum, setlistofalbum] = useState([])
    const [search, setsearch] = useState()
    const [accessToken, setaccessToken] = useState("")

    useEffect(() => {
        var Auth = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENTID + '&client_secret=' + CLIENTSECRET
        };

        fetch('https://accounts.spotify.com/api/token', Auth)
            .then(result => result.json())
            .then(data => setaccessToken(data.access_token))
            .catch(error => console.error('BWESIT'));
    }, []);
    useEffect(() => {
        var SEARCH = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        };
        const encodedSearch = encodeURIComponent(search);
        fetch('https://api.spotify.com/v1/search?q=' + search + '&type=artist', SEARCH)
            .then(result => result.json())
            .then(data => setlistofalbum(data.artists.items))
            .catch(error => console.error('Error:', error));

    }, [search, accessToken]);


    return (
        <List.Provider value={{listofalbum, setlistofalbum, search, setsearch}}>
            <>
                <div className="w-full h-full bg-[#121212]  rounded-2xl p-2 lb">
                    <Searchbar/>
                    <LitofSong/>
                    }
                </div>

            </>
        </List.Provider>
    )

}