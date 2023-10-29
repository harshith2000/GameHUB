import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: string;
}

const CriticScore = ({ score }: Props) => {
  score = score ? score : "No Rating Available";
  const color = score > "80" ? "#68D391" : score > "60" ? "#F6E05E" : "#E53E3E";
  return (
    <Badge color={color} fontSize="15px" padding="5px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
