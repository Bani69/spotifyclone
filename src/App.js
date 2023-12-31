
import './App.css';
import Spotify from "./components/spotify-config";

import Login from "./components/login";



function App() {
  const  codeurl= new URLSearchParams(window.location.search).get('code');
  return (
      <div className="w-full h-screen bg-[#000] overflow-hidden ">
         <Spotify  code={codeurl}/>
      </div>
  );
}

export default App;
