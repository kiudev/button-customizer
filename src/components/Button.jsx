import PropTypes from 'prop-types'

const Button = ({ text, bgColor }) => {
  return (
    <div>
      <button style={bgColor}>{text}</button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string
}

export default Button
