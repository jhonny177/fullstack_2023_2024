import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Hasvotes = (props) => {
  return(
  <>
  <div>has {props.value} votes</div>
  </>
  )
  }

const Header = (props) => {
  return(
    <h1>{props.header}</h1>
  )
}

const Mostvotes =(props) => {
  return(
    <>
    <div>{props.anecdotes}</div>
    <div>has {props.votes} votes</div>
    </>
  )
}

const App = () => {

  function handlevoteclick (votes,index){
    const nextvote = votes.map(function (c, i) {
      if (i === index) {
        return c + 1
      }
      else{
        return c
      }
    } )
    return setvoted(nextvote)
  }

  function findIndexMax (v){
    var inMax = 0
    var valmax = v[0]
    for (var i = 0; i<v.length;i++){
      if (v[i]> valmax){
        inMax = i
        valmax = v[i]
      }
    }
    return inMax
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const AnecdotNum =anecdotes.length 
  let votes = Array.apply(null, Array(AnecdotNum)).map(Number.prototype.valueOf,0);
  const [selected, setSelected] = useState(0)
  const [voted, setvoted] = useState(votes)
  console.log(selected)
  console.log(voted)
  return (
    <div>
      <Header header = 'Anecdote of the day'/>
      {anecdotes[selected]}
      <Hasvotes value = {voted[selected]} />
      <Button handleClick={() => {handlevoteclick(voted,selected)}} text='vote'/>
      <Button handleClick={() => {setSelected(Math.floor(Math.random() * AnecdotNum))}} text='nextanecdote'/>
      <Header header = 'Anecdote with most votes'/>
      <Mostvotes anecdotes = {anecdotes[findIndexMax(voted)]} votes = {voted[findIndexMax(voted)]} />
    </div>
  )
}

export default App