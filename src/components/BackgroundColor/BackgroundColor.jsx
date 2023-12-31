import PropTypes from 'prop-types'
import './style.css'

const BackgroundColor = ({ text, click, value, style }) => {
    return (
        <div>
            <button
                className="bgcolor-button"
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

BackgroundColor.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.string,
    click: PropTypes.func,
}

export default BackgroundColor
