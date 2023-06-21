import PropTypes from 'prop-types'

const Color = ({ text, onclick, name, value }) => {
    return (
        <div>
            <input type="radio" name={name} value={value} onClick={onclick} />
            <p htmlFor="name">{text}</p>
        </div>
    )
}

Color.propTypes = {
    text: PropTypes.string,
    onclick: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
}

export default Color
