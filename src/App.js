import './App.css';
import React from 'react'
import shapes from './shapes'

function App() {
  // const [animated, setAnimated] = React.useState(false)

  return shapes.map(({component, name}, index) => {
    return React.createElement(component, {className: `shape-${index} ${name}`})
  })
}




export default App;
