import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import TextButton from './components/TextButton'
import TextColor from './components/TextColor/TextColor'
import BackgroundColor from './components/BackgroundColor/BackgroundColor'
import Footer from './components/Footer/Footer'

function App() {
    // Create useState ("value" and "setValue") and a function that allows the user to write something in the button.
    const [value, setValue] = useState('Button')

    const handleChange = text => {
        setValue(text.target.value)
    }
    // Create useState ("bgColor" and "setbgColor") and a function that allows the user to print the background color in the button.
    const [bgColor, setBgColor] = useState('')

    const changeBackground = backgroundColor => {
        setBgColor(backgroundColor.target.value)
    }

    // Create useState ("textColor" and "setTextColor") and a function that allows the user to print the text color in the button.
    const [textColor, setTextColor] = useState('white')

    const changeText = text => {
        setTextColor(text.target.value)
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
            <div>
                <header>
                    <h1>Background Color</h1>
                </header>
                <section className="container">
                    <div className="container-responsive">
                        <BackgroundColor
                            style={{ backgroundColor: 'black' }}
                            name="background"
                            value="black"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'blue' }}
                            name="background"
                            value="blue"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'green' }}
                            name="background"
                            value="green"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'grey' }}
                            name="background"
                            value="grey"
                            click={changeBackground}
                        />
                    </div>
                    <div className="container-responsive">
                        <BackgroundColor
                            style={{ backgroundColor: 'orange' }}
                            name="background"
                            value="orange"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'purple' }}
                            name="background"
                            value="purple"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'red' }}
                            name="background"
                            value="red"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'yellow' }}
                            name="background"
                            value="yellow"
                            click={changeBackground}
                        />
                    </div>
                    <div className="container-responsive">
                        <BackgroundColor
                            style={{ backgroundColor: 'white' }}
                            name="background"
                            value="white"
                            click={changeBackground}
                        />
                    </div>
                </section>
                <header>
                    <h1>Text Color</h1>
                </header>
                <section className="container">
                    <div className="container-responsive">
                        <TextColor
                            style={{ backgroundColor: 'black' }}
                            name="text"
                            value="black"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'blue' }}
                            name="text"
                            value="blue"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'green' }}
                            name="background"
                            value="green"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'grey' }}
                            name="background"
                            value="grey"
                            click={changeText}
                        />
                    </div>
                    <div className="container-responsive">
                        <TextColor
                            style={{ backgroundColor: 'orange' }}
                            name="background"
                            value="orange"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'purple' }}
                            name="background"
                            value="purple"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'red' }}
                            name="background"
                            value="red"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'yellow' }}
                            name="background"
                            value="yellow"
                            click={changeText}
                        />
                    </div>
                    <div className="container-responsive">
                        <TextColor
                            style={{ backgroundColor: 'white' }}
                            name="background"
                            value="white"
                            click={changeText}
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}

export default App
