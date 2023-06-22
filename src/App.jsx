import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton/MainButton'
import TextButton from './components/TextButton/TextButton'
import TextColor from './components/TextColor/TextColor'
import BackgroundColor from './components/BackgroundColor/BackgroundColor'
import Footer from './components/Footer/Footer'
import Font from './components/Font/Font'

function App() {
    // Create useState ("value" and "setValue") and a function that allows the user to write something in the button.
    const [value, setValue] = useState('Button')

    const handleChange = text => {
        setValue(text.target.value)
    }
    // Create useState ("bgColor" and "setbgColor") and a function that allows you to print the background color in the button.
    const [bgColor, setBgColor] = useState('')

    const changeBackground = backgroundColor => {
        setBgColor(backgroundColor.target.value)
    }

    // Create useState ("textColor" and "setTextColor") and a function that allows you to print the text color in the button.
    const [textColor, setTextColor] = useState('white')

    const changeText = text => {
        setTextColor(text.target.value)
    }

    // Create useState ("isBold" and "setIsBold") and a function that allows you to print the font bold
    // with a ternary operation that makes a condition whether the user wants the font bold or not.
    // (isBold ? 'normal' : 'bold')
    const [isBold, setIsBold] = useState('normal')
    const [isClickedBold, setIsClickedBold] = useState(false)

    const changeFontWeight = () => {
        setIsBold(!isBold)
        setIsClickedBold(!isClickedBold)
    }

    // Create useState ("isItalic" and "setIsItalic") and a function that allows you to print the font italic
    // with a ternary operation that makes a condition whether the user wants the font italic or not.
    // (isItalic ? 'normal' : 'italic')
    const [isItalic, setIsItalic] = useState('normal')
    const [isClickedItalic, setIsClickedItalic] = useState(false)

    const changeFontStyle = () => {
        setIsItalic(!isItalic)
        setIsClickedItalic(!isClickedItalic)
    }

    // Create useState ("isUnderline" and "setIsUnderline") and a function that allows you to print the font underline
    // with a ternary operation that makes a condition whether the user wants the font underline or not.
    // (isUnderline ? 'none' : 'underline')
    const [isUnderline, setIsUnderline] = useState('normal')
    const [isClickedUnderline, setIsClickedUnderline] = useState(false)

    const changeFontDecoration = () => {
        setIsUnderline(!isUnderline)
        setIsClickedUnderline(!isClickedUnderline)
    }

    return (
        <main>
            <header>
                <h1>Test how your button looks</h1>
                <MainButton
                    text={value}
                    style={{
                        fontFamily: 'sans',
                        backgroundColor: bgColor,
                        color: textColor,
                        fontWeight: isBold ? 'normal' : 'bold',
                        fontStyle: isItalic ? 'normal' : 'italic',
                        textDecoration: isUnderline ? 'none' : 'underline',
                        width: '200px',
                        height: '80px',
                    }}
                />
                <TextButton change={handleChange} />
                <section className="font-buttons">
                    <Font
                        style={{
                            fontFamily: 'sans',
                            fontWeight: 'bold',
                            backgroundColor: isClickedBold ? '#c2c2c2' : '#000',
                            color: isClickedBold ? '#000' : '#fff',
                        }}
                        click={changeFontWeight}
                        text="B"
                    />
                    <Font
                        style={{
                            fontFamily: 'sans',
                            fontStyle: 'italic',
                            backgroundColor: isClickedItalic ? '#c2c2c2' : '#000',
                            color: isClickedItalic ? '#000' : '#fff',
                            padding: '10px 18px',
                        }}
                        value="italic"
                        click={changeFontStyle}
                        text="I"
                    />
                    <Font
                        style={{
                            fontFamily: 'sans',
                            textDecoration: 'underline',
                            backgroundColor: isClickedUnderline ? '#c2c2c2' : '#000',
                            color: isClickedUnderline ? '#000' : '#fff',
                        }}
                        value="underline"
                        click={changeFontDecoration}
                        text="U"
                    />
                </section>
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
