import {useEffect , useState} from "react"
import apiFacade from "../apiFacade"
import {Button, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Assitants = () => {
    const [assistants, setAssistants] = useState();

    useEffect(()=>{
       apiFacade.getAllAssistants().then(assistants => setAssistants(assistants))
    },[])

    
    return (
        <div>
            <h1>All Assistants</h1>
            {assistants &&
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Experience</th>
                            <th>Price per hour</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {assistants &&
                            assistants.map((assistants) =>
                                <tr key={assistants.id}>
                                    <td>{assistants.id}</td>
                                    <td>{assistants.name}</td>
                                    <td>{assistants.language}</td>
                                    <td>{assistants.experience}</td>
                                    <td>{assistants.pricePerHour}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </Table>
            }
        </div>
    )
}

export default Assitants