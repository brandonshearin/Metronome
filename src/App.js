import './App.css';
import React from 'react'
import shapes from './shapes'

function App() {
  const [y, setY] = React.useState(0)
  const [x, setX] = React.useState(0)

  React.useEffect(() => {
    const {innerHeight, innerWidth} = window
    setY(innerHeight)
    setX(innerWidth)
  }, [])

  return (
    <div className='root'>
      {
        shapes.map(({component, name}, index) => {
          return React.createElement(component, {
            className: `shape-${index} ${name}` ,
            style: {
              position: 'absolute',
              left: Math.random() * x,
              top: Math.random() * y
            }})
        })
      }
    </div>
  )
}

export default App;
