const Courses = ({courses}) => {
    return (
      <>
        {courses.map(course => <Course key={course.id} course={course}/>)}
      </>
    )
}
  
const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
}
  
const Header = ({name}) => {
    return(
      <div>
        <h1>{name}</h1>
      </div>
    )
}
  
const Content = ({parts}) => {
    return (
      <>
        {parts.map(part => <Part key={part.id} part={part}/>)}
      </>
    )
}
  
const Part = ({part}) => <p>{part.name} {part.exercises}</p>
  
const Total = ({parts}) => {
    const total = parts.reduce((sum,part) => 
    sum += part.exercises, 0)
    return (
      <div>
        <p>Number of exercises {total}</p>
      </div>
    )
}

export default Courses