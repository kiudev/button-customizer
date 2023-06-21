import PropTypes from 'prop-types'

const TextButton = ({ change, value }) => {
    const InputTextStyled = {
        marginTop: '30px',
        padding: '15px',
        borderRadius: '1em',
        border: '2px solid black'
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                placeholder="Write something..."
                onChange={change}
                style={InputTextStyled}
            ></input>
        </div>
    )
}

TextButton.propTypes = {
  value: PropTypes.string,
  change: PropTypes.func,
}

export default TextButton
