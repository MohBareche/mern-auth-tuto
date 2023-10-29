import axios from "axios";
import { useContext, useState } from "react";
import { URL } from "../../main";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault();
        const url = `${URL}/auth/register`;
        try {
            const registerData = {
                username,
                email,
                password,
                passwordVerify,
            };
          await axios.post(url, registerData);
          await getLoggedIn()
          navigate('/')
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <form onSubmit={handleRegister}>
                <h1 className="h1 text-primary">Register a new account</h1>
                <div className="mb-3">
                    <label className="form-label">Nom Utilisateur</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
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
                <div className="mb-3">
                    <label className="form-label">
                        Vérification mot de passe
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Verify Password"
                        value={passwordVerify}
                        onChange={(e) => setPasswordVerify(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary my-2" type="submit">
                    Enregistrer
                </button>
            </form>
        </div>
    );
};

export default Register;
