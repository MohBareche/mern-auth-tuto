import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { URL } from "../../main";


const LogOutBtn = () => {
    const { getLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const logOut = async () => {
        const url = `${URL}/auth/logout`;
        await axios.get(url);
        await getLoggedIn();
        navigate("/");
    };
    return <button className="btn btn-info" onClick={logOut}>Logout</button>;
};

export default LogOutBtn;
