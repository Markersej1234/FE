import {useEffect , useState} from "react"
import apiFacade from "../apiFacade"
import {Button, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Bookings = () => {
    const [bookings, setBookings] = useState();

    useEffect(()=>{
       apiFacade.getAllBookings().then(bookings => setBookings(bookings))
    },[])

    const handleRemove = (e) => {
        const bookingID = e.target.value;
        apiFacade.deleteBooking(bookingID)
        if(bookings) {const newBooking = bookings.filter((bookings) => bookings.id != bookingID);
            setBookings(newBooking)}
    };
    
    return (
        <div>
            <h1>All ingredients</h1>
            {bookings &&
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date & Time</th>
                            <th>Duration</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings.map((bookings) =>
                                <tr key={bookings.id}>
                                    <td>{bookings.id}</td>
                                    <td>{bookings.date}</td>
                                    <td>{bookings.duration}</td>
                                    
                                    <td><Button type="button" onClick={handleRemove} key={bookings.id} value={bookings.id} className="btn-danger">remove booking</Button></td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default Bookings