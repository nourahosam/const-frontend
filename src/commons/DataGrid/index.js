
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react';


function CustDataGrid({
    name,
    rows,
    columns,
    ...otherProps
}) {



    // const rows = [
    //     { id: 1, name: 'Snow', assignedProj: 'Project 1' },
    //     { id: 2, name: 'Lannister', assignedProj: 'None' },
    //     { id: 3, name: 'Lannister', assignedProj: 'None' },
    //     { id: 4, name: 'Stark', assignedProj: 'Project 2' },
    // ];

    // const handleSelect = (ids) => {
    //     // console.log("FIELD", field)
    //     const selectedIDs = new Set(ids);
    //     const selectedRowData = rows.filter((row) => selectedIDs.has(row.id));
    //     console.log(selectedRowData);

    // }


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
        checkboxSelection: true,
        components:{ Toolbar: GridToolbar },
        // onSelectionModelChange: handleSelect
    }
    return (
        <DataGrid
            {...configDataGrid}
        />
    );
}

export default CustDataGrid;