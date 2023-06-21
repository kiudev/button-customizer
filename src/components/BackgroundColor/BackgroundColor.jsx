import PropTypes from 'prop-types'
import './style.css'

const BackgroundColor = ({ text, click, name, value }) => {
    return (
        <div>
            <button
                className="bgcolor-button"
                type="radio"
                name={name}
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
    click: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
}

export default BackgroundColor
