"use client";
import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './FireBase';

function Dashboard(props) {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    const handleSignOut = async () => {
        await signOut(auth);
        alert("user signed out!");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <h2> welcome {user.email} </h2>
                    <button onClick={handleSignOut}>Sign out </button>
                    {/* <MainScreen /> */}
                </div>
            ) : (
                <div>
                    <h2> Sign in or signUp</h2>
                    <SignIn />
                    <SignUp />
                </div>
            )}
        </div>
    );
}

export default Dashboard;