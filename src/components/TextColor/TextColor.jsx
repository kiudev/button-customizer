import PropTypes from 'prop-types'
import './style.css'

const TextColor = ({ value, click, text, style }) => {
    return (
        <div>
            <button
                className="textcolor-button"
                style={style}
                type="radio"
                value={value}
                onClick={click}
            >
                {text}
            </button>
        </div>
    )
}

TextColor.propTypes = {
    value: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.string,
    click: PropTypes.func,
}

export default TextColor
