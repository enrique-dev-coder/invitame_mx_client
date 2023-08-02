import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';

const MainTable = ({ rows, columns }) => {
  return (
    <div>
      <DataGrid checkboxSelection rows={rows} columns={columns} />
    </div>
  );
};

MainTable.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array
};

export default MainTable;
