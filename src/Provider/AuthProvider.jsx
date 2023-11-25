import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosPublic from '../Hooks/useAxiosPublic.jsx'


export const AuthContext =createContext(null)
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)
    const  googleProvider = new GoogleAuthProvider();
    const axiosPublic =useAxiosPublic()
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const profileUpdate=(name,photo)=>{
        return updateProfile (auth.currentUser,{
            displayName : name ,photoURL:photo
        })
    }
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser);
              // console.log('current User', currentUser);
              
              // set accessToken 
              const userInfo={email:currentUser?.email}
          axiosPublic.post('/jwt',userInfo)
          .then(result =>{
              if(result.data.token){
                  localStorage.setItem('access-token',result.data.token)
                  setLoading(false)
              }
              else{
                  localStorage.removeItem('access-token')
                  setLoading(false)
              }
          })
             
          })
          return ()=>{
              return unSubscribe()
          }
      },[axiosPublic])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        profileUpdate,
        googleSignIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;