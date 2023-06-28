import PropTypes from 'prop-types'

const BorderColor = ({ style, value, click, text }) => {
    return (
        <div>
            <button
                className="bgcolor-button"
                style={style}
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

BorderColor.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.string,
    click: PropTypes.func,
}

export default BorderColor
