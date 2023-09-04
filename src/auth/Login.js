import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


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
        <div className="login">
            <div id="loginWrapper">
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;