import React from 'react'

const Card = ({ weather }) => {
    // Create a new Date object
    const now = new Date();
    const day = now.toLocaleString('default', { month: 'long' }); // Full month name
    const date = now.getDate(); // Day of the month
    const dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
  
    const status = weather?.weather?.[0]?.main?.toLowerCase();

    const weatherStatusHandler = () => {
        if (weather?.cod === "404") return "error"
        if (status === 'clear') return 'clear'
        if (status === 'sunny') return 'sunny'
        if (status === 'cloudy') return 'cloudy'
        if (status === 'rain') return 'rain'
    }


    return (
        <div className="card-list">

            <li className={" card-container " + weatherStatusHandler()}  >
                <div className="weather-card">
                    <div className="day"> {day}, <span>{date}</span> <br /> {dayOfWeek}</div>
                    <h2>{weather?.name ? weather?.name : weather?.city} { }</h2>
                    <div className="features">
                        <div className="high">Temprature : <span>{weather?.main?.temp ?? "Not Found"}</span></div>
                        <div className="high">Humidity: <span>{weather?.main?.humidity ?? "Not Found"}</span></div>
                        <div className="high">Pressure: <span>{weather?.main?.pressure ?? "Not Found"}</span></div>
                        <br />
                        <br />
                        {status ?? "Not Found"}
                    </div>
                </div>
            </li>


        </div >
    )
}

export default Card