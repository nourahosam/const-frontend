
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useState } from 'react';


function CustDataGrid({
    name,
    rows,
    columns,
    setSelectionModel,
    ...otherProps
}) {

    
    const configDataGrid = {
        // field,
        type: 'datagrid',
        fullWidth: true,
        ...otherProps,
        // rows: rows,
        rows,
        columns,
        pageSize: 5,
        rowsPerPageOptions: [2],
        components:{ Toolbar: GridToolbar },
        onRowSelectionModelChange: (row)=>{
            setSelectionModel(rows[row]);
        }
    }
    return (
        <DataGrid
            {...configDataGrid}
        />
    );
}

export default CustDataGrid;