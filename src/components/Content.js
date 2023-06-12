import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../routes/Home";
import Navbar from "../navbar/Navbar";
import LoginForm from "../components/LoginForm";
import { ToastContainer, toast } from 'react-toastify';
import Frontpage from './Frontpage';
import CreateAssistant from './CreateAssistant';
import Bookings from './Bookings';
import Assitants from './Assistants';


const Content = ({ loggedIn,login,user,logout}) => {
    return (
        <Router>
            <Navbar user={user} loggedIn={loggedIn} login={login} logout={logout}/>
            <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
            <Routes>
                <Route path="/login" element={<LoginForm login={login}/>}/>
                <Route path="/frontpage" element={<Frontpage/>}/>
                <Route path="/bookings"element={<Bookings/>} />
                <Route path="/assistants"element={<Assitants/>} />
                <Route path="/CreateAssistant" element={<CreateAssistant/>}/>

            </Routes>
           
        </Router>
        
  )
}

export default Content
