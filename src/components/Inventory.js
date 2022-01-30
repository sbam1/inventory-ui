import {Container, Table} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import InventoryService from "../services/InventoryService";

export default function Inventory() {

    const [brands, setBrands] = useState([]);
    const [currentBrand, setCurrentBrand] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        retrieveTutorials();
    }, []);


    const retrieveTutorials = () => {
        InventoryService.getAllBrands()
            .then(response => {
                setBrands(response.data.brands);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {
                    brands.map(
                        brand =>
                            <tr key = {brand.id}>
                                <td> { brand.id} </td>
                                <td> {brand.name}</td>
                                <td> {brand.description}</td>
                                {/*<td>*/}
                                {/*    <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>*/}
                                {/*    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>*/}
                                {/*    <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>*/}
                                {/*</td>*/}
                            </tr>
                    )
                }
                </tbody>

            </Table>
        </Container>
    );
}
