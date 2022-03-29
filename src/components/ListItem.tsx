import {useState} from 'react';
import {FaDownload, FaTrash} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';
import {Wrapper} from '../styles/ListItem.styles';
import {ModalWrapper} from '../styles/Modal.styles';
import {ListItemType} from '../utils/type';

const ListItem: React.FC<ListItemType> = ({items, removeItem}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

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
            <FaDownload className="download-btn" />
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
