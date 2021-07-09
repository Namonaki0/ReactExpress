import React, { Component } from "react";
import "./games.css";

class Games extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    fetch("/api/games")
      .then((res) => res.json())
      .then((games) =>
        this.setState({ games }, console.log("games fetched", games))
      );
  }

  render() {
    return (
      <div>
        <h1>GAMES</h1>
        <ul>
          {this.state.games.map((game) => (
            <li key={game.id}>
              {game.name} is property of {game.company}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Games;
