import PropTypes from 'prop-types'
import './style.css'

const SizeButton = ({ placeholder, change }) => {
    return (
        <div>
            <input
                className="size-button"
                type="text"
                placeholder={placeholder}
                onChange={change}
            />
        </div>
    )
}

SizeButton.propTypes = {
    placeholder: PropTypes.string,
    change: PropTypes.func,
}

export default SizeButton
