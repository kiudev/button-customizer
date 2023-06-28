import PropTypes from 'prop-types'
import './style.css'

const TextSize = ({ change, placeholder }) => {
    return (
        <div>
            <input
                className="text-size"
                type="text"
                placeholder={placeholder}
                onChange={change}
            ></input>
        </div>
    )
}

TextSize.propTypes = {
    change: PropTypes.func,
    placeholder: PropTypes.string,
}

export default TextSize
