import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";

import { DIMENSIONS } from "../../utils/constants";
import { GameContext } from "../../state/context";
import { START_GAME } from "../../state/actions";


export default function HighScores() {
  const {state, dispatch, actions} = useContext(GameContext)
  const [highScores, setHighScores] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/v1/high-scores")
      .then(res => {
        console.log(res.data.HighScores)
        setHighScores(res.data.HighScores)
      })
  }, [])

  return (
    <div style={{
      margin: "40px auto",
      width: DIMENSIONS.DEFAULT.WIDTH,
    }}>
      <button style ={{
        background: "rebeccapurple",
        padding: "10px 12px 8px",
        borderRadius:"4px",
        color:"#fff"
      }}
      onClick={() => dispatch({
        type: START_GAME
      })}
      >START</button>
      <h1>High Score</h1>
      <ol>
        {highScores.map(({ initials, score }) => (
          <li key={initials}>
            {initials}: {score}
          </li>
        ))}
      </ol>
    </div>
  );
}