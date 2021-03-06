import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = ((good + (bad * -1)) / total).toFixed(2)
  const positive = ((good / total) * 100).toFixed(2) + ' %'
  
  if (total === 0) {
    return (
    <div>
      <h2>statistics</h2>
      No feedback given
    </div>
    )
  }
  
  return (
    <div>
      <h2>statistics</h2>

      <table>
        <tbody>
          <Statistic text = "good" value = {good} />
          <Statistic text = "neutral" value = {neutral} />
          <Statistic text = "bad" value = {bad} />
          <Statistic text = "all" value = {total} />
          <Statistic text = "average" value = {average} />
          <Statistic text = "positive" value = {positive} />
        </tbody>
      </table>

    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)