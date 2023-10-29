import React from "react";
import { Game } from "../hooks/useGames";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./GameDetail.css";
import croppedImageURL from "../services/cropImageinURL";

interface Props {
  games: Game[];
}

const GameDetail: React.FC<Props> = ({ games }) => {
  const { gameId } = useParams<{ gameId: string }>();
  const gameIndex = games.findIndex((game) => game.id.toString() === gameId);
  const game = games[gameIndex];
  const navigate = useNavigate();

  if (!game) {
    return (
      <>
        <div>Game not found</div>
        <button onClick={() => navigate("/")} className="game-detail-button">
          Go to Gallery
        </button>
      </>
    );
  }

  return (
    <div className="game-detail-container">
      <h1 className="game-detail-title">{game.name}</h1>

      <div className="game-detail-navigation">
        <Link to={gameIndex > 0 ? `/game/${games[gameIndex - 1].id}` : "#"}>
          {"<"}{" "}
        </Link>

        <div className="game-detail-content">
          <img
            src={croppedImageURL(game.background_image)}
            alt={game.name}
            className="game-detail-image"
          />

          <div>
            <p>Rating: {game.metacritic}</p>
            <p>Released: {game.released}</p>
            <p>Runtime: {game.playtime} hours</p>
          </div>
        </div>

        <Link
          to={
            gameIndex < games.length - 1
              ? `/game/${games[gameIndex + 1].id}`
              : "#"
          }
        >
          {">"}
        </Link>
      </div>

      <button onClick={() => navigate("/")} className="game-detail-button">
        Go to Gallery
      </button>
    </div>
  );
};

export default GameDetail;
