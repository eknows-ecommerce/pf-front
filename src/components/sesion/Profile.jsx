import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux/es/exports';
import { create } from '../../features/actions/usuarios';

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch()
 
    useEffect(() => {
        if(isLoading){
            return <div>Loading...</div>;
        }
        if(isAuthenticated){
            dispatch(create(user))
        }
    }, [dispatch, isAuthenticated, user])
    
   
    return ( 
        
        isAuthenticated && (
            <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            </div>
        )
        
    )
}