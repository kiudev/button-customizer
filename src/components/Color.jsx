import PropTypes from 'prop-types'

const Color = ({ text, onclick }) => {
  return (
    <div>
      <input type="radio" name="colors" onClick={onclick} />
      <label htmlFor="name">{text}</label>
    </div>
  )
}

Color.propTypes = {
  text: PropTypes.string,
  onclick: PropTypes.string,
}

export default Color
