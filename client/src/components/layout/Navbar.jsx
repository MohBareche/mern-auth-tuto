import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import LogOutBtn from "../auth/LogOutBtn";

const Navbar = () => {
    const { loggedIn } = useContext(AuthContext);
    return (
        <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "#e3f2fd" }}
        >
            <Link to="/">Home</Link>
            {loggedIn === false && (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
            {loggedIn === true && (
                <>
                    <Link to="/customer">Customers</Link>
                    <LogOutBtn />
                </>
            )}
        </nav>
    );
};

export default Navbar;
