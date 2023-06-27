import PropTypes from 'prop-types'
import './style.css'

const TextSize = ({ change }) => {
    return (
        <div>
            <input className="text-size" type="text" onChange={change}></input>
        </div>
    )
}

TextSize.propTypes = {
    change: PropTypes.func,
    func: PropTypes.func,
    click: PropTypes.func,
}

export default TextSize
