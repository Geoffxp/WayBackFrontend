import styles from "../styles/Games.module.css"
import Game from "./Game"

export default function Games({ games }) {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {games.map((game) => <Game key={game.game_id} game={game} />)}
            </div>
        </div>
    )
}

