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

  const handleDownload = (e: any) => {
    const url = e.target.parentNode.parentNode.dataset.url;
    fetch(url, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${items._id.slice(-20)}`); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {!modalOpen ? (
        <Wrapper>
          <div data-url={items._id}>
            <img onClick={handleClick} src={items._id} alt={items._id} />
            <FaTrash
              onClick={() => removeItem(items.order)}
              className="delete-btn"
            />
            <FaDownload
              onClick={(e) => handleDownload(e)}
              className="download-btn"
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
