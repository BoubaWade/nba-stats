import React from "react";
import { PlayerStats, Player, Team } from "../components/Players/playersTypes";
import { Game } from "../components/Teams/teamsTypes";

export const getAllPlayers = (
  query: string,
  setPlayers: (value: React.SetStateAction<Player[]>) => void
) => {
  try {
    fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`)
      .then((res) => res.json())
      .then((result) => setPlayers(result.data));
  } catch (error) {
    console.error(error);
  }
};
export const getPlayerStatsBySeason = (
  playerId: number,
  season: number,
  setPlayerStats: (value: React.SetStateAction<PlayerStats[]>) => void
) => {
  try {
    fetch(
      `https://www.balldontlie.io/api/v1/stats?seasons[]=${season}&player_ids[]=${playerId}&postseason=false`
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
      `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}&postseason=false`
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
    fetch("https://www.balldontlie.io/api/v1/teams")
      .then((res) => res.json())
      .then((result) => setTeams(result.data));
  } catch (error) {
    console.error(error);
  }
};
export const getGames = (
  teamId: number,
  season: number,
  setGames: (value: React.SetStateAction<Game[]>) => void
) => {
  try {
    fetch(
      `https://www.balldontlie.io/api/v1/games/?seasons[]=${season}&team_ids[]=${teamId}`
    )
      .then((res) => res.json())
      .then((result) => setGames(result.data));
  } catch (error) {
    console.error(error);
  }
};
