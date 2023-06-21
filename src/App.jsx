import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import TextButton from './components/TextButton'
import Color from './components/Color'

function App() {
    const [value, setValue] = useState(false)

    const handleChange = text => {
        setValue(text.target.value)
    }

    const [bgColor, setbgColor] = useState('')

    const handleClick = color => {
        setbgColor(color.target.value)
    }

    const containerStyles = {
        display: 'flex',
        gap: '20px',
    }

    return (
        <main>
            <Button
                text={value}
                style={{
                    backgroundColor: bgColor,
                    width: '200px',
                    height: '80px',
                }}
            />
            <TextButton onchange={handleChange} />
            <div className='line'></div>
            <div className="bgColor">
                <header>
                    <h1>Background Color</h1>
                </header>
                <section style={containerStyles}>
                    <Color
                        text="Black"
                        name="color"
                        value="black"
                        onclick={handleClick}
                    />
                    <Color
                        text="Blue"
                        name="color"
                        value="blue"
                        onclick={handleClick}
                    />
                    <Color
                        text="Red"
                        name="color"
                        value="red"
                        onclick={handleClick}
                    />
                    <Color
                        text="Green"
                        name="color"
                        value="green"
                        onclick={handleClick}
                    />
                    <Color
                        text="Orange"
                        name="color"
                        value="orange"
                        onclick={handleClick}
                    />
                    <Color
                        text="Yellow"
                        name="color"
                        value="yellow"
                        onclick={handleClick}
                    />
                    <Color
                        text="White"
                        name="color"
                        value="white"
                        onclick={handleClick}
                    />
                </section>
            </div>
        </main>
    )
}

export default App
