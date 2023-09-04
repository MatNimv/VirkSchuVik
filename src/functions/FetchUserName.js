import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { query, collection, getDocs, where } from "firebase/firestore";

const FetchUserName = async () => {
    
    const [user, loading, error] = useAuthState(auth);
    const currentUser = auth.currentUser;
    const [name, setName] = useState("");

    const settingUser = async () => {
        if(currentUser){
            const uid = currentUser.uid;
    
            try {
                const q = query(collection(db, "people"), where("id", "==", uid));
                const doc = await getDocs(q);
                const data = doc.docs[0].data();
                setName(data.fname);
            } catch (err) {
                alert("Ett fel uppstod när användardatan hämtades. Försök igen.");
            }
        }
    }
    

    useEffect(() => {
        settingUser();
    },[user])

    console.log(name);
    return {name, loading, error};
}

export default FetchUserName;