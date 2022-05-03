import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import _ from 'lodash';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';


const GET_EMPLOYEES = gql`
   {
        employees {
            id:_id
            name
            lastName
            email
            nationality
            phone
            civilStatus
            birthday
        }
   }
`;



const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 150,
    }, {
        field: 'name',
        headerName: 'Name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 110,
    },
    {
        field: 'nationality',
        headerName: 'Nationality',
        width: 150,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 150,
    },
    {
        field: 'civilStatus',
        headerName: 'Civil Status',
        width: 150,
    },
    {
        field: 'birthday',
        headerName: 'Birthday',
        width: 150,
    }

];


export default function DataGridDemo() {
    const [rows, setRows] = React.useState([]);
    const { loading, error, data } = useQuery(GET_EMPLOYEES);
    const [filterRows, setFilterRows] = React.useState([]);
    const debounceFilter = React.useCallback(_.debounce(search, 3000), [rows]);

    React.useEffect(() => {
        if (data && data.employees) {
            setRows(data.employees)
            setFilterRows(data.employees)
        }

    }, [data])

    function search(inputValue) {
        console.log(rows)
        if (inputValue === '') {
            setFilterRows(rows);
        } else {
            setFilterRows(_.filter(rows, function (row) {

                if (row.id == inputValue ||
                    row.name.toUpperCase().includes(inputValue.toUpperCase()) ||
                    row.lastName.toUpperCase().includes(inputValue.toUpperCase()) ||
                    row.email.toUpperCase().includes(inputValue.toUpperCase()) ||
                    row.nationality.toUpperCase().includes(inputValue.toUpperCase()) ||
                    row.phone.toUpperCase().includes(inputValue.toUpperCase()) ||
                    row.civilStatus.toUpperCase().includes(inputValue.toUpperCase()) ||
                    row.birthday.toUpperCase().includes(inputValue.toUpperCase())) {
                    return true;
                }
                else {
                    return false;
                }

            }));
        }
    }



    const changeInputSearch = (event) => {
        debounceFilter(event.target.value);
    }

    const edit = () => {

    }

    if (loading)
        return (
            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }} > <Grid item xs={3}>  <Box sx={{ m: 100 }}>
                <CircularProgress />
            </Box> </Grid> </Grid>
        )

    if (error) return <p>Error</p>

    return (

        <Container sx={{ mt: 10, ml: 30 }}>
            <div style={{ height: 630, width: '100%' }}>
                <TextField fullWidth sx={{ mb: 5, mt: 2 }} color="primary" id="search" label="Search" name="search" type="search" onChange={(e) => changeInputSearch(e)} />

                <DataGrid
                    rows={filterRows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                    onRowDoubleClick={() => edit()}

                />

            </div>
        </Container>

    );
}
