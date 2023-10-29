import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../main";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const url = `${URL}/auth/loggedIn`;
    const [loggedIn, setLoggedIn] = useState(undefined);
    const getLoggedIn = async () => {
        const loggedInRes = await axios.get(url);
        setLoggedIn(loggedInRes.data);
    };

    useEffect(() => {
        getLoggedIn();
    }, []);
    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
export { AuthContextProvider };
