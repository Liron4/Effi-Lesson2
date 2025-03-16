import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./FireBase"

const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert("user registered successfully")

        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <h2> sign Up </h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit"> Sign Up </button>
            </form>
        </div>
    )

}
export default SignUp