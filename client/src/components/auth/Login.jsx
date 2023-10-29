import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../../main";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { getLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleError = (err) => {
        toast.error(err, {
            position: "top-center",
        });
    };

    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: "top-center",
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const url = `${URL}/auth/login`;
        try {
            const loginData = { email, password };
            const data = await axios.post(url, loginData, {
                withCredentials: true,
            });
            await getLoggedIn();

            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => navigate("/"), 3000);
            } else {
                handleError(message)
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1 className="h1 text-success">Login</h1>

                <div className="mb-3">
                    <label className="form-label">Courriel</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mot de passe</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-success my-2" type="submit">
                    Se connecter
                </button>
            </form>
        </div>
    );
};

export default Login;
