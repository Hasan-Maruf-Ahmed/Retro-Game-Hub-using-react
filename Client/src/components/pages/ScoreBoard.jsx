import axios from "axios";
import { useEffect, useState } from "react";
import "./scoreboard.css";

export const ScoreBoard = () => {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/getscores")
      .then((scores) => setScores(scores.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="table-container">
      <table className="content-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) => {
            return (
              <tr key={score}>
                <td>{score.username}</td>
                <td>{score.email}</td>
                <td>{score.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
