import React, { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  // add auto length and auto fill
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])
  const [max, setMaxVote] = useState(0)

  const randomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const maxVote = (L) => {
    const indexOfMaxValue = L.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
    setMaxVote(indexOfMaxValue)
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    maxVote(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={randomAnecdote} text="next anecdote"/>
      <Button handleClick={voteAnecdote} text="vote"/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]}</p>
      <p>This anecdote has {votes[max]}</p>
    </div>
  )
}

export default App