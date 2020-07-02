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
// GraphQL mutation operation: CreateUser
// ====================================================

export interface CreateUser_createUser {
  __typename: "User";
  /**
   * The ID of the user.
   */
  id: string;
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

export enum Role {
  damage = "damage",
  support = "support",
  tank = "tank",
}

export interface NewUser {
  id: string;
  fullName: string;
  email: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
