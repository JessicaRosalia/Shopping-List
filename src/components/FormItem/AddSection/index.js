import { Button } from "../../Button";
import { LabelField } from "../LabelField";
import { TextField } from "../../TextField";

export function Add({ value, onChangeAdd, addItem }) {
    return (
        <>
            <LabelField value="Add new Item:" />
            <TextField value={value} placeholder="Milk" onChange={onChangeAdd} />
            <Button value="Add" onClick={addItem} />
        </>
    )
}