import { TitleListing } from './TitleListing';
import './style.css'
import List from './List';

function Listing({ items = [] }) {
    return <div className="listing">
        <TitleListing value="Listing" />
        <List items={items} />
    </div>
}

export default Listing;
