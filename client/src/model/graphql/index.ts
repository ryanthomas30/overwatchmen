/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Heroes
// ====================================================

export interface Heroes_heroes {
  __typename: "Hero";
  /**
   * The ID of the hero.
   */
  id: string;
  /**
   * The name of the hero.
   */
  name: HeroName;
  /**
   * THe role of the hero.
   */
  role: Role;
}

export interface Heroes {
  /**
   * Get all heroes.
   */
  heroes: Heroes_heroes[];
}

export interface HeroesVariables {
  role?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Maps
// ====================================================

export interface Maps_maps {
  __typename: "Map";
  /**
   * The ID of the map.
   */
  id: string;
  /**
   * The name of the map.
   */
  name: MapName;
  /**
   * The game mode of the map.
   */
  type: MapType;
}

export interface Maps {
  /**
   * Get all maps.
   */
  maps: Maps_maps[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserMatches
// ====================================================

export interface UserMatches_user_matches_heroes {
  __typename: "Hero";
  /**
   * The ID of the hero.
   */
  id: string;
  /**
   * The name of the hero.
   */
  name: HeroName;
}

export interface UserMatches_user_matches_map {
  __typename: "Map";
  /**
   * The ID of the map.
   */
  id: string;
  /**
   * The name of the map.
   */
  name: MapName;
  /**
   * The game mode of the map.
   */
  type: MapType;
}

export interface UserMatches_user_matches {
  __typename: "Match";
  /**
   * The ID of the match.
   */
  id: string;
  /**
   * Whether the match was a win, loss, or draw.
   */
  result: MatchResult;
  /**
   * When the match was played.
   */
  endTime: any;
  /**
   * The list of heroes the user played in this match.
   */
  heroes: (UserMatches_user_matches_heroes | null)[] | null;
  /**
   * The role the user played in this match.
   */
  role: Role;
  /**
   * The map the match was played on.
   */
  map: UserMatches_user_matches_map | null;
}

export interface UserMatches_user {
  __typename: "User";
  /**
   * The matches that the user has played.
   */
  matches: UserMatches_user_matches[];
}

export interface UserMatches {
  /**
   * Get a user by their ID.
   */
  user: UserMatches_user;
}

export interface UserMatchesVariables {
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMatch
// ====================================================

export interface CreateMatch_addMatchToUser {
  __typename: "Match";
  /**
   * The ID of the match.
   */
  id: string;
}

export interface CreateMatch {
  /**
   * Add a new match for a user.
   */
  addMatchToUser: CreateMatch_addMatchToUser;
}

export interface CreateMatchVariables {
  newMatch: NewMatch;
  userId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createUser {
  __typename: "User";
  /**
   * The ID of the user.
   */
  id: string;
  /**
   * The user's email address.
   */
  email: string;
  /**
   * The user's full name.
   */
  fullName: string;
}

export interface CreateUser {
  /**
   * Create a new user.
   */
  createUser: CreateUser_createUser;
}

export interface CreateUserVariables {
  newUser: NewUser;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum HeroName {
  Ana = "Ana",
  Ashe = "Ashe",
  Baptiste = "Baptiste",
  Bastion = "Bastion",
  Brigitte = "Brigitte",
  D__Va = "D__Va",
  Doomfist = "Doomfist",
  Echo = "Echo",
  Genji = "Genji",
  Hanzo = "Hanzo",
  Junkrat = "Junkrat",
  Lucio = "Lucio",
  McCree = "McCree",
  Mei = "Mei",
  Mercy = "Mercy",
  Moira = "Moira",
  Orisa = "Orisa",
  Pharah = "Pharah",
  Reaper = "Reaper",
  Reinhardt = "Reinhardt",
  Roadhog = "Roadhog",
  Sigma = "Sigma",
  Soldier_76 = "Soldier_76",
  Sombra = "Sombra",
  Symmetra = "Symmetra",
  Torbjorn = "Torbjorn",
  Tracer = "Tracer",
  Widowmaker = "Widowmaker",
  Winston = "Winston",
  Wrecking_Ball = "Wrecking_Ball",
  Zarya = "Zarya",
  Zenyatta = "Zenyatta",
}

export enum MapName {
  Blizzard_World = "Blizzard_World",
  Busan = "Busan",
  Dorado = "Dorado",
  Eichenwalde = "Eichenwalde",
  Hanamura = "Hanamura",
  Havana = "Havana",
  Hollywood = "Hollywood",
  Horizon_Lunar_Colony = "Horizon_Lunar_Colony",
  Ilios = "Ilios",
  Junkertown = "Junkertown",
  Kings_Row = "Kings_Row",
  Lijiang_Tower = "Lijiang_Tower",
  Nepal = "Nepal",
  Numbani = "Numbani",
  Oasis = "Oasis",
  Paris = "Paris",
  Rialto = "Rialto",
  Route_66 = "Route_66",
  Temple_of_Anubis = "Temple_of_Anubis",
  Volskaya_Industries = "Volskaya_Industries",
  Watchpoint_Gibraltar = "Watchpoint_Gibraltar",
}

export enum MapType {
  assault = "assault",
  control = "control",
  escort = "escort",
  hybrid = "hybrid",
}

export enum MatchResult {
  draw = "draw",
  loss = "loss",
  win = "win",
}

export enum Role {
  damage = "damage",
  support = "support",
  tank = "tank",
}

export interface NewMatch {
  mapId?: string | null;
  heroIds?: (string | null)[] | null;
  role: Role;
  skillRating?: number | null;
  result: MatchResult;
  endTime: any;
}

export interface NewUser {
  id: string;
  fullName: string;
  email: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
