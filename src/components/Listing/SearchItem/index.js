import { Button } from '../../Button';
import { LabelField } from '../../FormItem/LabelField';
import { TextField } from '../../TextField';
import './style.css';

function SearchItem({ value, searchItem, onChange }) {
    return (
        <>
            <LabelField value="Search Item:" />
            <TextField value={value} placeholder="Tomato" onChange={onChange} />
            <Button value="Search" onClick={searchItem} />
        </>
    )
}

export default SearchItem;