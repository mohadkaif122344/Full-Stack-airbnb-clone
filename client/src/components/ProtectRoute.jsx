import { useContext } from 'react';
import { authDataContext } from '../context/Authcontext';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({children}) => {

    const {userData, loading} = useContext(authDataContext)
    
    if (loading) {
        return <div>loading...</div>
    }
    if (!userData) {
        return <Navigate to='/login' replace />
        
    }
    return children;
}
export default ProtectRoute;
