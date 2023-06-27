import PropTypes from 'prop-types'
import './style.css'

const TextButton = ({ change, value }) => {
    return (
        <div>
            <input
                className="text-button"
                type="text"
                value={value}
                placeholder="Write something..."
                onChange={change}
            ></input>
        </div>
    )
}

TextButton.propTypes = {
    style: PropTypes.string,
    value: PropTypes.string,
    change: PropTypes.func,
}

export default TextButton
