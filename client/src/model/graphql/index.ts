/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Heroes
// ====================================================

export interface Heroes_heroes {
  __typename: "Hero";
  id: string;
  name: HeroName;
  role: Role;
}

export interface Heroes {
  heroes: (Heroes_heroes | null)[] | null;
}

export interface HeroesVariables {
  role?: string | null;
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

export enum Role {
  damage = "damage",
  support = "support",
  tank = "tank",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
