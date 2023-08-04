import { useState } from 'react';
// mui import
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// project import
import ModalUI from 'ui-component/ModalUI';
import useUsers from 'hooks/useUsers';

// utils import
import { handleChange } from 'utils/forms';

const AddUserModal = ({ showModal, closeModal, invitations }) => {
  // dropdown options
  const options = invitations.map((item) => ({ label: item.nombre, id: item.link }));

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    cellphone: '',
    invitation: ''
  });
  console.log(formData);
  const handleInputChange = (e) => {
    handleChange(e, setFormData);
  };

  const [showNotification, setShowNotification] = useState(false);

  const { addUser } = useUsers();

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowNotification(false);
  };

  const onSubmitModal = () => {
    // promise linked to the result of adding data
    return addUser(formData).then(() => {
      closeModal();
      setShowNotification(true);
    });
  };

  return (
    <>
      <Modal
        open={showModal}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <ModalUI title={'Agregar usuario'} closeModal={closeModal}>
          <Stack spacing={2} mt={2} direction="row" justifyContent="space-around">
            <TextField
              name="nombre"
              onChange={(e) => handleInputChange(e)}
              color="secondary"
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
            />
            <TextField
              name="email"
              onChange={(e) => handleInputChange(e)}
              color="secondary"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Stack>
          <Stack spacing={2} mt={2} direction="row" justifyContent="space-around">
            <TextField
              name="cellphone"
              onChange={(e) => handleInputChange(e)}
              color="secondary"
              id="outlined-basic"
              label="Teléfono"
              variant="outlined"
            />
            <TextField color="secondary" id="outlined-basic" label="Contraseña" variant="outlined" />
          </Stack>
          <Stack mt={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              onChange={(e) => setFormData({ ...formData, invitation: e.target.textContent })}
              options={options}
              renderInput={(params) => <TextField {...params} label="Asignar Invitaciones" color="secondary" />}
            />
          </Stack>
          <Stack mt={2}>
            <Button onClick={onSubmitModal} size="medium" variant="outlined" color="secondary">
              Agregar
            </Button>
          </Stack>
        </ModalUI>
      </Modal>
      <Snackbar
        autoHideDuration={3000}
        open={showNotification}
        message="Usuario Agregado"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}
      >
        <Alert severity="info">Usuario Agregado</Alert>
      </Snackbar>
    </>
  );
};

export default AddUserModal;
