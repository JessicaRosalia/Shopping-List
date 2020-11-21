import './style.css';

function List({ items = [] }) {
    return <ul className="listItems">
        {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
}

export default List