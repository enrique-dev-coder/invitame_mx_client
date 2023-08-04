import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

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

AddUserModal.propTypes = {
  closeModal: PropTypes.any,
  showModal: PropTypes.any
};

export default AddUserModal;
