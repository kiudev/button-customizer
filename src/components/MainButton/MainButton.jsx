import PropTypes from 'prop-types'
import './style.css'

const Button = ({ text, style }) => {
    return (
        <div>
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
