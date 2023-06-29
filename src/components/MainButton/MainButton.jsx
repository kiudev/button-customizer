import PropTypes from 'prop-types'
import './style.css'

const Button = ({ text, style }) => {
    const handleCopyStyles = () => {
        const exportCSS = Object.entries(style)
            .map(([property, value]) => `${property}: ${value};`)
            .join('\n')
        navigator.clipboard.writeText(exportCSS)

        const styleElement = document.getElementById('copiedStyles')
        styleElement.textContent = exportCSS

        navigator.clipboard.writeText(exportCSS)
    }

    return (
        <div>
            <button className="copy-button" onClick={handleCopyStyles}>
                <svg viewBox="0 0 512 512" className="svgIcon" height="1em">
                    <path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path>
                </svg>
                <p className="text">COPY</p>
                <span className="effect"></span>
            </button>
            <button className="button" style={style}>
                {text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.string,
}

export default Button
