import React, {useEffect, useState} from "react";
import firebase from '../firebase';
import Loading from "../components/Loading";


export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(currentUser);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return <h1>Laddar användare...</h1>
    }
    return (
        <AuthContext.Provider
            value={{currentUser,}}>
                {children}
        </AuthContext.Provider>
    )
}

