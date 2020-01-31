import React, { useEffect, useState } from "react";
import Axios from "axios";

import { DIMENSIONS } from "../../utils/constants";


export default function HighScores() {

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
      margin: "50px",
      width: DIMENSIONS.DEFAULT.WIDTH,
    }}>
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