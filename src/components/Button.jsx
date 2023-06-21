import PropTypes from 'prop-types'

const Button = ({ text, style }) => {
    return (
        <div>
            <button style={style}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.string,
}

export default Button
