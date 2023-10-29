import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import croppedImageURL from "../services/cropImageinURL";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={`/game/${game.id}`}>
      <Card width="100%" height="100%" borderRadius={20} overflow="hidden">
        <Image src={croppedImageURL(game.background_image)} />
        <CardBody>
          <Box marginBottom={3}>
            <CriticScore score={game.metacritic} />
          </Box>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
