import PropTypes from 'prop-types'

const BorderRadius = ({ change, placeholder }) => {
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

BorderRadius.propTypes = {
    change: PropTypes.func,
    placeholder: PropTypes.string,
}

export default BorderRadius
