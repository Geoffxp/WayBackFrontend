import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getGamer, readUser } from "./api/api";
import Games from "../components/Games";

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [gamer, setGamer] = useState({})
  
  useEffect(() => {
    getGamer(cookies.token).then((res) => {
      if (res) {
        setGamer(res);
      }
    })
  }, [cookies])

  return (
    <>
      <h1>Welcome home {(gamer.username) ? gamer.username : "gamer"}</h1>
      
    </>
  )
}


