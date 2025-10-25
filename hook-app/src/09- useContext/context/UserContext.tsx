import { createContext, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

type authStatus = 'checking' | 'authenticated' | 'not-authenticated'

interface UserContextProps {
    //State 
    authStatus: authStatus;
    user: User | null;
    
    //Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}: PropsWithChildren)=> {
    
    const [authStatus, setAuthStatus] = useState<authStatus>('checking')
    const [user, setUser] = useState<User | null>(null)
    
    const handleLogin = (userId: number) => {
       const user = users.find((user)=> user.id === userId);
       
       if (!user) {
         console.log(`User not found ${userId}`);
         setUser(null);
         setAuthStatus('not-authenticated');
         return false;
       }

       setUser(user);
       setAuthStatus('authenticated');
       return true;
    }

    const handleLogout = () => {
        console.log('logout');
        setAuthStatus('not-authenticated');
        setUser(null);        
    }
   
    return (
        
        <UserContext 
          value={{
            authStatus: authStatus,
            user: user,
            login: handleLogin,
            logout: handleLogout    
        }}
        >
        {children}
          </UserContext>
    );
}