import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => <Part key={part.name} part={part}/>)}
    </>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) =>
    sum+= part.exercises, 0)
    
  return(
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App