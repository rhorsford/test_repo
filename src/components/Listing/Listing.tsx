import {useEffect, useState} from "react";
import {Button, Table} from 'semantic-ui-react'
import AxiosService from "./../../Service/Axios/Axios.tsx";
import {Link} from 'react-router-dom';

const Listing = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const inData = (data) => {

        let {id, title, firstName, lastName} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Title', title);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
    }

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await AxiosService.findAll();
            setData(response.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const onDelete = (id) => {
        AxiosService.deleteRecord(id);
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <h2>Listings</h2>
            {loading && <div>Loading</div>}
            {!loading && (
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {data.map(item => (
                            <Table.Row key={item.id}>
                                <Table.Cell>{item.title}</Table.Cell>
                                <Table.Cell>{item.firstName}</Table.Cell>
                                <Table.Cell>{item.lastName}</Table.Cell>

                                <Table.Cell>
                                    <Link to='/user/update'>
                                        <Button onClick={() => inData(item)}>Update</Button>
                                    </Link>
                                </Table.Cell>

                                <Table.Cell>
                                    <Button onClick={() => onDelete(item.id)}>Delete</Button>
                                </Table.Cell>

                            </Table.Row>
                        ))}
                        <Table.Row>
                            <Table.Cell colSpan={5} style={{textAlign: 'center'}}><Link to='/user/create' >
                                <Button>Create New</Button>
                            </Link></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            )}
        </div>
    );
};

export default Listing;
