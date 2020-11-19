import { Button } from '../../Button'
import { LabelField } from '../LabelField'
import { TextField } from '../TextField'


export function Remove({ value, onChangeRemove, removeItem }) {
    return (
        <>
            <LabelField value="Remove Item:" />
            <TextField value={value} placeholder="Apple" onChange={onChangeRemove} />
            <Button value="Remove" onClick={removeItem} />
        </>
    )
}
