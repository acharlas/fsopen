import React from 'react'
import Weather from './Weather'

const DisplayNameCountry = ({country, handleClick}) => {
	return (
		<div>
			{country.name}	
			<button onClick={handleClick} id={country.name}>show</button>
		</div>
	)
}

const Languages = ({language}) => {
	return (
		<li>{language.name}</li>
	)
}

const DisplayFullCountry = ({country}) => {
	return (
		<div>
			<h1>{country.name}</h1>
				<p>Capital: {country.capital}</p>
				<p>population: {country.population}</p>
			<h2>Language</h2>
				<ul>
					{country.languages.map(language => <Languages key={language.iso639_1} language={language}/>)}
				</ul>
				<img src={country.flag} alt="Flag of country" width="20%" height="20%"></img>
				<Weather city={country.capital}/>
		</div>
	)
}

const CountriesToShow = ({countriesToShow, handleClick, displayButton}) => {
  if (countriesToShow.length === 1) {
		return (
			<DisplayFullCountry country={countriesToShow[0]}/>
		)
	}
	else if(countriesToShow.length <= 10 && countriesToShow.length > 1) {
    return (
      <div>
				{countriesToShow.map(country => 
					<DisplayNameCountry key={country.numericCode} country={country} handleClick={handleClick} />
				)}
      </div>
  )}
	else {
    return (
      <div>
				<p>Too many matches, specify another filter</p>
      </div>
  )}
}

export default CountriesToShow