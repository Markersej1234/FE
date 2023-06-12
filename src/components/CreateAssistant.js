import React, {useRef, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import apiFacade from "../apiFacade";


const CreateAssistant = () => {
    const initialState = {name: "" , language: "", experience: "", pricePerHour: ""};
    const [assistants, setAssistants] = useState(initialState);
   

    const handleSubmit = (e) => {
        e.preventDefault();
        apiFacade.createAssistant(assistants).then(response =>{
            setAssistants(initialState);
        })

    }

    return (
        <Container className="shadow-lg p-3 mb-5 bg-white rounded mt-5">
            <h2 className={"text-center" }>Add New Assistant</h2>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => setAssistants({...assistants, name: e.target.value})} required type="text" value={assistants.name}  placeholder="Name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="language">
                    <Form.Label>Language</Form.Label>
                    <Form.Control onChange={(e) => setAssistants({...assistants, language: e.target.value})} required type="text" value={assistants.language}  placeholder="Language" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="experience">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control onChange={(e) => setAssistants({...assistants, experience: e.target.value})} required type="text" value={assistants.experience}  placeholder="Experience" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pricePerHour">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control onChange={(e) => setAssistants({...assistants, pricePerHour: e.target.value})} required type="text" value={assistants.pricePerHour}  placeholder="PricePerHour" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Create assistant
                </Button>

            </Form>

        </Container>
    );
};

export default CreateAssistant;