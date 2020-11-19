import "./style.css";

export function Button(props) {
    const { value, onClick } = props;

    if (value === "Add") {
        return <button onClick={onClick} className="button add">{value}</button>
    } else if (value === "Remove") {
        return <button onClick={onClick} className="button remove">{value}</button>
    }
}
