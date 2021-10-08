import { useState } from "react"
import { readUser, createUser } from "../pages/api/api"
import styles from "../styles/LoginForm.module.css"
import { useCookies } from "react-cookie"
import { useRouter } from "next/router"

export default function LoginForm({ signUp }) {
    const router = useRouter();
    const [cookies, setCookie] = useCookies(["token"])

    const init = {
        username: "",
        password: ""
    }

    const [credentials, setCredentials] = useState({...init})

    const changeHandler = ({ target }) => {
        setCredentials({
            ...credentials,
            [target.name]: target.value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const user = {
            ...credentials,
            session: cookies.token
        }
        if (signUp) {
            createUser(user, new AbortController().abort()).then((session) => {
                if (session) {
                    setCookie("token", session, { path: "/", maxAge: 86400 })
                    router.push("/")  
                }
            })
        } else {
            readUser(user, new AbortController().abort()).then((session) => {
                if (session) {
                    setCookie("token", session, { path: "/", maxAge: 86400 })
                    router.push("/")  
                }
            })
        }
        
    }
    return (
        <>
            <form onSubmit={submitHandler} className={styles.form}>
                <input 
                    type="text" 
                    name="username" 
                    value={credentials.username}
                    onChange={changeHandler}
                    required={true} 
                    placeholder="Username"></input>
                <input 
                    type="password" 
                    name="password" 
                    value={credentials.password}
                    onChange={changeHandler}
                    required={true} 
                    placeholder="Password"></input>
                <button className={styles.sleek} type="submit">{!signUp ? "Login" : "Register"}</button>
            </form>
        </>
    )
}