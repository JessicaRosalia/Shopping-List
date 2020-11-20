import './style.css';

export function TextField({ placeholder, onChange, value }) {
    return <input value={value} onChange={onChange} className="field" type="text" placeholder={placeholder} />
}

