import React, { useContext, useEffect, useState } from "react";

import Paddle from "../Paddle";
import Ball from "../Ball";
import Brick from "../Brick";
import HighScores from "../HighScores";

import { GameContext } from "../../state/context";
import { DIMENSIONS } from "../../utils/constants";
import Score from "../Score";
import Lives from "../Lives";
import Axios from "axios";

export default function GameContainer() {
  const { state } = useContext(GameContext);


  const [highScores, setHighScores] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/v1/high-scores")
      .then(res => {
        console.log(res.data.HighScores)
        setHighScores(res.data.HighScores)
      })
  }, [])

  return (
    <>
    {state.isPlaying && <div
      className= "container"
      style={{
        width: DIMENSIONS.DEFAULT.WIDTH,
        height: DIMENSIONS.DEFAULT.HEIGHT
      }}
    >
      {state.bricks.map(brick => (
        <Brick key={brick.id} {...brick} />
      ))}

      <Paddle paddleX={state.paddle.x} />
      <Ball pos={state.ball} />
      <Score />
      <Lives />
      <Score />
    </div>}
    {!state.isPlaying && <HighScores /> }
    </>
  );
}
