import './ModalTimeline.scss';

const ModalTimeline = ({ isOpen, closeModal, content }) => {
  return (
    isOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {content}
        </div>
      </div>
    )
  );
};

export default ModalTimeline;
