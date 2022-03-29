import {Wrapper} from '../styles/ListItem.styles';
import {ListItemType} from '../utils/type';

const ListItem: React.FC<ListItemType> = ({items, singleItem}) => {
  return (
    <Wrapper to="/minji">
      <div>
        <img src={items._id} alt={items._id} />
      </div>
    </Wrapper>
  );
};

export default ListItem;
