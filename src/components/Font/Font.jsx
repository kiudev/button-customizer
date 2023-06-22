import PropTypes from 'prop-types'
import './style.css'

const Font = ({ click, value, text, style }) => {
    return (
        <div>
            <button
                className="font"
                style={style}
                onClick={click}
                value={value}
            >
                {text}
            </button>
        </div>
    )
}

Font.propTypes = {
    value: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.string,
    click: PropTypes.func,
}

export default Font
