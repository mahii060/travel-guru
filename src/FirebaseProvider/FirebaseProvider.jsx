import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../utils";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // Create a new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signing in existent user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign out user
    const signOutUser = () => {
        return signOut(auth);
    }

    // Get the currently signed-in user by setting an observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                // console.log(currentUser);
                setUser(currentUser)
                return
            }
        });

        // When unmounting the it will call the unSubscribe
        return () => unSubscribe()
    }, []);


    const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        user,
        setUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}
FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default FirebaseProvider;