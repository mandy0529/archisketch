import {ModalType} from '../utils/type';
import {MdClose, MdArrowForward, MdArrowBack} from 'react-icons/md';
import {FaTrash, FaDownload} from 'react-icons/fa';

const Modal: React.FC<ModalType> = ({
  items,
  setModalOpen,
  // itemId,
  // handleLeft,
  // handleRight,
}) => {
  return (
    <div>
      <div className="btn-list">
        <MdClose onClick={() => setModalOpen(false)} className="close-btn" />
        {/* <FaDownload className="download-btn" />
        <FaTrash className="delete-btn" /> */}
      </div>
      <img src={items._id} alt={items._id} />
      {/* <MdArrowBack onClick={handleLeft} className="left-btn" />
      <MdArrowForward onClick={handleRight} className="right-btn" /> */}
    </div>
  );
};

export default Modal;
