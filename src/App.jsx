import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import TextButton from './components/TextButton'
import TextColor from './components/TextColor/TextColor'
import BackgroundColor from './components/BackgroundColor/BackgroundColor'
import Footer from './components/Footer/Footer'

function App() {
    // Create useState ("value" and "setValue") and a function that allows the user to write something in the button.
    const [value, setValue] = useState(false)

    const handleChange = text => {
        setValue(text.target.value)
    }
    // Create useState ("bgColor" and "setbgColor") and a function that allows the user to print the background color in the button.
    const [bgColor, setBgColor] = useState(false)

    const changeBackground = backgroundColor => {
        setBgColor(backgroundColor.target.value)
    }

    // Create useState ("textColor" and "setTextColor") and a function that allows the user to print the text color in the button.
    const [textColor, setTextColor] = useState(false)

    const changeText = text => {
        setTextColor(text.target.value)
    }

    const containerStyles = {
        display: 'flex',
        gap: '20px',
    }

    return (
        <main>
            <header>
              <h1>Test how your button looks</h1>
                <Button
                    text={value}
                    style={{
                        backgroundColor: bgColor,
                        color: textColor,
                        width: '200px',
                        height: '80px',
                    }}
                />
                <TextButton change={handleChange} />
            </header>
            <div className="line"></div>
            <section className="customize-sections">
                <div className="bgColor">
                    <header>
                        <h1>Background Color</h1>
                    </header>
                    <section style={containerStyles}>
                        <BackgroundColor
                            text="Black"
                            name="background"
                            value="black"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            text="Blue"
                            name="background"
                            value="blue"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            text="Green"
                            name="background"
                            value="green"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            text="Grey"
                            name="background"
                            value="grey"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            text="Orange"
                            name="background"
                            value="orange"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            text="Purple"
                            name="background"
                            value="purple"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            text="Red"
                            name="background"
                            value="red"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            text="Yellow"
                            name="background"
                            value="yellow"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            text="White"
                            name="background"
                            value="white"
                            click={changeBackground}
                        />
                    </section>
                </div>
                <div className="text-color">
                    <header>
                        <h1>Text Color</h1>
                    </header>
                    <section style={containerStyles}>
                        <TextColor
                            text="Black"
                            name="text"
                            value="black"
                            click={changeText}
                        />
                        <TextColor
                            text="Blue"
                            name="text"
                            value="blue"
                            click={changeText}
                        />
                        <TextColor
                            text="Green"
                            name="background"
                            value="green"
                            click={changeText}
                        />
                        <TextColor
                            text="Grey"
                            name="background"
                            value="grey"
                            click={changeText}
                        />
                        <TextColor
                            text="Orange"
                            name="background"
                            value="orange"
                            click={changeText}
                        />
                        <TextColor
                            text="Purple"
                            name="background"
                            value="purple"
                            click={changeText}
                        />
                        <TextColor
                            text="Red"
                            name="background"
                            value="red"
                            click={changeText}
                        />
                        <TextColor
                            text="Yellow"
                            name="background"
                            value="yellow"
                            click={changeText}
                        />
                        <TextColor
                            text="White"
                            name="background"
                            value="white"
                            click={changeText}
                        />
                    </section>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default App
