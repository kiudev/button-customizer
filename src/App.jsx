import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import TextButton from './components/TextButton'
import Color from './components/Color'

function App() {
  const [value, setValue] = useState('')

  const handleChange = text => {
    setValue(text.target.value)
  }

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = color => {
    setIsClicked(color)
  }

  const containerStyles = {
    display: 'flex',
    gap: '10px',
  }

  return (
    <main>
      <Button text={value} bgColor={{ backgroundColor: isClicked }} />
      <TextButton onchange={handleChange} />
      <header>
        <h2>Text Color</h2>
      </header>
      <section style={containerStyles}>
        <Color text="Black" onclick={handleClick} />
        <Color text="Blue" onclick={handleClick} />
        <Color text="Brown" />
        <Color text="Green" />
        <Color text="Orange" />
        <Color text="Yellow" />
        <Color text="White" />
      </section>
    </main>
  )
}

export default App
