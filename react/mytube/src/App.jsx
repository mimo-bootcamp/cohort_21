import { useState } from "react";
import "./App.css";


// https://youtu.be/u9BoG1n1948
// https://www.youtube.com/embed/TLysAkFM4cA


function App() {
  const [url, setUrl] = useState('')
  console.log
  return (
    <div className="App">
      <div>
        <h1>mytube</h1>
        <h3>mytime</h3>

        <input onChange={(event)=>setUrl(event.target.value)} className="input" type="text" placeholder="paste your youtube url here.." />
        {/* <button onClick={()=>}>get video</button> */}
        <div className="card">
          <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

        </div>
      </div>
    </div>
  );
}

export default App;
