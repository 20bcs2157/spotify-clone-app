import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/access/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, SetToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      SetToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("", user);
      });
    }
    console.log("I HAVE TOKEN: point", token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
