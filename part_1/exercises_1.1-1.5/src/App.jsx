const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return(
    <>
      <p>{props.part} {props.excercise}</p>
    </>
  )
}

const Content = (props) => {
  return(
  <>
  <Part part = {props.parts[0].name} excercise = {props.parts[0].exercises} />
  <Part part = {props.parts[1].name} excercise = {props.parts[1].exercises} />
  <Part part = {props.parts[2].name} excercise = {props.parts[2].exercises} />
  </>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <>
      <p>Number of exercises {props.parts} </p>
    </>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App