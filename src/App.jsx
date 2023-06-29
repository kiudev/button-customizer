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
import BorderColor from './components/Border/BorderColor'
import BorderWidth from './components/Border/BorderWidth'
import BorderRadius from './components/Border/BorderRadius'

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
    const [textColor, setTextColor] = useState('')

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
    const [textSize, setTextSize] = useState('0')
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

    // * BORDER

    // * BORDER COLOR
    const [borderColorButton, setBorderColorButton] = useState('')

    const changeBorderColor = borderColor => {
        setBorderColorButton(borderColor.target.value)
    }

    // * BORDER WIDTH
    const [borderWidthInput, setBorderWidthInput] = useState(0)

    const changeBorderWidth = borderWidth => {
        setBorderWidthInput(borderWidth.target.value)
    }

    // * BORDER RADIUS
    const [borderRadiusInput, setBorderRadiusInput] = useState(0)

    const changeBorderRadius = borderRadius => {
        setBorderRadiusInput(borderRadius.target.value)
    }

    // * FONT
    const [font, setFont] = useState('sans')

    const changeFont = fonts => {
        setFont(fonts.target.value)
    }

    return (
        <main>
            <header>
                <MainButton
                    text={value}
                    style={{
                        fontFamily: font,
                        backgroundColor: bgColor,
                        color: textColor,
                        fontWeight: isBold ? 'normal' : 'bold',
                        fontStyle: isItalic ? 'normal' : 'italic',
                        textDecoration: isUnderline ? 'none' : 'underline',
                        fontSize: textSize,
                        width: widthButton,
                        height: heightButton,
                        borderColor: borderColorButton,
                        borderWidth: borderWidthInput,
                        borderRadius: borderRadiusInput,
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
                        <h3>Set the width and height</h3>
                        <div
                            style={{
                                display: 'flex',
                                placeContent: 'center',
                                gap: '5px',
                            }}
                        >
                            <SizeButton
                                placeholder="width"
                                change={changeWidth}
                            />
                            <SizeButton
                                placeholder="height"
                                change={changeHeight}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'block' }}>
                        <h3>Write and set the size</h3>
                        <div className="text-container">
                            <TextButton change={writeText} placeholder="text" />
                            <TextSize
                                change={changeTextSize}
                                placeholder="size"
                            />
                        </div>
                    </div>
                    <div style={{ display: 'block' }}>
                        <h3>Border width and radius</h3>
                        <div className="text-container">
                            <BorderWidth
                                change={changeBorderWidth}
                                placeholder="width"
                            />
                            <BorderRadius
                                change={changeBorderRadius}
                                placeholder="radius"
                            />
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
                    <div className="text-container">
                        <input
                            style={{
                                fontSize: '18px',
                                width: '100px',
                                height: '30px',
                                marginTop: '20px',
                                outline: 'none',
                                border: '2px solid transparent',
                                borderRadius: '0.5em',
                                textAlign: 'center',
                            }}
                            type="text"
                            value={font}
                            onChange={changeFont}
                        />
                    </div>
                </section>
            </header>
            <div className="line"></div>
            <section>
                <header>
                    <h2>Background</h2>
                </header>
                <section className="container">
                    <div className="container-responsive">
                        <BackgroundColor
                            style={{ backgroundColor: 'black' }}
                            value="black"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'blue' }}
                            value="blue"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'green' }}
                            value="green"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'grey' }}
                            value="grey"
                            click={changeBackground}
                        />
                    </div>
                    <div className="container-responsive">
                        <BackgroundColor
                            style={{ backgroundColor: 'orange' }}
                            value="orange"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'purple' }}
                            value="purple"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'red' }}
                            value="red"
                            click={changeBackground}
                        />
                        <BackgroundColor
                            style={{ backgroundColor: 'yellow' }}
                            value="yellow"
                            click={changeBackground}
                        />
                    </div>
                    <div className="container-responsive">
                        <BackgroundColor
                            style={{ backgroundColor: 'white' }}
                            value="white"
                            click={changeBackground}
                        />
                        <input
                            className="custom-color"
                            type="color"
                            onChange={changeBackground}
                        />
                    </div>
                </section>
                <header>
                    <h2>Text</h2>
                </header>
                <section className="container">
                    <div className="container-responsive">
                        <TextColor
                            style={{ backgroundColor: 'black' }}
                            value="black"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'blue' }}
                            value="blue"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'green' }}
                            value="green"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'grey' }}
                            value="grey"
                            click={changeText}
                        />
                    </div>
                    <div className="container-responsive">
                        <TextColor
                            style={{ backgroundColor: 'orange' }}
                            value="orange"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'purple' }}
                            value="purple"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'red' }}
                            value="red"
                            click={changeText}
                        />
                        <TextColor
                            style={{ backgroundColor: 'yellow' }}
                            value="yellow"
                            click={changeText}
                        />
                    </div>
                    <div className="container-responsive">
                        <TextColor
                            style={{ backgroundColor: 'white' }}
                            value="white"
                            click={changeText}
                        />
                        <input
                            className="custom-color"
                            type="color"
                            onChange={changeText}
                        />
                    </div>
                </section>
                <header>
                    <h2>Border</h2>
                </header>
                <section className="container">
                    <div className="container-responsive">
                        <BorderColor
                            style={{ backgroundColor: 'black' }}
                            value="black"
                            click={changeBorderColor}
                        />
                        <BorderColor
                            style={{ backgroundColor: 'blue' }}
                            value="blue"
                            click={changeBorderColor}
                        />
                        <BorderColor
                            style={{ backgroundColor: 'green' }}
                            value="green"
                            click={changeBorderColor}
                        />
                        <BorderColor
                            style={{ backgroundColor: 'gray' }}
                            value="gray"
                            click={changeBorderColor}
                        />
                    </div>
                    <div className="container-responsive">
                        <BorderColor
                            style={{ backgroundColor: 'orange' }}
                            value="orange"
                            click={changeBorderColor}
                        />
                        <BorderColor
                            style={{ backgroundColor: 'purple' }}
                            value="purple"
                            click={changeBorderColor}
                        />
                        <BorderColor
                            style={{ backgroundColor: 'red' }}
                            value="red"
                            click={changeBorderColor}
                        />
                        <BorderColor
                            style={{ backgroundColor: 'yellow' }}
                            value="yellow"
                            click={changeBorderColor}
                        />
                    </div>
                    <div className="container-responsive">
                        <BorderColor
                            style={{ backgroundColor: 'white' }}
                            value="white"
                            click={changeBorderColor}
                        />
                        <input
                            className="custom-color"
                            type="color"
                            onChange={changeBorderColor}
                        />
                    </div>
                </section>
            </section>
            <Footer />
        </main>
    )
}

export default App
