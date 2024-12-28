import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../utils";
import PropTypes from "prop-types";

const FirebaseProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        name: 'Mahi',
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default FirebaseProvider;