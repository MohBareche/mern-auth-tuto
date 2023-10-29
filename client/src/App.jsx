import "./App.css";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import AuthContext from "./context/AuthContext";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Customers from "./components/customers/Customers";
import Navbar from "./components/layout/Navbar";


axios.defaults.withCredentials = true;

function App() {
    const { loggedIn } = useContext(AuthContext);
    return (
        <>
            <BrowserRouter>
                <div className="container">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />}>
                            Home
                        </Route>
                        {loggedIn === false && (
                            <>
                                <Route path="/login" element={<Login />}>
                                    Login
                                </Route>
                                <Route path="/register" element={<Register />}>
                                    Register
                                </Route>
                            </>
                        )}
                        {loggedIn === true && (
                            <>
                                <Route path="/customer" element={<Customers />}>
                                    Customers
                                </Route>
                            </>
                        )}
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
