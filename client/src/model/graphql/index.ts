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
  name: string;
  role: Role;
}

export interface Heroes {
  heroes: (Heroes_heroes | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  damage = "damage",
  support = "support",
  tank = "tank",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
