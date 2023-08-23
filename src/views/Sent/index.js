import { useState } from 'react';
import { useSelector } from 'react-redux';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import MainTable from 'ui-component/tables/MainTable';
// mui imports
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

import { httpUploadCsv } from 'hooks/requests';

const SentPage = () => {
  const theme = useTheme();
  const [tableData, setTableData] = useState([]);
  const user = useSelector((state) => state.auth.user);

  const handleFileChange = (e) => {
    httpUploadCsv(e.target.files[0]).then((response) => setTableData(response));
  };

  // https://invitamemx.com/bodagusyanabell/?inv=Ernesto%20P%C3%A9rez%20%20y%20Ma.%20del%20Carmen

  const SendButton = () => {
    const handleClick = (e) => {
      e.stopPropagation(); // Evita que el evento se propague y seleccione la fila
    };
    return (
      <Button variant="text" color="secondary" onClick={handleClick}>
        <SendIcon />
      </Button>
    );
  };

  const columns = [
    { field: 'Invitado', headerName: 'Nombre del Invitado', width: 130 },
    { field: 'Pases', headerName: 'Pases', width: 60 },
    { field: 'link', headerName: 'Invitacion', width: 600 },
    { field: 'enviar', headerName: 'Enviar', renderCell: () => <SendButton /> }
  ];

  const rows = tableData.map((Item, i) => ({
    id: i,
    Invitado: Item?.Invitado,
    Pases: Item?.Pases,
    link: `https://invitamemx.com/${user.invitation}?pases=${Item?.Pases}&inv=${encodeURIComponent(Item?.Invitado)}`
  }));

  return (
    <>
      {tableData.length === 0 ? (
        <Box>
          <MainCard
            sx={{
              position: 'relative',
              height: '80vh',
              border: '4px solid',
              borderColor: `${theme.palette.secondary.main}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <input
              onChange={handleFileChange}
              type="file"
              accept=".csv"
              style={{ width: '100%', height: '80vh', position: 'absolute', top: 0, left: 0, opacity: 0 }}
            />
            <Typography>Arrastra tu archivo .csv aquí</Typography>
            <Typography>Puedes usar un excel o un google sheet</Typography>
            <Typography>Selecciona el Archivo</Typography>
          </MainCard>
        </Box>
      ) : (
        <MainCard title="Envia tu invitacion">
          <MainTable rows={rows} columns={columns} />
        </MainCard>
      )}
    </>
  );
};
export default SentPage;
