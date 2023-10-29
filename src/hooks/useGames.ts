import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genre } from "./useGenres";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: string;
  released: string;
  playtime: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (selectedGenre: Genre | null, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal, ...requestConfig})
      .then((res) => { 
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

      return () => controller.abort();
      // eslint-disable-next-line
  }, deps ? [...deps] : []);

  return {games, error, isLoading};
}

export default useGames;