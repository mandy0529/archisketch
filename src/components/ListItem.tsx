import {useEffect, useState} from 'react';
import {FaDownload, FaTrash} from 'react-icons/fa';
import {MdArrowBack, MdArrowForward, MdClose} from 'react-icons/md';
import {Wrapper} from '../styles/ListItem.styles';
import {ModalWrapper} from '../styles/Modal.styles';
import {ListItemType} from '../utils/type';
import Modal from './Modal';

const ListItem: React.FC<ListItemType> = ({
  items,
  removeItem,
  // order,
  // handleLeft,
  // handleRight,
  // setIndex,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [singleItem, setSingleItem] = useState('');

  const handleClick = () => {
    setModalOpen(true);
    // setIndex(order);
    // setSingleItem(items._id);
  };

  // useEffect(() => {}, [order]);
  return (
    <>
      {!modalOpen ? (
        <Wrapper>
          <div>
            <img onClick={handleClick} src={items._id} alt={items._id} />
            <FaTrash
              onClick={() => removeItem(items.order)}
              className="delete-btn"
            />
          </div>
        </Wrapper>
      ) : (
        <ModalWrapper>
          <div className="btn-list">
            <MdClose
              onClick={() => setModalOpen(false)}
              className="close-btn"
            />
          </div>
          <img src={items._id} alt={items._id} />
        </ModalWrapper>
      )}
    </>
  );
};

export default ListItem;
