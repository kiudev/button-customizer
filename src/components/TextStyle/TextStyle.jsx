import PropTypes from 'prop-types'
import './style.css'

const TextStyle = ({ click, value, text, style }) => {
    return (
        <div>
            <button
                className="text-style"
                style={style}
                onClick={click}
                value={value}
            >
                {text}
            </button>
        </div>
    )
}

TextStyle.propTypes = {
    value: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.string,
    click: PropTypes.func,
}

export default TextStyle
