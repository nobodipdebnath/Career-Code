import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {
    const{user, loading} = use(AuthContext)
    let location = useLocation();
    if(loading){
        return <div>Loading.........</div>
    }
    if(!user) {
        return <Navigate to='/signIn' state={location.pathname} replace></Navigate>
    }
    return children;
};

export default PrivetRouter;