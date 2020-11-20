import './style.css'
import List from './List';
import SearchItem from './SearchItem';
import Title from '../Title';

function Listing({ onChange, searchItem, items = [] }) {
    return (
        <div className="listing">
            <Title value="Listing" />
            <List items={items} />
            <SearchItem onChange={onChange} searchItem={searchItem} />
        </div>
    )

}

export default Listing;
