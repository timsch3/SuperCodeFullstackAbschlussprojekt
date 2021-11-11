import './button.scss'

const Button = (props) => {
    return (
        <button style={props.buttonStyle} onClick={props.onClick}>{props.name}</ button>
    );
}

export default Button;