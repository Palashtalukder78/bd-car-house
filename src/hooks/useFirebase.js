import firebaseAuthentication from "../components/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import swal from 'sweetalert';
import { useEffect, useState } from "react";
firebaseAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const createUser = (email, password, displayName, history, location) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                //update userName
                const newUser = { email, displayName: displayName }
                setUser(newUser)
                //insert userInfo in database
                saveUser(email, displayName, "POST")
                updateProfile(auth.currentUser, {
                    displayName: displayName
                }).then(() => {
                    console.log("update User");
                }).catch((error) => {
                    console.log(error.message);
                });
                const redirect_url = location?.state?.from || '/home'
                history.replace(redirect_url)
                swal("Welcome", "Account Create Successfully", "success");
            })
            .catch((error) => {
                console.log(error.message);
                swal("!", "Something went", "error");
            })
            .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email: email, displayName: displayName, role: "customer" }
        fetch('https://agile-woodland-06952.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
    }
    const loginUser = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const redirect_url = location?.state?.from || '/dashboard'
                history.replace(redirect_url)
                swal("Welcome", "Login Successfully", "success");
            })
            .catch((error) => {
                swal("!", "Something went", "error");
                console.log(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [auth])

    //Check admin
    useEffect(() => {
        fetch(`https://agile-woodland-06952.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    const logOut = (history) => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            swal("Good Job", "Logout Successfully complete", "success");
            history.replace('/home')
        }).catch((error) => {
            console.log(error.message);
            swal("!", "Something went", "error");
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        admin,
        createUser,
        loginUser,
        logOut,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;