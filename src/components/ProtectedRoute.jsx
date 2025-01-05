import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../utils/useAuth";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    const location = useLocation()
    console.log(location);
    const { user } = useAuth();
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login" />
};
ProtectedRoute.propTypes = {
    children: PropTypes.node,
}
export default ProtectedRoute;