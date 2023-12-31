import PropTypes from 'prop-types'
import './style.css'

const BorderWidth = ({ change, placeholder }) => {
    return (
        <div>
            <input
                className="border"
                type="text"
                onChange={change}
                placeholder={placeholder}
            />
        </div>
    )
}

BorderWidth.propTypes = {
    change: PropTypes.func,
    placeholder: PropTypes.string,
}

export default BorderWidth
