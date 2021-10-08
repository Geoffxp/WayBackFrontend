import { getGame, getGames } from "../../api/api";

export default function game({ game }) {
    const GAME_WIDTH = 500;
    const GAME_HEIGHT = 925;
    return (
        <iframe 
            src={game.url} 
            name="targetframe" 
            allowTransparency="true" 
            width="100%"
            height={`${GAME_HEIGHT}px`} 
            scrolling="no" 
            frameborder="0" />
    )
}

export const getStaticProps = async (ctx) => {
    const game = await getGame(ctx.params.id)
    return {
        props: {
            game
        }
    }
}

export const getStaticPaths = async () => {
    const games = await getGames();
    const ids = games.map(game => game.game_id)
    const paths = ids.map(id => ({ params: { id: id.toString() }}))
    return {
        paths,
        fallback: false
    };
}