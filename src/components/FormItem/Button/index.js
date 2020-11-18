import './style.css';

export function Button({ value, onClick }) {
    if (value === "Add") {
        return <button onClick={onClick} className="button add" >{value}</button>
    } else if (value === "Remove") {
        return <button onClick={onClick} className="button remove" >{value}</button>
    }

}
