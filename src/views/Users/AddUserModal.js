import Modal from '@mui/material/Modal';

// project import
import ModalUI from 'ui-component/ModalUI';

const AddUserModal = ({ showModal, closeModal }) => {
  return (
    <Modal
      open={showModal}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
    >
      <ModalUI title={'Agregar usuario'} closeModal={closeModal} />
    </Modal>
  );
};

export default AddUserModal;
