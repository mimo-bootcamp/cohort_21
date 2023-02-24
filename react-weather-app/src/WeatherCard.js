
const WeatherCard = (props) => {
    return (
        <div className="weather-card">
           {(props.temp < 0) ? <h1>🥶</h1> :  <img src={props.icon} alt={props.condition}/>}

            <h2>{props.day}</h2>
            <p>{props.condition}</p>
            <p>{props.temp}°C</p>
            
        </div>
    )
};


export default WeatherCard;