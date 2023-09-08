// hooks

import { InputAdornment, TextField } from '@mui/material';
import useInvitations from 'hooks/useInvitations';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import MainTable from 'ui-component/tables/MainTable';
import SearchIcon from '@mui/icons-material/Search';

// ==============================|| SAMPLE PAGE ||============================== //

const GuestsPage = () => {
  const { singleInvitation } = useInvitations();

  const columns = [
    { field: 'nombreInvitado', headerName: 'Nombre del Invitado', width: 130 },
    { field: 'telefono', headerName: 'Teléfono', width: 150 },
    { field: 'acompañante', headerName: 'Acompañante', width: 250 },
    { field: 'asistencia', headerName: 'Assitencia', width: 150 },
    { field: 'alergias', headerName: 'Alergias', width: 150 }
  ];

  const rows = singleInvitation.map((Item) => ({
    id: Item?.id,
    nombreInvitado: Item?.nombreInvitado,
    telefono: Item?.telefono,
    acompañante: Item?.acompañante,
    asistencia: Item?.asistencia,
    alergias: Item?.alergias
  }));

  return (
    <>
      <MainCard title="Lista de invitados">
        <TextField
          id="standard-basic"
          variant="standard"
          color="secondary"
          type="search"
          style={{ marginBottom: '30px', width: '300px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <MainTable rows={rows} columns={columns} />
      </MainCard>
    </>
  );
};

export default GuestsPage;
