import React, { useState } from 'react'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({value, text}) => {
  return(
  <tr>
    <td>{text}</td>
    <td>{Number.isInteger(value) ? value : value.toFixed(2)}</td>
  </tr>
)}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  if(total !== 0) {
  return(
    <table>
      <tbody>
      <Statistic value={good} text="good"/>
      <Statistic value={neutral} text="neutral"/>
      <Statistic value={bad} text="bad"/>
      <Statistic value={total} text="all"/>
      <Statistic value={(good - bad) / total} text="average"/>
      <Statistic value={good / total} text="positive %"/>
      </tbody>
    </table>
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