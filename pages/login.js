import LoginForm from "../components/LoginForm";

export default function login() {
    return (
        <>
            <h1>Welcome back G4M3R</h1>
            <LoginForm signUp={false} />
        </>
    )
}