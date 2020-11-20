import { TitleForm } from './TitleForm';

/*export const FormAddItem = styled(Box).attrs({ as: 'form' })`
    width:50vw;
    height:450px;
    display: flex;
    flex-direction: column;
    padding:30px 50px;
`;
*/
import './style.css'
import { Add } from './AddSection';
import { Remove } from './RemoveSection';
import Title from '../Title';

function FormItem({ onChangeAdd, onChangeRemove, addItem, removeItem, valueAdd, valueRemove }) {
    return (
        <div className="formItem">
            <Title color="#f00" value="Your Shopping List" >Your Shopping List</Title>
            <Add value={valueAdd} onChangeAdd={onChangeAdd} addItem={addItem} />
            <Remove value={valueRemove} onChangeRemove={onChangeRemove} removeItem={removeItem} />
        </div>
    )
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