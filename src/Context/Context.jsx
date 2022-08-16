import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,
        onAuthStateChanged,sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";

export const Context = createContext({});

export const ContextProvider = ({children}) => {

    //----------Estados para usuarios y cierre de sesión-------------------------------
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // registro del usuario
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // cerrar sesión
    const logout = () => signOut(auth);

    // entrar con el usuario creado
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // resetear la contraseña
    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        
    });
    return () => unsubuscribe();
    
    }, []);




    return (
        <Context.Provider value={{signup, login, logout, resetPassword, user, loading }}>
            {children}
        </Context.Provider>
    )
}