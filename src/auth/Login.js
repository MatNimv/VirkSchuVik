import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../styles/Login.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) history.push("/");
    }, [user, loading])

    return ( 
        <div id="loginWrapper">
            <h1>Logga In</h1>
            <div className="loginInputs">
                <div className="emailInput">
                    <p>Din Mejladress</p>
                    <input
                        type="text"
                        className="login__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Mejladress"
                    />
                </div>
                <div className="passInput">
                    <p>Ditt Lösenord</p>
                    <input

                        type="password"
                        className="login__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Lösenord"
                    />
                </div>
                <button
                    onClick={() => logInWithEmailAndPassword(email, password)}>
                    Logga In
                </button>
            </div>
        </div>
    );
}

export default Login;