import Link from "next/link";
import { useState } from "react";
import logo from "../public/wbwlogo.png"
import Image from "next/image";
import styles from "../styles/Nav.module.css"
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();

    const [tab, setTab] = useState(-1);

    const [cookies, setCookie, removeCookie] = useCookies(["token"])
    const handleLogout = () => {
        removeCookie("token");
        setTab(-1);
        router.reload(window.location.pathname);
    }
    return (
        <nav className={styles.nav}>
            <Link href="/"><div className={styles.row} onClick={() => setTab(-1)}>
                <Image className={styles.logo} width="75px" height="50px" src={logo} alt="logo" />
                <div className={styles.logoStack}>
                    <h1>WAYBACK</h1>
                    <h1 className={styles.logoStack2}>GAMES</h1>
                </div>
            </div></Link>
            <ul>
                <li onClick={() => setTab(0)} className={tab === 0 ? styles.active : null}><Link href="/about">About</Link></li>
                <li onClick={() => setTab(1)} className={tab === 1 ? styles.active : null}><Link href="/games">Games</Link></li>
                <li onClick={() => setTab(2)} className={tab === 2 ? styles.active : null}><Link href="/contact">Contact</Link></li>
            </ul>
            {!cookies.token ? <div className={styles.navItem}>
                <div className={styles.textStack}>
                <h2 onClick={() => setTab(-1)}><Link href="/login">&rarr;Login</Link></h2>
                <h2 onClick={() => setTab(-1)}><Link href="/signup">Sign Up&larr;</Link></h2>
                </div>
            </div> :
            <div className={styles.navItem}>
                <div className={styles.textStack}>
                <h2>Welcome back!</h2>
                <h2 onClick={handleLogout}><Link href="/">&rarr;Logout&larr;</Link></h2>
                </div>
            </div>}
        </nav>
    )
}