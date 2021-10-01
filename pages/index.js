import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getGamer, readUser } from "./api/utils/api";

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [gamer, setGamer] = useState({})
  const [logStatus, setLogStatus] = useState(false);

  const handleLogout = () => {
    removeCookie('token')
    setLogStatus(false)
  }
  
  useEffect(() => {
    getGamer(cookies.token).then((res) => {
      if (res) {
        setGamer(res);
        setLogStatus(true);
      } else {
        setGamer({});
        setLogStatus(false)
      }
    })
  }, [])

  return (
    <>
      <h1>Welcome home {(logStatus) ? gamer.username : "gamer"}</h1>
      <button onClick={handleLogout}>LOGOUT</button>
    </>
  )
}
