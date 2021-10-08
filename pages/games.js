import Games from "../components/Games";
import { getGames, getImage } from "./api/api";

export default function games({ games }) {
    return (
        <>
            <Games games={games} />
        </>
    )
}

export async function getStaticProps() {
    const games = await getGames();
    return {
      props: {
        games,
      },
    }
  }