// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

// eslint-disable-next-line no-use-before-define
function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(window.localStorage.getItem('name') || initialName)

  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  React.useEffect(() => {
    console.log('useEffect called')
    window.localStorage.setItem('name', name)
  }, [name])

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  function handleChange(event) {
    setName(event.target.value)
    window.localStorage.setItem('name', event.target.value)
  }

  return (<div>
    <form>
      <label htmlFor="name">Name: </label>
      <input value={name} onChange={handleChange} id="name" />
    </form>
    {name ? <strong>Hello {name}</strong> : 'Please type your name'}
  </div>)
}

function App() {
  const [count, setcount] = React.useState(0)

  return <>
    <button onClick={() => setcount(p => p + 1)}>click {count}</button>
    <Greeting /></>
}

export default App
