import PropTypes from 'prop-types'

const TextButton = ({ onchange }) => {
  const InputStyled = {
    marginTop: '10rem',
    padding: '15px',
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your text"
        onChange={onchange}
        style={InputStyled}
      ></input>
    </div>
  )
}

TextButton.propTypes = {
  onchange: PropTypes.string
}

export default TextButton
