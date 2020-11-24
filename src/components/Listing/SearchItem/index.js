import { Button } from '../../Button';
import { LabelField } from '../../FormItem/LabelField';
import { TextField } from '../../TextField';
import SearchResult from '../SearchResult';
import './style.css';

function SearchItem({ value, onChange, onClick, item }) {
    return (
        <>
            <LabelField value="Search Item:" />
            <TextField value={value} placeholder="Tomato" onChange={onChange} />
            <Button value="Search" onClick={onClick}/>
            <SearchResult onClick={onClick} item={item}/>
        </>
    )
}

export default SearchItem;