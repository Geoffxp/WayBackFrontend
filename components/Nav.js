import Link from "next/link";
import { useState } from "react";
import logo from "../public/wbwlogo.png"
import Image from "next/image";

import styles from "../styles/Nav.module.css"

export default function Nav() {
    const [tab, setTab] = useState(-1);
    const handleTab = (e) => {
        console.log(e)
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
            <div className={styles.navItem}>
                <div className={styles.logoStack}>
                <h2 onClick={() => setTab(-1)}><Link href="/login">&rarr;Login</Link></h2>
                <h2 onClick={() => setTab(-1)}><Link href="/signup">Sign Up&larr;</Link></h2>
                </div>
            </div>
        </nav>
    )
}