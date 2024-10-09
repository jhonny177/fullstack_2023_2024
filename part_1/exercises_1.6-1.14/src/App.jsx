import { useState } from 'react'



const Header = (props) => {
  return(
    <>
      <h1>{props.header}</h1>
    </>
  )
  
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>

)

const Display = props => <table>
  <tbody>
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  </tbody>
</table>

const Display2 = props => <table>
<tbody>
  <tr>
    <td>{props.name}</td>
    <td>{props.value} %</td>
  </tr>
</tbody>
</table>

const Statisticsline = (props) => {
  if(props.name==="Positive"){
    return(
      <Display2 name = {props.name} value = {props.value}/>
    )
  }
  return(
  <>
  <Display name = {props.name} value = {props.value}/>
  </>
  )
}

const Statistics = (props) => {
  if (props.good+props.neutral+props.bad===0){
    return(
      <div>no feedback given</div>
    )
  }
  return(
  <>
    <Header header = {props.name} />
    <Statisticsline name = 'good' value = {props.good} />
    <Statisticsline name = 'neutral' value = {props.neutral} />
    <Statisticsline name = 'bad' value = {props.bad} />
    <Statisticsline name = 'all' value = {props.good+props.neutral+props.bad} />
    <Statisticsline name = 'avarage' value = {props.avarage} />
    <Statisticsline name = 'Positive' value = {props.positive} /> 
  </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avarage, setavarage] = useState(0)
  const [positive, setpos] = useState(0)

  const setgoodvalue = newValue => {
    console.log(newValue)
    setGood(newValue)
  }
  const setneutralvalue = newValue => {
    console.log(newValue)
    setNeutral(newValue)
  }
  const setbadvalue = newValue => {
    console.log(newValue)
    setBad(newValue)
  }
  const calcavarge = all => {
    console.log('all' + all)
    const numb = all/3
    setavarage(numb.toFixed(1))
  }

  const calcpos = (all,go) => {
    console.log(go/all)
    const numb = (go/all)*100
    setpos(numb.toFixed(1))
  }

  return (
    <div>
      <Header header = 'give feedback' />
      <Button handleClick={() => {setgoodvalue(good +1); calcavarge((good+1)+bad+neutral);calcpos((good+1)+bad+neutral,(good+1))}} text='good'/>
      <Button handleClick={() => {setneutralvalue(neutral +1); calcavarge(good+bad+(neutral+1));calcpos((good+1)+bad+neutral,good)}} text='neutral'/>
      <Button handleClick={() => {setbadvalue(bad +1); calcavarge(good+(bad+1)+neutral);calcpos((good+1)+bad+neutral,good)}} text='bad'/>
      <Statistics name = 'Statistics' good={good} neutral={neutral} bad={bad} avarage={avarage} positive={positive} />
    </div>
  )
}

export default App
