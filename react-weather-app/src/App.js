import WeatherCard from "./WeatherCard";
import {useState} from "react";


function App() {

//    state var  state setter    state creation function
  const [likes , setLikes] =  useState(0);

  const [forcast, setForcast] = useState(
    [
      {
        city:'Berlin',
        temp_c: -4,
        condition: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        day: "Mon"
      },
      {
        city:'Berlin',
        temp_c: -1,
        condition: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        day:"Tue"
      },
      {
        city:'Berlin',
        temp_c: 3,
        condition: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        day:'Wed'
      },
      {
        city:'Berlin',
        temp_c: 8,
        condition: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        day:'Thu'
      },
      {
        city:'Berlin',
        temp_c: 16,
        condition: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        day:'Fri'
      },

    ]
    )
  function addLike() {
    setLikes(likes + 1)
  }
  function removeLike() {
    setLikes(likes - 1)
  }
  
  return (
    <div className="App">
      <div className="forecast">

      {forcast.map((weather) => {
        return (
          
          <WeatherCard 
          key={weather.day}
          condition={weather.condition}
          temp={weather.temp_c} 
          icon={weather.icon}
          city={weather.city}
          day={weather.day}
          />
          )
        }) }
        </div>
      
          <h1>likes: {likes} </h1>
          <button onClick={addLike} >like</button>
          {(likes > 0) && <button onClick={removeLike}>unlike</button>} {/* same as: {(likes > 0) ? <button onClick={removeLike}>unlike</button> : ''} */}
    </div>
  );
}

export default App;









//       temp_c: 8.0,
//       text: "Clear",
//       icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
 