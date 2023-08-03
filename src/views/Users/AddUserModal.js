import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// project import
import ModalUI from 'ui-component/ModalUI';

const AddUserModal = ({ showModal, closeModal }) => {
  return (
    <Modal
      open={showModal}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
    >
      <ModalUI title={'Agregar usuario'} closeModal={closeModal}>
        <Stack spacing={2} mt={2} direction="row" justifyContent="space-around">
          <TextField color="secondary" id="outlined-basic" label="Nombre" variant="outlined" />
          <TextField color="secondary" id="outlined-basic" label="Email" variant="outlined" />
        </Stack>
        <Stack spacing={2} mt={2} direction="row" justifyContent="space-around">
          <TextField color="secondary" id="outlined-basic" label="Teléfono" variant="outlined" />
          <TextField color="secondary" id="outlined-basic" label="Email" variant="outlined" />
        </Stack>
      </ModalUI>
    </Modal>
  );
};

export default AddUserModal;
