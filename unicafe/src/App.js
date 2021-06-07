import React, { useState } from 'react'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>
)

const Display = ({value, text}) => <div>{text} {value}</div>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if(all !== 0) {
  return(
    <div>
      <Display value={good} text="good"/>
      <Display value={neutral} text="neutral"/>
      <Display value={bad} text="bad"/>
      <Display value={all} text="all"/>
      <Display value={(good - bad) / all} text="average"/>
      <Display value={good / all} text="positive"/>
      </div>
  )}
  return (
    <p>No feedback given</p>
  )}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)
  
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App