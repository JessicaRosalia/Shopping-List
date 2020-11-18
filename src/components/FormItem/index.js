import { Button } from './Button';
import { TextField } from './TextField';
import { TitleForm } from './TitleForm';
import { LabelField } from './LabelField';


/*export const FormAddItem = styled(Box).attrs({ as: 'form' })`
    width:50vw;
    height:450px;
    display: flex;
    flex-direction: column;
    padding:30px 50px;
`;
*/
import './style.css'

function FormItem({ addItem, onChange, value }) {
    return <div className="formItem">
        <TitleForm value="Your Shopping List" />
        <LabelField value="Add new Item:" />
        <TextField value={value} placeholder=" Milk" onChange={onChange} />
        <Button value="Add" onClick={addItem} />
    </div>
}

export default FormItem;

/*export const ButtonAdd = styled(GenericButton).attrs({ as: 'button' })`
    background-color: #82C762;
    color:#F4F4F4;
    margin-bottom:50px;
`;


export const ButtonRemove = styled(GenericButton).attrs({ as: 'button' })`
    background-color: #f00;
    color:#F4F4F4;
`;


<LabelField value="Remove Item:" />
        <TextField value={value} placeholder=" Apple" onChange={onChange} />
        <Button value="Remove" onClick={removeItem} />

*/