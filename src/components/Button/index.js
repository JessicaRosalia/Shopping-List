import "./style.css";

export function Button(props) {
    const { value, onClick } = props;

    return <button className="btn" onClick={onClick}>{value}</button>
}