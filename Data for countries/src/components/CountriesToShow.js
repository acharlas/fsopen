import React from 'react'

const DisplayNameCountry = ({country}) => <p> {country.name} {country.number} </p>

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
			<img src={country.flag} alt="Flag of country" width="150" height="150"></img>
		</div>
	)
}

const CountriesToShow = ({countriesToShow}) => {

  if (countriesToShow.length === 1) {
		return (
			<DisplayFullCountry country={countriesToShow[0]}/>
		)
	}
	else if(countriesToShow.length <= 10 && countriesToShow.length > 1) {
    return (
      <div>
				{countriesToShow.map(country => <DisplayNameCountry key={country.numericCode} country={country}/>)}
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