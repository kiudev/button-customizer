import PropTypes from 'prop-types'

const TextButton = ({ onchange, value }) => {
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
                placeholder="Enter your text"
                onChange={onchange}
                style={InputTextStyled}
            ></input>
        </div>
    )
}

TextButton.propTypes = {
    onchange: PropTypes.string,
    value: PropTypes.string,
}

export default TextButton
