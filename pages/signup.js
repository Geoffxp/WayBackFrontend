import LoginForm from "../components/LoginForm";

export default function signup() {
    return (
        <>
            <h1>Please no real password, it's stored as text lol</h1>
            <LoginForm signUp={true} />
        </>
    )
}