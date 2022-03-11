import { createContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const userData = localStorage.getItem('user');
        
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;