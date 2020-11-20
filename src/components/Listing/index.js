import { TitleListing } from './TitleListing';
import './style.css'
import List from './List';
import SearchItem from './SearchItem';

function Listing({ onChange, searchItem, items = [] }) {
    return (
        <div className="listing">
            <TitleListing value="Listing" />
            <List items={items} />
            <SearchItem onChange={onChange} searchItem={searchItem} />
        </div>
    )

}

export default Listing;
