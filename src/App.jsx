import { useState } from 'react'
import './App.css'
import MainButton from './components/MainButton/MainButton'
import TextButton from './components/TextButton/TextButton'
import TextColor from './components/TextColor/TextColor'
import BackgroundColor from './components/BackgroundColor/BackgroundColor'
import Footer from './components/Footer/Footer'
import TextStyle from './components/TextStyle/TextStyle'
import SizeButton from './components/SizeButton/SizeButton'
import TextSize from './components/TextSize/TextSize'

function App() {
    // * TEXT
    //  Create useState ("value" and "setValue") and a function that allows the user to write something in the button.
    const [value, setValue] = useState('')

    const writeText = text => {
        setValue(text.target.value)
    }
    // * BACKGROUND COLOR
    // Create useState ("bgColor" and "setbgColor") and a function that allows the user to print the background color in the button.
    const [bgColor, setBgColor] = useState('')

    const changeBackground = backgroundColor => {
        setBgColor(backgroundColor.target.value)
    }

    // * TEXT COLOR
    // Create useState ("textColor" and "setTextColor") and a function that allows the user to print the text color in the button.
    const [textColor, setTextColor] = useState('white')

    const changeText = text => {
        setTextColor(text.target.value)
    }

    // * BOLD
    // Create useState ("isBold" and "setIsBold") and a function that allows the user to print the font bold
    // with a ternary operation that makes a condition whether the user wants the font bold or not.
    // (isBold ? 'normal' : 'bold')
    const [isBold, setIsBold] = useState('normal')
    const [isClickedBold, setIsClickedBold] = useState(false)

    const changeFontWeight = () => {
        setIsBold(!isBold)
        setIsClickedBold(!isClickedBold)
    }

    // * ITALIC
    // Create useState ("isItalic" and "setIsItalic") and a function that allows the user to print the font italic
    // with a ternary operation that makes a condition whether the user wants the font italic or not.
    // (isItalic ? 'normal' : 'italic')
    const [isItalic, setIsItalic] = useState('normal')
    const [isClickedItalic, setIsClickedItalic] = useState(false)

    const changeFontStyle = () => {
        setIsItalic(!isItalic)
        setIsClickedItalic(!isClickedItalic)
    }

    // * UNDERLINE
    // Create useState ("isUnderline" and "setIsUnderline") and a function that allows the user to print the font underline
    // with a ternary operation that makes a condition whether the user wants the font underline or not.
    // (isUnderline ? 'none' : 'underline')
    const [isUnderline, setIsUnderline] = useState('normal')
    const [isClickedUnderline, setIsClickedUnderline] = useState(false)

    const changeFontDecoration = () => {
        setIsUnderline(!isUnderline)
        setIsClickedUnderline(!isClickedUnderline)
    }

    // * FONT SIZE
    const [textSize, setTextSize] = useState('1px')
    const changeTextSize = size => {
        setTextSize(size.target.value)
    }

    // * WIDTH
    // Create useState ("widthButton" and "setWidthButton") and a function that allows the user to set width button.
    const [widthButton, setWidthButton] = useState('0')

    const changeWidth = width => {
        setWidthButton(width.target.value)
    }

    // * HEIGHT
    // Create useState ("widthButton" and "setWidthButton") and a function that allows the user to set height button.
    const [heightButton, setHeightButton] = useState('0')

    const changeHeight = height => {
        setHeightButton(height.target.value)
    }

    return (
        <main>
            <header>
                <MainButton
                    text={value}
                    style={{
                        fontFamily: 'sans',
                        backgroundColor: bgColor,
                        color: textColor,
                        fontWeight: isBold ? 'normal' : 'bold',
                        fontStyle: isItalic ? 'normal' : 'italic',
                        textDecoration: isUnderline ? 'none' : 'underline',
                        fontSize: textSize,
                        width: widthButton,
                        height: heightButton,
                    }}
                />
                <h1>Enter the properties</h1>
                <section
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '60px',
                    }}
                >
                    <div>
                        <h3>Size the button with any unit</h3>
                        <div
                            style={{
                                display: 'flex',
                                placeContent: 'center',
                                gap: '20px',
                            }}
                        >
                            <SizeButton placeholder="X" change={changeWidth} />
                            <SizeButton placeholder="Y" change={changeHeight} />
                        </div>
                    </div>
                    <div style={{ display: 'block' }}>
                        <h3>Write the text and set the size</h3>
                        <div className="text-container">
                            <TextButton change={writeText} />
                            <TextSize change={changeTextSize} />
                        </div>
                    </div>
                </section>
                <section className="font-buttons">
                    <TextStyle
                        style={{
                            fontFamily: 'sans',
                            fontWeight: 'bold',
                            backgroundColor: isClickedBold ? '#c2c2c2' : '#000',
                            color: isClickedBold ? '#000' : '#fff',
                        }}
                        click={changeFontWeight}
                        text="B"
                    />
                    <TextStyle
                        style={{
                            fontFamily: 'sans',
                            fontStyle: 'italic',
                            backgroundColor: isClickedItalic
                                ? '#c2c2c2'
                                : '#000',
                            color: isClickedItalic ? '#000' : '#fff',
                            padding: '10px 18px',
                        }}
                        value="italic"
                        click={changeFontStyle}
                        text="I"
                    />
                    <TextStyle
                        style={{
                            fontFamily: 'sans',
                            textDecoration: 'underline',
                            backgroundColor: isClickedUnderline
                                ? '#c2c2c2'
                                : '#000',
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
                    <h2>Background Color</h2>
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
                    <h2>Text Color</h2>
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
