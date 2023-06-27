import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

const SearchBar = ({handleInputChange}) =>{

    return(
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Filtra libri</Form.Label>
            <Form.Control type="text" placeholder="digita una ricerca" name="searchTerm" onChange={(e) => handleInputChange(e.target.value)} />
        </Form.Group>
    )
}

export default SearchBar;