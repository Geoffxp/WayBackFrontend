import Link from "next/link"

import styles from "../styles/Games.module.css"

export default function Game({ game }) {
    return (
        <Link href="/game/[id]" as={`/game/${game.game_id}`}>
            <div key={game.game_id} className={styles.gridItem}>
                <h1>{game.name}</h1>
                <img src={game.img_src} alt={game.name} />
            </div>
        </Link>
    )
}