import { createContext, useContext, useState } from "react";

const AuthContext = createContext(); // initialize AuthContext with createContext() hook

// initialize the AuthProvider to provide access to value properties, pass props to it's components
const AuthProvider = (props) => {
    const [user, setUser] = useState({
        userId: 1,
        fullname: "nguyen",
        email: "nguyen@gmail.com",
        avatar: "https://images.unsplash.com/photo-1695122454168-e5eae938189e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    });
    const value = { user, setUser };
    return (
        <AuthContext.Provider {...props} value={value}></AuthContext.Provider>
    );
};

// handle error if not wrapping components that useContext in it's Provider
const useAuth = () => {
    const context = useContext(AuthContext);
    if (typeof context === "undefined") {
        throw new Error("useAuth must be used within of AuthProvider");
    }
    return context;
};

export { useAuth, AuthProvider };
