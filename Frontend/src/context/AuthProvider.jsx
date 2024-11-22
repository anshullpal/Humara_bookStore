import React, { Children, createContext, useContext, useState } from 'react'

export const AuthContext=createContext()

export default function AuthProvider({Children}){
    const intialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser]=useState(
        intialAuthUser? JSON.parse(intialAuthUser): undefined
    )
    return(
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext);