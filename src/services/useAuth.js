import { useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,

  } from "firebase/auth";


export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();
  

    useEffect(() =>{

        onAuthStateChanged(auth,(user) =>{
            if(user) {

                setIsAuthenticated(true)
                return
            }
            setIsAuthenticated(false)
            console.log("Auth called")
            return
        })
    },[setIsAuthenticated, auth])

    const createEmailuser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const signInEmailUser = (email,password) => signInWithEmailAndPassword(auth, email, password)

    const signUserOut = () => signOut(auth)
      
    return { isAuthenticated, createEmailuser, signInEmailUser, signUserOut };

  }
     
export default useAuth;
