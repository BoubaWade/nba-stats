import React from "react";
import { Player, PlayerStats, Team } from "../components/Players/playersTypes";
import { Game, GameSearchParams } from "../components/Teams/teamsTypes";
import { sortGamesByStatus } from "../helpers/games";
import { STATUS_AFTER_GAME } from "../config/constants";

export const baseURL = "https://api.balldontlie.io/v1";
export const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
export const startSeasonDate = "2023-10-24";
export const endSeasonDate = "2024-04-14";
export const numberOfRegularSeasonGames = 82;

export const getPlayerStatsBySeason = (
  playerId: number,
  season: number,
  setPlayerStats: (value: React.SetStateAction<PlayerStats[]>) => void
) => {
  try {
    fetch(
      `${baseURL}/stats?seasons[]=${season}&player_ids[]=${playerId}&postseason=false`,
      {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => setPlayerStats(result.data));
  } catch (error) {
    console.error(error);
  }
};

export const getPlayerStats = (
  playerId: number,
  setPlayerStats: (value: React.SetStateAction<PlayerStats[]>) => void
) => {
  try {
    fetch(
      `${baseURL}/stats?seasons[]=2023&player_ids[]=${playerId}&postseason=false`,
      {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => setPlayerStats(result.data));
  } catch (error) {
    console.error(error);
  }
};

export const getAllTeams = (
  setTeams: (value: React.SetStateAction<Team[]>) => void
) => {
  try {
    fetch(`${baseURL}/teams`, {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((result) => setTeams(result.data));
  } catch (error) {
    console.error(error);
  }
};

export const getAllGames = (
  startDate: string,
  endDate: string,
  setGames: (value: React.SetStateAction<Game[]>) => void
) => {
  try {
    fetch(`${baseURL}/games?start_date=${startDate}&end_date=${endDate}`, {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((result) => setGames(sortGamesByStatus(result.data)));
  } catch (error) {
    console.error(error);
  }
};
export const getAllGamesByTeam = (
  teamId: number,
  setGames: (value: React.SetStateAction<Game[]>) => void
) => {
  try {
    fetch(
      `${baseURL}/games?start_date=${startSeasonDate}&end_date=${endSeasonDate}&team_ids[]=${teamId}&per_page=${numberOfRegularSeasonGames}`,
      {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => setGames(result.data));
  } catch (error) {
    console.error(error);
  }
};

export const getSpecificTeamGames = (
  searchParams: GameSearchParams,
  setGames: (value: React.SetStateAction<Game[]>) => void
) => {
  try {
    const { teamId, startDate, endDate } = searchParams;
    fetch(
      `${baseURL}/games/?start_date=${startDate}&end_date=${endDate}&team_ids[]=${teamId}`,
      {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => setGames(result.data));
  } catch (error) {
    console.error(error);
  }
};

export const getGameStats = (
  gameId: number | undefined,
  setGameStats: (value: React.SetStateAction<PlayerStats[]>) => void
) => {
  try {
    fetch(`${baseURL}/stats?game_ids[]=${gameId}`, {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((result) => setGameStats(result.data));
  } catch (error) {
    console.error(error);
  }
};
