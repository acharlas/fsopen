import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Weather = ({city}) => {
	const [weather, setWeather] = useState([])
	useEffect(() => {
		axios
			 .get('https://api.weatherapi.com/v1/current.json?key=ade4a16fd9394dd5b0f150631211106&q='+city+'&aqi=no')
			 .then(response => {setWeather(response.data.current)})
		 },[city])
	return (
		<div>
			<h2>Weather in {city}</h2>
			<p>temperature: {weather.temp_c} °C</p>
			<p>wind: {weather.wind_kph} kph direction {weather.wind_dir} </p>
		</div>
	)
}

export default Weather