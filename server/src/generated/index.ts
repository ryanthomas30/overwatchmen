/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Hero = {
  __typename?: 'Hero';
  /** The ID of the hero. */
  id: Scalars['ID'];
  /** The name of the hero. */
  name: HeroName;
  /** THe role of the hero. */
  role: Role;
};

export enum HeroName {
  Ana = 'Ana',
  Ashe = 'Ashe',
  Baptiste = 'Baptiste',
  Bastion = 'Bastion',
  Brigitte = 'Brigitte',
  Doomfist = 'Doomfist',
  DVa = 'D__Va',
  Echo = 'Echo',
  Genji = 'Genji',
  Hanzo = 'Hanzo',
  Junkrat = 'Junkrat',
  Lucio = 'Lucio',
  McCree = 'McCree',
  Mei = 'Mei',
  Mercy = 'Mercy',
  Moira = 'Moira',
  Orisa = 'Orisa',
  Pharah = 'Pharah',
  Reaper = 'Reaper',
  Reinhardt = 'Reinhardt',
  Roadhog = 'Roadhog',
  Sigma = 'Sigma',
  Soldier_76 = 'Soldier_76',
  Sombra = 'Sombra',
  Symmetra = 'Symmetra',
  Torbjorn = 'Torbjorn',
  Tracer = 'Tracer',
  Widowmaker = 'Widowmaker',
  Winston = 'Winston',
  WreckingBall = 'Wrecking_Ball',
  Zarya = 'Zarya',
  Zenyatta = 'Zenyatta'
}

export type Map = {
  __typename?: 'Map';
  /** The ID of the map. */
  id: Scalars['ID'];
  /** The name of the map. */
  name: MapName;
  /** The game mode of the map. */
  type: MapType;
};

export enum MapName {
  Hanamura = 'Hanamura',
  HorizonLunarColony = 'Horizon_Lunar_Colony',
  Paris = 'Paris',
  TempleOfAnubis = 'Temple_of_Anubis',
  VolskayaIndustries = 'Volskaya_Industries',
  Dorado = 'Dorado',
  Havana = 'Havana',
  Junkertown = 'Junkertown',
  Rialto = 'Rialto',
  Route_66 = 'Route_66',
  WatchpointGibraltar = 'Watchpoint_Gibraltar',
  BlizzardWorld = 'Blizzard_World',
  Eichenwalde = 'Eichenwalde',
  Hollywood = 'Hollywood',
  KingsRow = 'Kings_Row',
  Numbani = 'Numbani',
  Busan = 'Busan',
  Ilios = 'Ilios',
  LijiangTower = 'Lijiang_Tower',
  Nepal = 'Nepal',
  Oasis = 'Oasis'
}

export enum MapType {
  Control = 'control',
  Escort = 'escort',
  Assault = 'assault',
  Hybrid = 'hybrid'
}

export type Match = {
  __typename?: 'Match';
  /** The ID of the match. */
  id: Scalars['ID'];
  /** The map the match was played on. */
  map?: Maybe<Map>;
  /** The list of heroes the user played in this match. */
  heroes?: Maybe<Array<Maybe<Hero>>>;
  /** The role the user played in this match. */
  role: Role;
  /** The skill rating of the player at the end of this match. */
  skillRating: Scalars['Int'];
  /** Whether the match was a win, loss, or draw. */
  result: MatchResult;
  /** When the match was played. */
  endTime: Scalars['DateTime'];
};

export enum MatchResult {
  Win = 'win',
  Loss = 'loss',
  Draw = 'draw'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Test mutation for health checks. */
  testMutation?: Maybe<Scalars['String']>;
  /** Create a new hero. */
  createHero: Hero;
  /** Create a new map. */
  createMap: Map;
  /** Add a new match for a user. */
  addMatchToUser: Match;
  /** Create a new user. */
  createUser: User;
};


export type MutationCreateHeroArgs = {
  newHero: NewHero;
};


export type MutationCreateMapArgs = {
  newMap: NewMap;
};


export type MutationAddMatchToUserArgs = {
  newMatch: NewMatch;
  userId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  newUser: NewUser;
};

export type NewHero = {
  name: Scalars['String'];
  role: Role;
};

export type NewMap = {
  name: Scalars['String'];
  type: MapType;
};

export type NewMatch = {
  mapId?: Maybe<Scalars['ID']>;
  heroIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  role: Role;
  skillRating?: Maybe<Scalars['Int']>;
  result: MatchResult;
  endTime: Scalars['DateTime'];
};

export type NewUser = {
  id: Scalars['ID'];
  /** The user's full name. */
  fullName: Scalars['String'];
  /** The user's email address. */
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Test query for health checks. */
  testQuery?: Maybe<Scalars['String']>;
  /** Get a hero by its ID. */
  hero?: Maybe<Hero>;
  /** Get all heroes. */
  heroes: Array<Hero>;
  /** Get a map by its ID. */
  map?: Maybe<Map>;
  /** Get all maps. */
  maps: Array<Map>;
  /** Get a match by its ID. */
  match?: Maybe<Match>;
  /** Get all matches. */
  matches?: Maybe<Array<Maybe<Match>>>;
  /** Get a user by their ID. */
  user: User;
};


export type QueryHeroArgs = {
  heroId: Scalars['ID'];
};


export type QueryHeroesArgs = {
  role?: Maybe<Scalars['String']>;
};


export type QueryMapArgs = {
  mapId: Scalars['ID'];
};


export type QueryMatchArgs = {
  matchId: Scalars['ID'];
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};

export enum Role {
  Tank = 'tank',
  Damage = 'damage',
  Support = 'support'
}


export type User = {
  __typename?: 'User';
  /** The ID of the user. */
  id: Scalars['ID'];
  /** The user's full name. */
  fullName: Scalars['String'];
  /** The user's email address. */
  email: Scalars['String'];
  /** The matches that the user has played. */
  matches: Array<Match>;
};


export type UserMatchesArgs = {
  limit?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Hero: ResolverTypeWrapper<Hero>;
  HeroName: HeroName;
  Role: Role;
  Map: ResolverTypeWrapper<Map>;
  MapName: MapName;
  MapType: MapType;
  Match: ResolverTypeWrapper<Match>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MatchResult: MatchResult;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  User: ResolverTypeWrapper<User>;
  Mutation: ResolverTypeWrapper<{}>;
  NewHero: NewHero;
  NewMap: NewMap;
  NewMatch: NewMatch;
  NewUser: NewUser;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  String: Scalars['String'];
  ID: Scalars['ID'];
  Hero: Hero;
  Map: Map;
  Match: Match;
  Int: Scalars['Int'];
  DateTime: Scalars['DateTime'];
  User: User;
  Mutation: {};
  NewHero: NewHero;
  NewMap: NewMap;
  NewMatch: NewMatch;
  NewUser: NewUser;
  Boolean: Scalars['Boolean'];
  Upload: Scalars['Upload'];
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type HeroResolvers<ContextType = any, ParentType extends ResolversParentTypes['Hero'] = ResolversParentTypes['Hero']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['HeroName'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type MapResolvers<ContextType = any, ParentType extends ResolversParentTypes['Map'] = ResolversParentTypes['Map']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['MapName'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MapType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  map?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  heroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Hero']>>>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  skillRating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<ResolversTypes['MatchResult'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  testMutation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createHero?: Resolver<ResolversTypes['Hero'], ParentType, ContextType, RequireFields<MutationCreateHeroArgs, 'newHero'>>;
  createMap?: Resolver<ResolversTypes['Map'], ParentType, ContextType, RequireFields<MutationCreateMapArgs, 'newMap'>>;
  addMatchToUser?: Resolver<ResolversTypes['Match'], ParentType, ContextType, RequireFields<MutationAddMatchToUserArgs, 'newMatch' | 'userId'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'newUser'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  testQuery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['Hero']>, ParentType, ContextType, RequireFields<QueryHeroArgs, 'heroId'>>;
  heroes?: Resolver<Array<ResolversTypes['Hero']>, ParentType, ContextType, RequireFields<QueryHeroesArgs, never>>;
  map?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType, RequireFields<QueryMapArgs, 'mapId'>>;
  maps?: Resolver<Array<ResolversTypes['Map']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<QueryMatchArgs, 'matchId'>>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Match']>>>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'userId'>>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matches?: Resolver<Array<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<UserMatchesArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  Hero?: HeroResolvers<ContextType>;
  Map?: MapResolvers<ContextType>;
  Match?: MatchResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
