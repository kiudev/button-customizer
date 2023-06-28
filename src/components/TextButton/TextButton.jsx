import PropTypes from 'prop-types'
import './style.css'

const TextButton = ({ change, placeholder }) => {
    return (
        <div>
            <input
                className="text-button"
                type="text"
                placeholder={placeholder}
                onChange={change}
            ></input>
        </div>
    )
}

TextButton.propTypes = {
    change: PropTypes.func,
    placeholder: PropTypes.string,
}

export default TextButton
