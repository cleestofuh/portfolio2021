export default function Button(props) {
    return (
    <button active={props.active} className={props.className} onClick={props.onClick}>
        {props.buttonName}
    </button>
    );
}

