import { useState } from 'react';

// mui imports
// import { Grid, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// import MuiTypography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import MainTable from 'ui-component/tables/MainTable';
import AddUserModal from './AddUserModal';

// hooks

import useUsers from 'hooks/useUsers';

const Users = () => {
  const { users } = useUsers();
  // here add the columns to the table of users
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre de usuario', width: 130 },
    { field: 'cellphone', headerName: 'Teléfono' },
    { field: 'email', headerName: 'Email' },
    { field: 'invites', headerName: 'Invitaciones suscritas', width: 250 }
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
    // }
  ];

  const [modal, setModal] = useState(false);

  // rows example according to docs
  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  // ];

  const rows = users.map((items) => ({
    id: items.id.S,
    nombre: items.nombre.S,
    email: items?.email?.S,
    cellphone: items?.cellphone?.S
  }));

  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="flex-end" mb={4}>
        <Button onClick={() => setModal(true)} startIcon={<PersonAddIcon />} color="secondary" variant="contained">
          Agregar Usuario
        </Button>
      </Stack>
      <MainCard title="Lista de usuarios">
        <MainTable rows={rows} columns={columns} />
      </MainCard>
      <AddUserModal showModal={modal} closeModal={() => setModal(false)} />
    </>
  );
};

export default Users;
