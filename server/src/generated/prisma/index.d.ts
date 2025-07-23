
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TelegramUser
 * 
 */
export type TelegramUser = $Result.DefaultSelection<Prisma.$TelegramUserPayload>
/**
 * Model AccountSession
 * 
 */
export type AccountSession = $Result.DefaultSelection<Prisma.$AccountSessionPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model NewsTag
 * 
 */
export type NewsTag = $Result.DefaultSelection<Prisma.$NewsTagPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Place
 * 
 */
export type Place = $Result.DefaultSelection<Prisma.$PlacePayload>
/**
 * Model InteractiveArea
 * 
 */
export type InteractiveArea = $Result.DefaultSelection<Prisma.$InteractiveAreaPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model Partner
 * 
 */
export type Partner = $Result.DefaultSelection<Prisma.$PartnerPayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model Appeal
 * 
 */
export type Appeal = $Result.DefaultSelection<Prisma.$AppealPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MenuTypeEnum: {
  text: 'text',
  document: 'document',
  member: 'member',
  news: 'news',
  photo: 'photo'
};

export type MenuTypeEnum = (typeof MenuTypeEnum)[keyof typeof MenuTypeEnum]


export const UserRoleEnum: {
  user: 'user',
  admin: 'admin',
  super_admin: 'super_admin'
};

export type UserRoleEnum = (typeof UserRoleEnum)[keyof typeof UserRoleEnum]


export const NewsTypeEnum: {
  standard: 'standard',
  photo: 'photo',
  video: 'video',
  area: 'area'
};

export type NewsTypeEnum = (typeof NewsTypeEnum)[keyof typeof NewsTypeEnum]


export const BannerTypeEnum: {
  fit: 'fit',
  full: 'full',
  link: 'link',
  horizontal: 'horizontal',
  hero1: 'hero1',
  hero2: 'hero2'
};

export type BannerTypeEnum = (typeof BannerTypeEnum)[keyof typeof BannerTypeEnum]

}

export type MenuTypeEnum = $Enums.MenuTypeEnum

export const MenuTypeEnum: typeof $Enums.MenuTypeEnum

export type UserRoleEnum = $Enums.UserRoleEnum

export const UserRoleEnum: typeof $Enums.UserRoleEnum

export type NewsTypeEnum = $Enums.NewsTypeEnum

export const NewsTypeEnum: typeof $Enums.NewsTypeEnum

export type BannerTypeEnum = $Enums.BannerTypeEnum

export const BannerTypeEnum: typeof $Enums.BannerTypeEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramUser`: Exposes CRUD operations for the **TelegramUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramUsers
    * const telegramUsers = await prisma.telegramUser.findMany()
    * ```
    */
  get telegramUser(): Prisma.TelegramUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountSession`: Exposes CRUD operations for the **AccountSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountSessions
    * const accountSessions = await prisma.accountSession.findMany()
    * ```
    */
  get accountSession(): Prisma.AccountSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsTag`: Exposes CRUD operations for the **NewsTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsTags
    * const newsTags = await prisma.newsTag.findMany()
    * ```
    */
  get newsTag(): Prisma.NewsTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.place`: Exposes CRUD operations for the **Place** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.place.findMany()
    * ```
    */
  get place(): Prisma.PlaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interactiveArea`: Exposes CRUD operations for the **InteractiveArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InteractiveAreas
    * const interactiveAreas = await prisma.interactiveArea.findMany()
    * ```
    */
  get interactiveArea(): Prisma.InteractiveAreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partner`: Exposes CRUD operations for the **Partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partner.findMany()
    * ```
    */
  get partner(): Prisma.PartnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appeal`: Exposes CRUD operations for the **Appeal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appeals
    * const appeals = await prisma.appeal.findMany()
    * ```
    */
  get appeal(): Prisma.AppealDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TelegramUser: 'TelegramUser',
    AccountSession: 'AccountSession',
    News: 'News',
    NewsTag: 'NewsTag',
    Contact: 'Contact',
    File: 'File',
    Place: 'Place',
    InteractiveArea: 'InteractiveArea',
    Banner: 'Banner',
    Partner: 'Partner',
    Menu: 'Menu',
    Appeal: 'Appeal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "telegramUser" | "accountSession" | "news" | "newsTag" | "contact" | "file" | "place" | "interactiveArea" | "banner" | "partner" | "menu" | "appeal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TelegramUser: {
        payload: Prisma.$TelegramUserPayload<ExtArgs>
        fields: Prisma.TelegramUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload>
          }
          findFirst: {
            args: Prisma.TelegramUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload>
          }
          findMany: {
            args: Prisma.TelegramUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload>[]
          }
          create: {
            args: Prisma.TelegramUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload>
          }
          createMany: {
            args: Prisma.TelegramUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload>[]
          }
          delete: {
            args: Prisma.TelegramUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload>
          }
          update: {
            args: Prisma.TelegramUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload>
          }
          deleteMany: {
            args: Prisma.TelegramUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload>[]
          }
          upsert: {
            args: Prisma.TelegramUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramUserPayload>
          }
          aggregate: {
            args: Prisma.TelegramUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramUser>
          }
          groupBy: {
            args: Prisma.TelegramUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramUserCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramUserCountAggregateOutputType> | number
          }
        }
      }
      AccountSession: {
        payload: Prisma.$AccountSessionPayload<ExtArgs>
        fields: Prisma.AccountSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload>
          }
          findFirst: {
            args: Prisma.AccountSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload>
          }
          findMany: {
            args: Prisma.AccountSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload>[]
          }
          create: {
            args: Prisma.AccountSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload>
          }
          createMany: {
            args: Prisma.AccountSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload>[]
          }
          delete: {
            args: Prisma.AccountSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload>
          }
          update: {
            args: Prisma.AccountSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload>
          }
          deleteMany: {
            args: Prisma.AccountSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload>[]
          }
          upsert: {
            args: Prisma.AccountSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSessionPayload>
          }
          aggregate: {
            args: Prisma.AccountSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountSession>
          }
          groupBy: {
            args: Prisma.AccountSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AccountSessionCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      NewsTag: {
        payload: Prisma.$NewsTagPayload<ExtArgs>
        fields: Prisma.NewsTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          findFirst: {
            args: Prisma.NewsTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          findMany: {
            args: Prisma.NewsTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          create: {
            args: Prisma.NewsTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          createMany: {
            args: Prisma.NewsTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          delete: {
            args: Prisma.NewsTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          update: {
            args: Prisma.NewsTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          deleteMany: {
            args: Prisma.NewsTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>[]
          }
          upsert: {
            args: Prisma.NewsTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsTagPayload>
          }
          aggregate: {
            args: Prisma.NewsTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsTag>
          }
          groupBy: {
            args: Prisma.NewsTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsTagCountArgs<ExtArgs>
            result: $Utils.Optional<NewsTagCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Place: {
        payload: Prisma.$PlacePayload<ExtArgs>
        fields: Prisma.PlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findFirst: {
            args: Prisma.PlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findMany: {
            args: Prisma.PlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          create: {
            args: Prisma.PlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          createMany: {
            args: Prisma.PlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          delete: {
            args: Prisma.PlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          update: {
            args: Prisma.PlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          deleteMany: {
            args: Prisma.PlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          upsert: {
            args: Prisma.PlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          aggregate: {
            args: Prisma.PlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlace>
          }
          groupBy: {
            args: Prisma.PlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceCountAggregateOutputType> | number
          }
        }
      }
      InteractiveArea: {
        payload: Prisma.$InteractiveAreaPayload<ExtArgs>
        fields: Prisma.InteractiveAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteractiveAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteractiveAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload>
          }
          findFirst: {
            args: Prisma.InteractiveAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteractiveAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload>
          }
          findMany: {
            args: Prisma.InteractiveAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload>[]
          }
          create: {
            args: Prisma.InteractiveAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload>
          }
          createMany: {
            args: Prisma.InteractiveAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InteractiveAreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload>[]
          }
          delete: {
            args: Prisma.InteractiveAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload>
          }
          update: {
            args: Prisma.InteractiveAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload>
          }
          deleteMany: {
            args: Prisma.InteractiveAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteractiveAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InteractiveAreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload>[]
          }
          upsert: {
            args: Prisma.InteractiveAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractiveAreaPayload>
          }
          aggregate: {
            args: Prisma.InteractiveAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteractiveArea>
          }
          groupBy: {
            args: Prisma.InteractiveAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteractiveAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.InteractiveAreaCountArgs<ExtArgs>
            result: $Utils.Optional<InteractiveAreaCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      Partner: {
        payload: Prisma.$PartnerPayload<ExtArgs>
        fields: Prisma.PartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findFirst: {
            args: Prisma.PartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findMany: {
            args: Prisma.PartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          create: {
            args: Prisma.PartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          createMany: {
            args: Prisma.PartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          delete: {
            args: Prisma.PartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          update: {
            args: Prisma.PartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          deleteMany: {
            args: Prisma.PartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          upsert: {
            args: Prisma.PartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          aggregate: {
            args: Prisma.PartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartner>
          }
          groupBy: {
            args: Prisma.PartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      Appeal: {
        payload: Prisma.$AppealPayload<ExtArgs>
        fields: Prisma.AppealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>
          }
          findFirst: {
            args: Prisma.AppealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>
          }
          findMany: {
            args: Prisma.AppealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>[]
          }
          create: {
            args: Prisma.AppealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>
          }
          createMany: {
            args: Prisma.AppealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>[]
          }
          delete: {
            args: Prisma.AppealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>
          }
          update: {
            args: Prisma.AppealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>
          }
          deleteMany: {
            args: Prisma.AppealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>[]
          }
          upsert: {
            args: Prisma.AppealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppealPayload>
          }
          aggregate: {
            args: Prisma.AppealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppeal>
          }
          groupBy: {
            args: Prisma.AppealGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppealGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppealCountArgs<ExtArgs>
            result: $Utils.Optional<AppealCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    telegramUser?: TelegramUserOmit
    accountSession?: AccountSessionOmit
    news?: NewsOmit
    newsTag?: NewsTagOmit
    contact?: ContactOmit
    file?: FileOmit
    place?: PlaceOmit
    interactiveArea?: InteractiveAreaOmit
    banner?: BannerOmit
    partner?: PartnerOmit
    menu?: MenuOmit
    appeal?: AppealOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accountSessions: number
    news: number
    menus: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountSessions?: boolean | UserCountOutputTypeCountAccountSessionsArgs
    news?: boolean | UserCountOutputTypeCountNewsArgs
    menus?: boolean | UserCountOutputTypeCountMenusArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }


  /**
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    files: number
    tags: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | NewsCountOutputTypeCountFilesArgs
    tags?: boolean | NewsCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagWhereInput
  }


  /**
   * Count Type NewsTagCountOutputType
   */

  export type NewsTagCountOutputType = {
    news: number
  }

  export type NewsTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsTagCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * NewsTagCountOutputType without action
   */
  export type NewsTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTagCountOutputType
     */
    select?: NewsTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsTagCountOutputType without action
   */
  export type NewsTagCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }


  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    banner: number
    Partner: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banner?: boolean | FileCountOutputTypeCountBannerArgs
    Partner?: boolean | FileCountOutputTypeCountPartnerArgs
  }

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountBannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountPartnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
  }


  /**
   * Count Type PlaceCountOutputType
   */

  export type PlaceCountOutputType = {
    interactiveArea: number
  }

  export type PlaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactiveArea?: boolean | PlaceCountOutputTypeCountInteractiveAreaArgs
  }

  // Custom InputTypes
  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceCountOutputType
     */
    select?: PlaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeCountInteractiveAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractiveAreaWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    children: number
    files: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | MenuCountOutputTypeCountChildrenArgs
    files?: boolean | MenuCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    fullName: string | null
    hashedPassword: string | null
    salt: string | null
    role: $Enums.UserRoleEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    fullName: string | null
    hashedPassword: string | null
    salt: string | null
    role: $Enums.UserRoleEnum | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    fullName: number
    hashedPassword: number
    salt: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    hashedPassword?: true
    salt?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    hashedPassword?: true
    salt?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    hashedPassword?: true
    salt?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt: Date
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    hashedPassword?: boolean
    salt?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    telegramUser?: boolean | User$telegramUserArgs<ExtArgs>
    accountSessions?: boolean | User$accountSessionsArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    menus?: boolean | User$menusArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    hashedPassword?: boolean
    salt?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    hashedPassword?: boolean
    salt?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    fullName?: boolean
    hashedPassword?: boolean
    salt?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullName" | "hashedPassword" | "salt" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telegramUser?: boolean | User$telegramUserArgs<ExtArgs>
    accountSessions?: boolean | User$accountSessionsArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    menus?: boolean | User$menusArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      telegramUser: Prisma.$TelegramUserPayload<ExtArgs> | null
      accountSessions: Prisma.$AccountSessionPayload<ExtArgs>[]
      news: Prisma.$NewsPayload<ExtArgs>[]
      menus: Prisma.$MenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      fullName: string
      hashedPassword: string
      salt: string
      role: $Enums.UserRoleEnum
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telegramUser<T extends User$telegramUserArgs<ExtArgs> = {}>(args?: Subset<T, User$telegramUserArgs<ExtArgs>>): Prisma__TelegramUserClient<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accountSessions<T extends User$accountSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menus<T extends User$menusArgs<ExtArgs> = {}>(args?: Subset<T, User$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRoleEnum'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.telegramUser
   */
  export type User$telegramUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    where?: TelegramUserWhereInput
  }

  /**
   * User.accountSessions
   */
  export type User$accountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    where?: AccountSessionWhereInput
    orderBy?: AccountSessionOrderByWithRelationInput | AccountSessionOrderByWithRelationInput[]
    cursor?: AccountSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountSessionScalarFieldEnum | AccountSessionScalarFieldEnum[]
  }

  /**
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.menus
   */
  export type User$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TelegramUser
   */

  export type AggregateTelegramUser = {
    _count: TelegramUserCountAggregateOutputType | null
    _avg: TelegramUserAvgAggregateOutputType | null
    _sum: TelegramUserSumAggregateOutputType | null
    _min: TelegramUserMinAggregateOutputType | null
    _max: TelegramUserMaxAggregateOutputType | null
  }

  export type TelegramUserAvgAggregateOutputType = {
    id: number | null
    telegramId: number | null
    userId: number | null
  }

  export type TelegramUserSumAggregateOutputType = {
    id: number | null
    telegramId: bigint | null
    userId: number | null
  }

  export type TelegramUserMinAggregateOutputType = {
    id: number | null
    telegramId: bigint | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramUserMaxAggregateOutputType = {
    id: number | null
    telegramId: bigint | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramUserCountAggregateOutputType = {
    id: number
    telegramId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TelegramUserAvgAggregateInputType = {
    id?: true
    telegramId?: true
    userId?: true
  }

  export type TelegramUserSumAggregateInputType = {
    id?: true
    telegramId?: true
    userId?: true
  }

  export type TelegramUserMinAggregateInputType = {
    id?: true
    telegramId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramUserMaxAggregateInputType = {
    id?: true
    telegramId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramUserCountAggregateInputType = {
    id?: true
    telegramId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TelegramUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramUser to aggregate.
     */
    where?: TelegramUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramUsers to fetch.
     */
    orderBy?: TelegramUserOrderByWithRelationInput | TelegramUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramUsers
    **/
    _count?: true | TelegramUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelegramUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelegramUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramUserMaxAggregateInputType
  }

  export type GetTelegramUserAggregateType<T extends TelegramUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramUser[P]>
      : GetScalarType<T[P], AggregateTelegramUser[P]>
  }




  export type TelegramUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramUserWhereInput
    orderBy?: TelegramUserOrderByWithAggregationInput | TelegramUserOrderByWithAggregationInput[]
    by: TelegramUserScalarFieldEnum[] | TelegramUserScalarFieldEnum
    having?: TelegramUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramUserCountAggregateInputType | true
    _avg?: TelegramUserAvgAggregateInputType
    _sum?: TelegramUserSumAggregateInputType
    _min?: TelegramUserMinAggregateInputType
    _max?: TelegramUserMaxAggregateInputType
  }

  export type TelegramUserGroupByOutputType = {
    id: number
    telegramId: bigint
    userId: number
    createdAt: Date
    updatedAt: Date | null
    _count: TelegramUserCountAggregateOutputType | null
    _avg: TelegramUserAvgAggregateOutputType | null
    _sum: TelegramUserSumAggregateOutputType | null
    _min: TelegramUserMinAggregateOutputType | null
    _max: TelegramUserMaxAggregateOutputType | null
  }

  type GetTelegramUserGroupByPayload<T extends TelegramUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramUserGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramUserGroupByOutputType[P]>
        }
      >
    >


  export type TelegramUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramUser"]>

  export type TelegramUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramUser"]>

  export type TelegramUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramUser"]>

  export type TelegramUserSelectScalar = {
    id?: boolean
    telegramId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TelegramUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telegramId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["telegramUser"]>
  export type TelegramUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TelegramUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TelegramUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TelegramUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      telegramId: bigint
      userId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["telegramUser"]>
    composites: {}
  }

  type TelegramUserGetPayload<S extends boolean | null | undefined | TelegramUserDefaultArgs> = $Result.GetResult<Prisma.$TelegramUserPayload, S>

  type TelegramUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramUserCountAggregateInputType | true
    }

  export interface TelegramUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramUser'], meta: { name: 'TelegramUser' } }
    /**
     * Find zero or one TelegramUser that matches the filter.
     * @param {TelegramUserFindUniqueArgs} args - Arguments to find a TelegramUser
     * @example
     * // Get one TelegramUser
     * const telegramUser = await prisma.telegramUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramUserFindUniqueArgs>(args: SelectSubset<T, TelegramUserFindUniqueArgs<ExtArgs>>): Prisma__TelegramUserClient<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramUserFindUniqueOrThrowArgs} args - Arguments to find a TelegramUser
     * @example
     * // Get one TelegramUser
     * const telegramUser = await prisma.telegramUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramUserClient<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramUserFindFirstArgs} args - Arguments to find a TelegramUser
     * @example
     * // Get one TelegramUser
     * const telegramUser = await prisma.telegramUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramUserFindFirstArgs>(args?: SelectSubset<T, TelegramUserFindFirstArgs<ExtArgs>>): Prisma__TelegramUserClient<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramUserFindFirstOrThrowArgs} args - Arguments to find a TelegramUser
     * @example
     * // Get one TelegramUser
     * const telegramUser = await prisma.telegramUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramUserClient<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramUsers
     * const telegramUsers = await prisma.telegramUser.findMany()
     * 
     * // Get first 10 TelegramUsers
     * const telegramUsers = await prisma.telegramUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramUserWithIdOnly = await prisma.telegramUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramUserFindManyArgs>(args?: SelectSubset<T, TelegramUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramUser.
     * @param {TelegramUserCreateArgs} args - Arguments to create a TelegramUser.
     * @example
     * // Create one TelegramUser
     * const TelegramUser = await prisma.telegramUser.create({
     *   data: {
     *     // ... data to create a TelegramUser
     *   }
     * })
     * 
     */
    create<T extends TelegramUserCreateArgs>(args: SelectSubset<T, TelegramUserCreateArgs<ExtArgs>>): Prisma__TelegramUserClient<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramUsers.
     * @param {TelegramUserCreateManyArgs} args - Arguments to create many TelegramUsers.
     * @example
     * // Create many TelegramUsers
     * const telegramUser = await prisma.telegramUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramUserCreateManyArgs>(args?: SelectSubset<T, TelegramUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramUsers and returns the data saved in the database.
     * @param {TelegramUserCreateManyAndReturnArgs} args - Arguments to create many TelegramUsers.
     * @example
     * // Create many TelegramUsers
     * const telegramUser = await prisma.telegramUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramUsers and only return the `id`
     * const telegramUserWithIdOnly = await prisma.telegramUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramUserCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramUser.
     * @param {TelegramUserDeleteArgs} args - Arguments to delete one TelegramUser.
     * @example
     * // Delete one TelegramUser
     * const TelegramUser = await prisma.telegramUser.delete({
     *   where: {
     *     // ... filter to delete one TelegramUser
     *   }
     * })
     * 
     */
    delete<T extends TelegramUserDeleteArgs>(args: SelectSubset<T, TelegramUserDeleteArgs<ExtArgs>>): Prisma__TelegramUserClient<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramUser.
     * @param {TelegramUserUpdateArgs} args - Arguments to update one TelegramUser.
     * @example
     * // Update one TelegramUser
     * const telegramUser = await prisma.telegramUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramUserUpdateArgs>(args: SelectSubset<T, TelegramUserUpdateArgs<ExtArgs>>): Prisma__TelegramUserClient<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramUsers.
     * @param {TelegramUserDeleteManyArgs} args - Arguments to filter TelegramUsers to delete.
     * @example
     * // Delete a few TelegramUsers
     * const { count } = await prisma.telegramUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramUserDeleteManyArgs>(args?: SelectSubset<T, TelegramUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramUsers
     * const telegramUser = await prisma.telegramUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramUserUpdateManyArgs>(args: SelectSubset<T, TelegramUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramUsers and returns the data updated in the database.
     * @param {TelegramUserUpdateManyAndReturnArgs} args - Arguments to update many TelegramUsers.
     * @example
     * // Update many TelegramUsers
     * const telegramUser = await prisma.telegramUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramUsers and only return the `id`
     * const telegramUserWithIdOnly = await prisma.telegramUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelegramUserUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramUser.
     * @param {TelegramUserUpsertArgs} args - Arguments to update or create a TelegramUser.
     * @example
     * // Update or create a TelegramUser
     * const telegramUser = await prisma.telegramUser.upsert({
     *   create: {
     *     // ... data to create a TelegramUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramUser we want to update
     *   }
     * })
     */
    upsert<T extends TelegramUserUpsertArgs>(args: SelectSubset<T, TelegramUserUpsertArgs<ExtArgs>>): Prisma__TelegramUserClient<$Result.GetResult<Prisma.$TelegramUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramUserCountArgs} args - Arguments to filter TelegramUsers to count.
     * @example
     * // Count the number of TelegramUsers
     * const count = await prisma.telegramUser.count({
     *   where: {
     *     // ... the filter for the TelegramUsers we want to count
     *   }
     * })
    **/
    count<T extends TelegramUserCountArgs>(
      args?: Subset<T, TelegramUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelegramUserAggregateArgs>(args: Subset<T, TelegramUserAggregateArgs>): Prisma.PrismaPromise<GetTelegramUserAggregateType<T>>

    /**
     * Group by TelegramUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelegramUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramUserGroupByArgs['orderBy'] }
        : { orderBy?: TelegramUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelegramUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramUser model
   */
  readonly fields: TelegramUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TelegramUser model
   */
  interface TelegramUserFieldRefs {
    readonly id: FieldRef<"TelegramUser", 'Int'>
    readonly telegramId: FieldRef<"TelegramUser", 'BigInt'>
    readonly userId: FieldRef<"TelegramUser", 'Int'>
    readonly createdAt: FieldRef<"TelegramUser", 'DateTime'>
    readonly updatedAt: FieldRef<"TelegramUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramUser findUnique
   */
  export type TelegramUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    /**
     * Filter, which TelegramUser to fetch.
     */
    where: TelegramUserWhereUniqueInput
  }

  /**
   * TelegramUser findUniqueOrThrow
   */
  export type TelegramUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    /**
     * Filter, which TelegramUser to fetch.
     */
    where: TelegramUserWhereUniqueInput
  }

  /**
   * TelegramUser findFirst
   */
  export type TelegramUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    /**
     * Filter, which TelegramUser to fetch.
     */
    where?: TelegramUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramUsers to fetch.
     */
    orderBy?: TelegramUserOrderByWithRelationInput | TelegramUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramUsers.
     */
    cursor?: TelegramUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramUsers.
     */
    distinct?: TelegramUserScalarFieldEnum | TelegramUserScalarFieldEnum[]
  }

  /**
   * TelegramUser findFirstOrThrow
   */
  export type TelegramUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    /**
     * Filter, which TelegramUser to fetch.
     */
    where?: TelegramUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramUsers to fetch.
     */
    orderBy?: TelegramUserOrderByWithRelationInput | TelegramUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramUsers.
     */
    cursor?: TelegramUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramUsers.
     */
    distinct?: TelegramUserScalarFieldEnum | TelegramUserScalarFieldEnum[]
  }

  /**
   * TelegramUser findMany
   */
  export type TelegramUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    /**
     * Filter, which TelegramUsers to fetch.
     */
    where?: TelegramUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramUsers to fetch.
     */
    orderBy?: TelegramUserOrderByWithRelationInput | TelegramUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramUsers.
     */
    cursor?: TelegramUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramUsers.
     */
    skip?: number
    distinct?: TelegramUserScalarFieldEnum | TelegramUserScalarFieldEnum[]
  }

  /**
   * TelegramUser create
   */
  export type TelegramUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TelegramUser.
     */
    data: XOR<TelegramUserCreateInput, TelegramUserUncheckedCreateInput>
  }

  /**
   * TelegramUser createMany
   */
  export type TelegramUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramUsers.
     */
    data: TelegramUserCreateManyInput | TelegramUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramUser createManyAndReturn
   */
  export type TelegramUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramUsers.
     */
    data: TelegramUserCreateManyInput | TelegramUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelegramUser update
   */
  export type TelegramUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TelegramUser.
     */
    data: XOR<TelegramUserUpdateInput, TelegramUserUncheckedUpdateInput>
    /**
     * Choose, which TelegramUser to update.
     */
    where: TelegramUserWhereUniqueInput
  }

  /**
   * TelegramUser updateMany
   */
  export type TelegramUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramUsers.
     */
    data: XOR<TelegramUserUpdateManyMutationInput, TelegramUserUncheckedUpdateManyInput>
    /**
     * Filter which TelegramUsers to update
     */
    where?: TelegramUserWhereInput
    /**
     * Limit how many TelegramUsers to update.
     */
    limit?: number
  }

  /**
   * TelegramUser updateManyAndReturn
   */
  export type TelegramUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * The data used to update TelegramUsers.
     */
    data: XOR<TelegramUserUpdateManyMutationInput, TelegramUserUncheckedUpdateManyInput>
    /**
     * Filter which TelegramUsers to update
     */
    where?: TelegramUserWhereInput
    /**
     * Limit how many TelegramUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelegramUser upsert
   */
  export type TelegramUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TelegramUser to update in case it exists.
     */
    where: TelegramUserWhereUniqueInput
    /**
     * In case the TelegramUser found by the `where` argument doesn't exist, create a new TelegramUser with this data.
     */
    create: XOR<TelegramUserCreateInput, TelegramUserUncheckedCreateInput>
    /**
     * In case the TelegramUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramUserUpdateInput, TelegramUserUncheckedUpdateInput>
  }

  /**
   * TelegramUser delete
   */
  export type TelegramUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
    /**
     * Filter which TelegramUser to delete.
     */
    where: TelegramUserWhereUniqueInput
  }

  /**
   * TelegramUser deleteMany
   */
  export type TelegramUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramUsers to delete
     */
    where?: TelegramUserWhereInput
    /**
     * Limit how many TelegramUsers to delete.
     */
    limit?: number
  }

  /**
   * TelegramUser without action
   */
  export type TelegramUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramUser
     */
    select?: TelegramUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramUser
     */
    omit?: TelegramUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramUserInclude<ExtArgs> | null
  }


  /**
   * Model AccountSession
   */

  export type AggregateAccountSession = {
    _count: AccountSessionCountAggregateOutputType | null
    _avg: AccountSessionAvgAggregateOutputType | null
    _sum: AccountSessionSumAggregateOutputType | null
    _min: AccountSessionMinAggregateOutputType | null
    _max: AccountSessionMaxAggregateOutputType | null
  }

  export type AccountSessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountSessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountSessionMinAggregateOutputType = {
    id: number | null
    ip: string | null
    sessionId: string | null
    revoked: boolean | null
    userId: number | null
    exp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountSessionMaxAggregateOutputType = {
    id: number | null
    ip: string | null
    sessionId: string | null
    revoked: boolean | null
    userId: number | null
    exp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountSessionCountAggregateOutputType = {
    id: number
    device: number
    ip: number
    sessionId: number
    revoked: number
    userId: number
    exp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountSessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountSessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountSessionMinAggregateInputType = {
    id?: true
    ip?: true
    sessionId?: true
    revoked?: true
    userId?: true
    exp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountSessionMaxAggregateInputType = {
    id?: true
    ip?: true
    sessionId?: true
    revoked?: true
    userId?: true
    exp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountSessionCountAggregateInputType = {
    id?: true
    device?: true
    ip?: true
    sessionId?: true
    revoked?: true
    userId?: true
    exp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountSession to aggregate.
     */
    where?: AccountSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSessions to fetch.
     */
    orderBy?: AccountSessionOrderByWithRelationInput | AccountSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountSessions
    **/
    _count?: true | AccountSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountSessionMaxAggregateInputType
  }

  export type GetAccountSessionAggregateType<T extends AccountSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountSession[P]>
      : GetScalarType<T[P], AggregateAccountSession[P]>
  }




  export type AccountSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountSessionWhereInput
    orderBy?: AccountSessionOrderByWithAggregationInput | AccountSessionOrderByWithAggregationInput[]
    by: AccountSessionScalarFieldEnum[] | AccountSessionScalarFieldEnum
    having?: AccountSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountSessionCountAggregateInputType | true
    _avg?: AccountSessionAvgAggregateInputType
    _sum?: AccountSessionSumAggregateInputType
    _min?: AccountSessionMinAggregateInputType
    _max?: AccountSessionMaxAggregateInputType
  }

  export type AccountSessionGroupByOutputType = {
    id: number
    device: JsonValue
    ip: string
    sessionId: string
    revoked: boolean
    userId: number
    exp: Date
    createdAt: Date
    updatedAt: Date
    _count: AccountSessionCountAggregateOutputType | null
    _avg: AccountSessionAvgAggregateOutputType | null
    _sum: AccountSessionSumAggregateOutputType | null
    _min: AccountSessionMinAggregateOutputType | null
    _max: AccountSessionMaxAggregateOutputType | null
  }

  type GetAccountSessionGroupByPayload<T extends AccountSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AccountSessionGroupByOutputType[P]>
        }
      >
    >


  export type AccountSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device?: boolean
    ip?: boolean
    sessionId?: boolean
    revoked?: boolean
    userId?: boolean
    exp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountSession"]>

  export type AccountSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device?: boolean
    ip?: boolean
    sessionId?: boolean
    revoked?: boolean
    userId?: boolean
    exp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountSession"]>

  export type AccountSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device?: boolean
    ip?: boolean
    sessionId?: boolean
    revoked?: boolean
    userId?: boolean
    exp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountSession"]>

  export type AccountSessionSelectScalar = {
    id?: boolean
    device?: boolean
    ip?: boolean
    sessionId?: boolean
    revoked?: boolean
    userId?: boolean
    exp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device" | "ip" | "sessionId" | "revoked" | "userId" | "exp" | "createdAt" | "updatedAt", ExtArgs["result"]["accountSession"]>
  export type AccountSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      device: Prisma.JsonValue
      ip: string
      sessionId: string
      revoked: boolean
      userId: number
      exp: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountSession"]>
    composites: {}
  }

  type AccountSessionGetPayload<S extends boolean | null | undefined | AccountSessionDefaultArgs> = $Result.GetResult<Prisma.$AccountSessionPayload, S>

  type AccountSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountSessionCountAggregateInputType | true
    }

  export interface AccountSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountSession'], meta: { name: 'AccountSession' } }
    /**
     * Find zero or one AccountSession that matches the filter.
     * @param {AccountSessionFindUniqueArgs} args - Arguments to find a AccountSession
     * @example
     * // Get one AccountSession
     * const accountSession = await prisma.accountSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountSessionFindUniqueArgs>(args: SelectSubset<T, AccountSessionFindUniqueArgs<ExtArgs>>): Prisma__AccountSessionClient<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountSessionFindUniqueOrThrowArgs} args - Arguments to find a AccountSession
     * @example
     * // Get one AccountSession
     * const accountSession = await prisma.accountSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountSessionClient<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSessionFindFirstArgs} args - Arguments to find a AccountSession
     * @example
     * // Get one AccountSession
     * const accountSession = await prisma.accountSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountSessionFindFirstArgs>(args?: SelectSubset<T, AccountSessionFindFirstArgs<ExtArgs>>): Prisma__AccountSessionClient<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSessionFindFirstOrThrowArgs} args - Arguments to find a AccountSession
     * @example
     * // Get one AccountSession
     * const accountSession = await prisma.accountSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountSessionClient<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountSessions
     * const accountSessions = await prisma.accountSession.findMany()
     * 
     * // Get first 10 AccountSessions
     * const accountSessions = await prisma.accountSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountSessionWithIdOnly = await prisma.accountSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountSessionFindManyArgs>(args?: SelectSubset<T, AccountSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountSession.
     * @param {AccountSessionCreateArgs} args - Arguments to create a AccountSession.
     * @example
     * // Create one AccountSession
     * const AccountSession = await prisma.accountSession.create({
     *   data: {
     *     // ... data to create a AccountSession
     *   }
     * })
     * 
     */
    create<T extends AccountSessionCreateArgs>(args: SelectSubset<T, AccountSessionCreateArgs<ExtArgs>>): Prisma__AccountSessionClient<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountSessions.
     * @param {AccountSessionCreateManyArgs} args - Arguments to create many AccountSessions.
     * @example
     * // Create many AccountSessions
     * const accountSession = await prisma.accountSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountSessionCreateManyArgs>(args?: SelectSubset<T, AccountSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountSessions and returns the data saved in the database.
     * @param {AccountSessionCreateManyAndReturnArgs} args - Arguments to create many AccountSessions.
     * @example
     * // Create many AccountSessions
     * const accountSession = await prisma.accountSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountSessions and only return the `id`
     * const accountSessionWithIdOnly = await prisma.accountSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountSession.
     * @param {AccountSessionDeleteArgs} args - Arguments to delete one AccountSession.
     * @example
     * // Delete one AccountSession
     * const AccountSession = await prisma.accountSession.delete({
     *   where: {
     *     // ... filter to delete one AccountSession
     *   }
     * })
     * 
     */
    delete<T extends AccountSessionDeleteArgs>(args: SelectSubset<T, AccountSessionDeleteArgs<ExtArgs>>): Prisma__AccountSessionClient<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountSession.
     * @param {AccountSessionUpdateArgs} args - Arguments to update one AccountSession.
     * @example
     * // Update one AccountSession
     * const accountSession = await prisma.accountSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountSessionUpdateArgs>(args: SelectSubset<T, AccountSessionUpdateArgs<ExtArgs>>): Prisma__AccountSessionClient<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountSessions.
     * @param {AccountSessionDeleteManyArgs} args - Arguments to filter AccountSessions to delete.
     * @example
     * // Delete a few AccountSessions
     * const { count } = await prisma.accountSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountSessionDeleteManyArgs>(args?: SelectSubset<T, AccountSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountSessions
     * const accountSession = await prisma.accountSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountSessionUpdateManyArgs>(args: SelectSubset<T, AccountSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountSessions and returns the data updated in the database.
     * @param {AccountSessionUpdateManyAndReturnArgs} args - Arguments to update many AccountSessions.
     * @example
     * // Update many AccountSessions
     * const accountSession = await prisma.accountSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountSessions and only return the `id`
     * const accountSessionWithIdOnly = await prisma.accountSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountSession.
     * @param {AccountSessionUpsertArgs} args - Arguments to update or create a AccountSession.
     * @example
     * // Update or create a AccountSession
     * const accountSession = await prisma.accountSession.upsert({
     *   create: {
     *     // ... data to create a AccountSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountSession we want to update
     *   }
     * })
     */
    upsert<T extends AccountSessionUpsertArgs>(args: SelectSubset<T, AccountSessionUpsertArgs<ExtArgs>>): Prisma__AccountSessionClient<$Result.GetResult<Prisma.$AccountSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSessionCountArgs} args - Arguments to filter AccountSessions to count.
     * @example
     * // Count the number of AccountSessions
     * const count = await prisma.accountSession.count({
     *   where: {
     *     // ... the filter for the AccountSessions we want to count
     *   }
     * })
    **/
    count<T extends AccountSessionCountArgs>(
      args?: Subset<T, AccountSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountSessionAggregateArgs>(args: Subset<T, AccountSessionAggregateArgs>): Prisma.PrismaPromise<GetAccountSessionAggregateType<T>>

    /**
     * Group by AccountSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountSessionGroupByArgs['orderBy'] }
        : { orderBy?: AccountSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountSession model
   */
  readonly fields: AccountSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountSession model
   */
  interface AccountSessionFieldRefs {
    readonly id: FieldRef<"AccountSession", 'Int'>
    readonly device: FieldRef<"AccountSession", 'Json'>
    readonly ip: FieldRef<"AccountSession", 'String'>
    readonly sessionId: FieldRef<"AccountSession", 'String'>
    readonly revoked: FieldRef<"AccountSession", 'Boolean'>
    readonly userId: FieldRef<"AccountSession", 'Int'>
    readonly exp: FieldRef<"AccountSession", 'DateTime'>
    readonly createdAt: FieldRef<"AccountSession", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountSession findUnique
   */
  export type AccountSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    /**
     * Filter, which AccountSession to fetch.
     */
    where: AccountSessionWhereUniqueInput
  }

  /**
   * AccountSession findUniqueOrThrow
   */
  export type AccountSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    /**
     * Filter, which AccountSession to fetch.
     */
    where: AccountSessionWhereUniqueInput
  }

  /**
   * AccountSession findFirst
   */
  export type AccountSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    /**
     * Filter, which AccountSession to fetch.
     */
    where?: AccountSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSessions to fetch.
     */
    orderBy?: AccountSessionOrderByWithRelationInput | AccountSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountSessions.
     */
    cursor?: AccountSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountSessions.
     */
    distinct?: AccountSessionScalarFieldEnum | AccountSessionScalarFieldEnum[]
  }

  /**
   * AccountSession findFirstOrThrow
   */
  export type AccountSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    /**
     * Filter, which AccountSession to fetch.
     */
    where?: AccountSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSessions to fetch.
     */
    orderBy?: AccountSessionOrderByWithRelationInput | AccountSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountSessions.
     */
    cursor?: AccountSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountSessions.
     */
    distinct?: AccountSessionScalarFieldEnum | AccountSessionScalarFieldEnum[]
  }

  /**
   * AccountSession findMany
   */
  export type AccountSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    /**
     * Filter, which AccountSessions to fetch.
     */
    where?: AccountSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSessions to fetch.
     */
    orderBy?: AccountSessionOrderByWithRelationInput | AccountSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountSessions.
     */
    cursor?: AccountSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSessions.
     */
    skip?: number
    distinct?: AccountSessionScalarFieldEnum | AccountSessionScalarFieldEnum[]
  }

  /**
   * AccountSession create
   */
  export type AccountSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountSession.
     */
    data: XOR<AccountSessionCreateInput, AccountSessionUncheckedCreateInput>
  }

  /**
   * AccountSession createMany
   */
  export type AccountSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountSessions.
     */
    data: AccountSessionCreateManyInput | AccountSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountSession createManyAndReturn
   */
  export type AccountSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AccountSessions.
     */
    data: AccountSessionCreateManyInput | AccountSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountSession update
   */
  export type AccountSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountSession.
     */
    data: XOR<AccountSessionUpdateInput, AccountSessionUncheckedUpdateInput>
    /**
     * Choose, which AccountSession to update.
     */
    where: AccountSessionWhereUniqueInput
  }

  /**
   * AccountSession updateMany
   */
  export type AccountSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountSessions.
     */
    data: XOR<AccountSessionUpdateManyMutationInput, AccountSessionUncheckedUpdateManyInput>
    /**
     * Filter which AccountSessions to update
     */
    where?: AccountSessionWhereInput
    /**
     * Limit how many AccountSessions to update.
     */
    limit?: number
  }

  /**
   * AccountSession updateManyAndReturn
   */
  export type AccountSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * The data used to update AccountSessions.
     */
    data: XOR<AccountSessionUpdateManyMutationInput, AccountSessionUncheckedUpdateManyInput>
    /**
     * Filter which AccountSessions to update
     */
    where?: AccountSessionWhereInput
    /**
     * Limit how many AccountSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountSession upsert
   */
  export type AccountSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountSession to update in case it exists.
     */
    where: AccountSessionWhereUniqueInput
    /**
     * In case the AccountSession found by the `where` argument doesn't exist, create a new AccountSession with this data.
     */
    create: XOR<AccountSessionCreateInput, AccountSessionUncheckedCreateInput>
    /**
     * In case the AccountSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountSessionUpdateInput, AccountSessionUncheckedUpdateInput>
  }

  /**
   * AccountSession delete
   */
  export type AccountSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
    /**
     * Filter which AccountSession to delete.
     */
    where: AccountSessionWhereUniqueInput
  }

  /**
   * AccountSession deleteMany
   */
  export type AccountSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountSessions to delete
     */
    where?: AccountSessionWhereInput
    /**
     * Limit how many AccountSessions to delete.
     */
    limit?: number
  }

  /**
   * AccountSession without action
   */
  export type AccountSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSession
     */
    select?: AccountSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSession
     */
    omit?: AccountSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSessionInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type NewsSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type NewsMinAggregateOutputType = {
    id: number | null
    title: string | null
    path: string | null
    description: string | null
    languageCode: string | null
    isArchived: boolean | null
    isCheck: boolean | null
    isTop: boolean | null
    type: $Enums.NewsTypeEnum | null
    authorId: number | null
    archivedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    path: string | null
    description: string | null
    languageCode: string | null
    isArchived: boolean | null
    isCheck: boolean | null
    isTop: boolean | null
    type: $Enums.NewsTypeEnum | null
    authorId: number | null
    archivedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    path: number
    description: number
    languageCode: number
    isArchived: number
    isCheck: number
    isTop: number
    type: number
    content: number
    authorId: number
    archivedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type NewsSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    path?: true
    description?: true
    languageCode?: true
    isArchived?: true
    isCheck?: true
    isTop?: true
    type?: true
    authorId?: true
    archivedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    path?: true
    description?: true
    languageCode?: true
    isArchived?: true
    isCheck?: true
    isTop?: true
    type?: true
    authorId?: true
    archivedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    path?: true
    description?: true
    languageCode?: true
    isArchived?: true
    isCheck?: true
    isTop?: true
    type?: true
    content?: true
    authorId?: true
    archivedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: number
    title: string
    path: string
    description: string
    languageCode: string | null
    isArchived: boolean
    isCheck: boolean
    isTop: boolean
    type: $Enums.NewsTypeEnum
    content: JsonValue[]
    authorId: number | null
    archivedAt: Date | null
    createdAt: Date
    updatedAt: Date | null
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    path?: boolean
    description?: boolean
    languageCode?: boolean
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type?: boolean
    content?: boolean
    authorId?: boolean
    archivedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | News$authorArgs<ExtArgs>
    files?: boolean | News$filesArgs<ExtArgs>
    tags?: boolean | News$tagsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    path?: boolean
    description?: boolean
    languageCode?: boolean
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type?: boolean
    content?: boolean
    authorId?: boolean
    archivedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | News$authorArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    path?: boolean
    description?: boolean
    languageCode?: boolean
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type?: boolean
    content?: boolean
    authorId?: boolean
    archivedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | News$authorArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    path?: boolean
    description?: boolean
    languageCode?: boolean
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type?: boolean
    content?: boolean
    authorId?: boolean
    archivedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "path" | "description" | "languageCode" | "isArchived" | "isCheck" | "isTop" | "type" | "content" | "authorId" | "archivedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | News$authorArgs<ExtArgs>
    files?: boolean | News$filesArgs<ExtArgs>
    tags?: boolean | News$tagsArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | News$authorArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | News$authorArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
      files: Prisma.$FilePayload<ExtArgs>[]
      tags: Prisma.$NewsTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      path: string
      description: string
      languageCode: string | null
      isArchived: boolean
      isCheck: boolean
      isTop: boolean
      type: $Enums.NewsTypeEnum
      content: Prisma.JsonValue[]
      authorId: number | null
      archivedAt: Date | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends News$authorArgs<ExtArgs> = {}>(args?: Subset<T, News$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    files<T extends News$filesArgs<ExtArgs> = {}>(args?: Subset<T, News$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends News$tagsArgs<ExtArgs> = {}>(args?: Subset<T, News$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'Int'>
    readonly title: FieldRef<"News", 'String'>
    readonly path: FieldRef<"News", 'String'>
    readonly description: FieldRef<"News", 'String'>
    readonly languageCode: FieldRef<"News", 'String'>
    readonly isArchived: FieldRef<"News", 'Boolean'>
    readonly isCheck: FieldRef<"News", 'Boolean'>
    readonly isTop: FieldRef<"News", 'Boolean'>
    readonly type: FieldRef<"News", 'NewsTypeEnum'>
    readonly content: FieldRef<"News", 'Json[]'>
    readonly authorId: FieldRef<"News", 'Int'>
    readonly archivedAt: FieldRef<"News", 'DateTime'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.author
   */
  export type News$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * News.files
   */
  export type News$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * News.tags
   */
  export type News$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    where?: NewsTagWhereInput
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    cursor?: NewsTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model NewsTag
   */

  export type AggregateNewsTag = {
    _count: NewsTagCountAggregateOutputType | null
    _avg: NewsTagAvgAggregateOutputType | null
    _sum: NewsTagSumAggregateOutputType | null
    _min: NewsTagMinAggregateOutputType | null
    _max: NewsTagMaxAggregateOutputType | null
  }

  export type NewsTagAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsTagSumAggregateOutputType = {
    id: number | null
  }

  export type NewsTagMinAggregateOutputType = {
    id: number | null
    name: string | null
    languageCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsTagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    languageCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsTagCountAggregateOutputType = {
    id: number
    name: number
    languageCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsTagAvgAggregateInputType = {
    id?: true
  }

  export type NewsTagSumAggregateInputType = {
    id?: true
  }

  export type NewsTagMinAggregateInputType = {
    id?: true
    name?: true
    languageCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsTagMaxAggregateInputType = {
    id?: true
    name?: true
    languageCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsTagCountAggregateInputType = {
    id?: true
    name?: true
    languageCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTag to aggregate.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsTags
    **/
    _count?: true | NewsTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsTagMaxAggregateInputType
  }

  export type GetNewsTagAggregateType<T extends NewsTagAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsTag[P]>
      : GetScalarType<T[P], AggregateNewsTag[P]>
  }




  export type NewsTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsTagWhereInput
    orderBy?: NewsTagOrderByWithAggregationInput | NewsTagOrderByWithAggregationInput[]
    by: NewsTagScalarFieldEnum[] | NewsTagScalarFieldEnum
    having?: NewsTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsTagCountAggregateInputType | true
    _avg?: NewsTagAvgAggregateInputType
    _sum?: NewsTagSumAggregateInputType
    _min?: NewsTagMinAggregateInputType
    _max?: NewsTagMaxAggregateInputType
  }

  export type NewsTagGroupByOutputType = {
    id: number
    name: string
    languageCode: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: NewsTagCountAggregateOutputType | null
    _avg: NewsTagAvgAggregateOutputType | null
    _sum: NewsTagSumAggregateOutputType | null
    _min: NewsTagMinAggregateOutputType | null
    _max: NewsTagMaxAggregateOutputType | null
  }

  type GetNewsTagGroupByPayload<T extends NewsTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsTagGroupByOutputType[P]>
            : GetScalarType<T[P], NewsTagGroupByOutputType[P]>
        }
      >
    >


  export type NewsTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | NewsTag$newsArgs<ExtArgs>
    _count?: boolean | NewsTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsTag"]>

  export type NewsTagSelectScalar = {
    id?: boolean
    name?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "languageCode" | "createdAt" | "updatedAt", ExtArgs["result"]["newsTag"]>
  export type NewsTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsTag$newsArgs<ExtArgs>
    _count?: boolean | NewsTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsTag"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      languageCode: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["newsTag"]>
    composites: {}
  }

  type NewsTagGetPayload<S extends boolean | null | undefined | NewsTagDefaultArgs> = $Result.GetResult<Prisma.$NewsTagPayload, S>

  type NewsTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsTagCountAggregateInputType | true
    }

  export interface NewsTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsTag'], meta: { name: 'NewsTag' } }
    /**
     * Find zero or one NewsTag that matches the filter.
     * @param {NewsTagFindUniqueArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsTagFindUniqueArgs>(args: SelectSubset<T, NewsTagFindUniqueArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsTagFindUniqueOrThrowArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsTagFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindFirstArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsTagFindFirstArgs>(args?: SelectSubset<T, NewsTagFindFirstArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindFirstOrThrowArgs} args - Arguments to find a NewsTag
     * @example
     * // Get one NewsTag
     * const newsTag = await prisma.newsTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsTagFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsTags
     * const newsTags = await prisma.newsTag.findMany()
     * 
     * // Get first 10 NewsTags
     * const newsTags = await prisma.newsTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsTagWithIdOnly = await prisma.newsTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsTagFindManyArgs>(args?: SelectSubset<T, NewsTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsTag.
     * @param {NewsTagCreateArgs} args - Arguments to create a NewsTag.
     * @example
     * // Create one NewsTag
     * const NewsTag = await prisma.newsTag.create({
     *   data: {
     *     // ... data to create a NewsTag
     *   }
     * })
     * 
     */
    create<T extends NewsTagCreateArgs>(args: SelectSubset<T, NewsTagCreateArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsTags.
     * @param {NewsTagCreateManyArgs} args - Arguments to create many NewsTags.
     * @example
     * // Create many NewsTags
     * const newsTag = await prisma.newsTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsTagCreateManyArgs>(args?: SelectSubset<T, NewsTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsTags and returns the data saved in the database.
     * @param {NewsTagCreateManyAndReturnArgs} args - Arguments to create many NewsTags.
     * @example
     * // Create many NewsTags
     * const newsTag = await prisma.newsTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsTags and only return the `id`
     * const newsTagWithIdOnly = await prisma.newsTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsTagCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsTag.
     * @param {NewsTagDeleteArgs} args - Arguments to delete one NewsTag.
     * @example
     * // Delete one NewsTag
     * const NewsTag = await prisma.newsTag.delete({
     *   where: {
     *     // ... filter to delete one NewsTag
     *   }
     * })
     * 
     */
    delete<T extends NewsTagDeleteArgs>(args: SelectSubset<T, NewsTagDeleteArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsTag.
     * @param {NewsTagUpdateArgs} args - Arguments to update one NewsTag.
     * @example
     * // Update one NewsTag
     * const newsTag = await prisma.newsTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsTagUpdateArgs>(args: SelectSubset<T, NewsTagUpdateArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsTags.
     * @param {NewsTagDeleteManyArgs} args - Arguments to filter NewsTags to delete.
     * @example
     * // Delete a few NewsTags
     * const { count } = await prisma.newsTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsTagDeleteManyArgs>(args?: SelectSubset<T, NewsTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsTags
     * const newsTag = await prisma.newsTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsTagUpdateManyArgs>(args: SelectSubset<T, NewsTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsTags and returns the data updated in the database.
     * @param {NewsTagUpdateManyAndReturnArgs} args - Arguments to update many NewsTags.
     * @example
     * // Update many NewsTags
     * const newsTag = await prisma.newsTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsTags and only return the `id`
     * const newsTagWithIdOnly = await prisma.newsTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsTagUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsTag.
     * @param {NewsTagUpsertArgs} args - Arguments to update or create a NewsTag.
     * @example
     * // Update or create a NewsTag
     * const newsTag = await prisma.newsTag.upsert({
     *   create: {
     *     // ... data to create a NewsTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsTag we want to update
     *   }
     * })
     */
    upsert<T extends NewsTagUpsertArgs>(args: SelectSubset<T, NewsTagUpsertArgs<ExtArgs>>): Prisma__NewsTagClient<$Result.GetResult<Prisma.$NewsTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagCountArgs} args - Arguments to filter NewsTags to count.
     * @example
     * // Count the number of NewsTags
     * const count = await prisma.newsTag.count({
     *   where: {
     *     // ... the filter for the NewsTags we want to count
     *   }
     * })
    **/
    count<T extends NewsTagCountArgs>(
      args?: Subset<T, NewsTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsTagAggregateArgs>(args: Subset<T, NewsTagAggregateArgs>): Prisma.PrismaPromise<GetNewsTagAggregateType<T>>

    /**
     * Group by NewsTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsTagGroupByArgs['orderBy'] }
        : { orderBy?: NewsTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsTag model
   */
  readonly fields: NewsTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsTag$newsArgs<ExtArgs> = {}>(args?: Subset<T, NewsTag$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsTag model
   */
  interface NewsTagFieldRefs {
    readonly id: FieldRef<"NewsTag", 'Int'>
    readonly name: FieldRef<"NewsTag", 'String'>
    readonly languageCode: FieldRef<"NewsTag", 'String'>
    readonly createdAt: FieldRef<"NewsTag", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsTag findUnique
   */
  export type NewsTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag findUniqueOrThrow
   */
  export type NewsTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag findFirst
   */
  export type NewsTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTags.
     */
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag findFirstOrThrow
   */
  export type NewsTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTag to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsTags.
     */
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag findMany
   */
  export type NewsTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter, which NewsTags to fetch.
     */
    where?: NewsTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsTags to fetch.
     */
    orderBy?: NewsTagOrderByWithRelationInput | NewsTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsTags.
     */
    cursor?: NewsTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsTags.
     */
    skip?: number
    distinct?: NewsTagScalarFieldEnum | NewsTagScalarFieldEnum[]
  }

  /**
   * NewsTag create
   */
  export type NewsTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsTag.
     */
    data: XOR<NewsTagCreateInput, NewsTagUncheckedCreateInput>
  }

  /**
   * NewsTag createMany
   */
  export type NewsTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsTags.
     */
    data: NewsTagCreateManyInput | NewsTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTag createManyAndReturn
   */
  export type NewsTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * The data used to create many NewsTags.
     */
    data: NewsTagCreateManyInput | NewsTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsTag update
   */
  export type NewsTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsTag.
     */
    data: XOR<NewsTagUpdateInput, NewsTagUncheckedUpdateInput>
    /**
     * Choose, which NewsTag to update.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag updateMany
   */
  export type NewsTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsTags.
     */
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyInput>
    /**
     * Filter which NewsTags to update
     */
    where?: NewsTagWhereInput
    /**
     * Limit how many NewsTags to update.
     */
    limit?: number
  }

  /**
   * NewsTag updateManyAndReturn
   */
  export type NewsTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * The data used to update NewsTags.
     */
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyInput>
    /**
     * Filter which NewsTags to update
     */
    where?: NewsTagWhereInput
    /**
     * Limit how many NewsTags to update.
     */
    limit?: number
  }

  /**
   * NewsTag upsert
   */
  export type NewsTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsTag to update in case it exists.
     */
    where: NewsTagWhereUniqueInput
    /**
     * In case the NewsTag found by the `where` argument doesn't exist, create a new NewsTag with this data.
     */
    create: XOR<NewsTagCreateInput, NewsTagUncheckedCreateInput>
    /**
     * In case the NewsTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsTagUpdateInput, NewsTagUncheckedUpdateInput>
  }

  /**
   * NewsTag delete
   */
  export type NewsTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
    /**
     * Filter which NewsTag to delete.
     */
    where: NewsTagWhereUniqueInput
  }

  /**
   * NewsTag deleteMany
   */
  export type NewsTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsTags to delete
     */
    where?: NewsTagWhereInput
    /**
     * Limit how many NewsTags to delete.
     */
    limit?: number
  }

  /**
   * NewsTag.news
   */
  export type NewsTag$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * NewsTag without action
   */
  export type NewsTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsTag
     */
    select?: NewsTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsTag
     */
    omit?: NewsTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsTagInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    name: string | null
    href: string | null
    fileName: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    href: string | null
    fileName: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    href: number
    fileName: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    href?: true
    fileName?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    href?: true
    fileName?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    href?: true
    fileName?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    name: string
    href: string
    fileName: string | null
    type: string
    createdAt: Date
    updatedAt: Date | null
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    href?: boolean
    fileName?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    href?: boolean
    fileName?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    href?: boolean
    fileName?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    href?: boolean
    fileName?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "href" | "fileName" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      href: string
      fileName: string | null
      type: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly href: FieldRef<"Contact", 'String'>
    readonly fileName: FieldRef<"Contact", 'String'>
    readonly type: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    newsId: number | null
    menuId: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    newsId: number | null
    menuId: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    name: string | null
    mimeType: string | null
    extension: string | null
    newsId: number | null
    menuId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    mimeType: string | null
    extension: string | null
    newsId: number | null
    menuId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    name: number
    mimeType: number
    extension: number
    newsId: number
    menuId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    newsId?: true
    menuId?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    newsId?: true
    menuId?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    name?: true
    mimeType?: true
    extension?: true
    newsId?: true
    menuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    name?: true
    mimeType?: true
    extension?: true
    newsId?: true
    menuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    name?: true
    mimeType?: true
    extension?: true
    newsId?: true
    menuId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    name: string
    mimeType: string
    extension: string
    newsId: number | null
    menuId: number | null
    createdAt: Date
    updatedAt: Date | null
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mimeType?: boolean
    extension?: boolean
    newsId?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | File$newsArgs<ExtArgs>
    menu?: boolean | File$menuArgs<ExtArgs>
    banner?: boolean | File$bannerArgs<ExtArgs>
    Partner?: boolean | File$PartnerArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mimeType?: boolean
    extension?: boolean
    newsId?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | File$newsArgs<ExtArgs>
    menu?: boolean | File$menuArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mimeType?: boolean
    extension?: boolean
    newsId?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | File$newsArgs<ExtArgs>
    menu?: boolean | File$menuArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    name?: boolean
    mimeType?: boolean
    extension?: boolean
    newsId?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mimeType" | "extension" | "newsId" | "menuId" | "createdAt" | "updatedAt", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | File$newsArgs<ExtArgs>
    menu?: boolean | File$menuArgs<ExtArgs>
    banner?: boolean | File$bannerArgs<ExtArgs>
    Partner?: boolean | File$PartnerArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | File$newsArgs<ExtArgs>
    menu?: boolean | File$menuArgs<ExtArgs>
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | File$newsArgs<ExtArgs>
    menu?: boolean | File$menuArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs> | null
      menu: Prisma.$MenuPayload<ExtArgs> | null
      banner: Prisma.$BannerPayload<ExtArgs>[]
      Partner: Prisma.$PartnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      mimeType: string
      extension: string
      newsId: number | null
      menuId: number | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends File$newsArgs<ExtArgs> = {}>(args?: Subset<T, File$newsArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    menu<T extends File$menuArgs<ExtArgs> = {}>(args?: Subset<T, File$menuArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    banner<T extends File$bannerArgs<ExtArgs> = {}>(args?: Subset<T, File$bannerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Partner<T extends File$PartnerArgs<ExtArgs> = {}>(args?: Subset<T, File$PartnerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly name: FieldRef<"File", 'String'>
    readonly mimeType: FieldRef<"File", 'String'>
    readonly extension: FieldRef<"File", 'String'>
    readonly newsId: FieldRef<"File", 'Int'>
    readonly menuId: FieldRef<"File", 'Int'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.news
   */
  export type File$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
  }

  /**
   * File.menu
   */
  export type File$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
  }

  /**
   * File.banner
   */
  export type File$bannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    cursor?: BannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * File.Partner
   */
  export type File$PartnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    cursor?: PartnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Place
   */

  export type AggregatePlace = {
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  export type PlaceAvgAggregateOutputType = {
    id: number | null
  }

  export type PlaceSumAggregateOutputType = {
    id: number | null
  }

  export type PlaceMinAggregateOutputType = {
    id: number | null
    title: string | null
    name: string | null
    languageCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    name: string | null
    languageCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaceCountAggregateOutputType = {
    id: number
    title: number
    name: number
    languageCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaceAvgAggregateInputType = {
    id?: true
  }

  export type PlaceSumAggregateInputType = {
    id?: true
  }

  export type PlaceMinAggregateInputType = {
    id?: true
    title?: true
    name?: true
    languageCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaceMaxAggregateInputType = {
    id?: true
    title?: true
    name?: true
    languageCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaceCountAggregateInputType = {
    id?: true
    title?: true
    name?: true
    languageCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Place to aggregate.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceMaxAggregateInputType
  }

  export type GetPlaceAggregateType<T extends PlaceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace[P]>
      : GetScalarType<T[P], AggregatePlace[P]>
  }




  export type PlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithAggregationInput | PlaceOrderByWithAggregationInput[]
    by: PlaceScalarFieldEnum[] | PlaceScalarFieldEnum
    having?: PlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceCountAggregateInputType | true
    _avg?: PlaceAvgAggregateInputType
    _sum?: PlaceSumAggregateInputType
    _min?: PlaceMinAggregateInputType
    _max?: PlaceMaxAggregateInputType
  }

  export type PlaceGroupByOutputType = {
    id: number
    title: string
    name: string | null
    languageCode: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  type GetPlaceGroupByPayload<T extends PlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceGroupByOutputType[P]>
        }
      >
    >


  export type PlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    name?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    interactiveArea?: boolean | Place$interactiveAreaArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    name?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    name?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectScalar = {
    id?: boolean
    title?: boolean
    name?: boolean
    languageCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "name" | "languageCode" | "createdAt" | "updatedAt", ExtArgs["result"]["place"]>
  export type PlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactiveArea?: boolean | Place$interactiveAreaArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Place"
    objects: {
      interactiveArea: Prisma.$InteractiveAreaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      name: string | null
      languageCode: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["place"]>
    composites: {}
  }

  type PlaceGetPayload<S extends boolean | null | undefined | PlaceDefaultArgs> = $Result.GetResult<Prisma.$PlacePayload, S>

  type PlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaceCountAggregateInputType | true
    }

  export interface PlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Place'], meta: { name: 'Place' } }
    /**
     * Find zero or one Place that matches the filter.
     * @param {PlaceFindUniqueArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceFindUniqueArgs>(args: SelectSubset<T, PlaceFindUniqueArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Place that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaceFindUniqueOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceFindFirstArgs>(args?: SelectSubset<T, PlaceFindFirstArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.place.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.place.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeWithIdOnly = await prisma.place.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceFindManyArgs>(args?: SelectSubset<T, PlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Place.
     * @param {PlaceCreateArgs} args - Arguments to create a Place.
     * @example
     * // Create one Place
     * const Place = await prisma.place.create({
     *   data: {
     *     // ... data to create a Place
     *   }
     * })
     * 
     */
    create<T extends PlaceCreateArgs>(args: SelectSubset<T, PlaceCreateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Places.
     * @param {PlaceCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceCreateManyArgs>(args?: SelectSubset<T, PlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Places and returns the data saved in the database.
     * @param {PlaceCreateManyAndReturnArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaceCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Place.
     * @param {PlaceDeleteArgs} args - Arguments to delete one Place.
     * @example
     * // Delete one Place
     * const Place = await prisma.place.delete({
     *   where: {
     *     // ... filter to delete one Place
     *   }
     * })
     * 
     */
    delete<T extends PlaceDeleteArgs>(args: SelectSubset<T, PlaceDeleteArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Place.
     * @param {PlaceUpdateArgs} args - Arguments to update one Place.
     * @example
     * // Update one Place
     * const place = await prisma.place.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceUpdateArgs>(args: SelectSubset<T, PlaceUpdateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Places.
     * @param {PlaceDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.place.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceDeleteManyArgs>(args?: SelectSubset<T, PlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceUpdateManyArgs>(args: SelectSubset<T, PlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places and returns the data updated in the database.
     * @param {PlaceUpdateManyAndReturnArgs} args - Arguments to update many Places.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaceUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Place.
     * @param {PlaceUpsertArgs} args - Arguments to update or create a Place.
     * @example
     * // Update or create a Place
     * const place = await prisma.place.upsert({
     *   create: {
     *     // ... data to create a Place
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place we want to update
     *   }
     * })
     */
    upsert<T extends PlaceUpsertArgs>(args: SelectSubset<T, PlaceUpsertArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.place.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlaceCountArgs>(
      args?: Subset<T, PlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaceAggregateArgs>(args: Subset<T, PlaceAggregateArgs>): Prisma.PrismaPromise<GetPlaceAggregateType<T>>

    /**
     * Group by Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceGroupByArgs['orderBy'] }
        : { orderBy?: PlaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Place model
   */
  readonly fields: PlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Place.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interactiveArea<T extends Place$interactiveAreaArgs<ExtArgs> = {}>(args?: Subset<T, Place$interactiveAreaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Place model
   */
  interface PlaceFieldRefs {
    readonly id: FieldRef<"Place", 'Int'>
    readonly title: FieldRef<"Place", 'String'>
    readonly name: FieldRef<"Place", 'String'>
    readonly languageCode: FieldRef<"Place", 'String'>
    readonly createdAt: FieldRef<"Place", 'DateTime'>
    readonly updatedAt: FieldRef<"Place", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Place findUnique
   */
  export type PlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findUniqueOrThrow
   */
  export type PlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findFirst
   */
  export type PlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findFirstOrThrow
   */
  export type PlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findMany
   */
  export type PlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place create
   */
  export type PlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Place.
     */
    data: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
  }

  /**
   * Place createMany
   */
  export type PlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Place createManyAndReturn
   */
  export type PlaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Place update
   */
  export type PlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Place.
     */
    data: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
    /**
     * Choose, which Place to update.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place updateMany
   */
  export type PlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
  }

  /**
   * Place updateManyAndReturn
   */
  export type PlaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
  }

  /**
   * Place upsert
   */
  export type PlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Place to update in case it exists.
     */
    where: PlaceWhereUniqueInput
    /**
     * In case the Place found by the `where` argument doesn't exist, create a new Place with this data.
     */
    create: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
    /**
     * In case the Place was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
  }

  /**
   * Place delete
   */
  export type PlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter which Place to delete.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place deleteMany
   */
  export type PlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to delete.
     */
    limit?: number
  }

  /**
   * Place.interactiveArea
   */
  export type Place$interactiveAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    where?: InteractiveAreaWhereInput
    orderBy?: InteractiveAreaOrderByWithRelationInput | InteractiveAreaOrderByWithRelationInput[]
    cursor?: InteractiveAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractiveAreaScalarFieldEnum | InteractiveAreaScalarFieldEnum[]
  }

  /**
   * Place without action
   */
  export type PlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
  }


  /**
   * Model InteractiveArea
   */

  export type AggregateInteractiveArea = {
    _count: InteractiveAreaCountAggregateOutputType | null
    _avg: InteractiveAreaAvgAggregateOutputType | null
    _sum: InteractiveAreaSumAggregateOutputType | null
    _min: InteractiveAreaMinAggregateOutputType | null
    _max: InteractiveAreaMaxAggregateOutputType | null
  }

  export type InteractiveAreaAvgAggregateOutputType = {
    id: number | null
    membersCount: number | null
    placeId: number | null
  }

  export type InteractiveAreaSumAggregateOutputType = {
    id: number | null
    membersCount: number | null
    placeId: number | null
  }

  export type InteractiveAreaMinAggregateOutputType = {
    id: number | null
    chairmanFullName: string | null
    chairmanPhoto: string | null
    phoneNumber: string | null
    email: string | null
    workingTime: string | null
    address: string | null
    membersCount: number | null
    placeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InteractiveAreaMaxAggregateOutputType = {
    id: number | null
    chairmanFullName: string | null
    chairmanPhoto: string | null
    phoneNumber: string | null
    email: string | null
    workingTime: string | null
    address: string | null
    membersCount: number | null
    placeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InteractiveAreaCountAggregateOutputType = {
    id: number
    chairmanFullName: number
    chairmanPhoto: number
    phoneNumber: number
    email: number
    workingTime: number
    address: number
    membersCount: number
    placeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InteractiveAreaAvgAggregateInputType = {
    id?: true
    membersCount?: true
    placeId?: true
  }

  export type InteractiveAreaSumAggregateInputType = {
    id?: true
    membersCount?: true
    placeId?: true
  }

  export type InteractiveAreaMinAggregateInputType = {
    id?: true
    chairmanFullName?: true
    chairmanPhoto?: true
    phoneNumber?: true
    email?: true
    workingTime?: true
    address?: true
    membersCount?: true
    placeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InteractiveAreaMaxAggregateInputType = {
    id?: true
    chairmanFullName?: true
    chairmanPhoto?: true
    phoneNumber?: true
    email?: true
    workingTime?: true
    address?: true
    membersCount?: true
    placeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InteractiveAreaCountAggregateInputType = {
    id?: true
    chairmanFullName?: true
    chairmanPhoto?: true
    phoneNumber?: true
    email?: true
    workingTime?: true
    address?: true
    membersCount?: true
    placeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InteractiveAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InteractiveArea to aggregate.
     */
    where?: InteractiveAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InteractiveAreas to fetch.
     */
    orderBy?: InteractiveAreaOrderByWithRelationInput | InteractiveAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteractiveAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InteractiveAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InteractiveAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InteractiveAreas
    **/
    _count?: true | InteractiveAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InteractiveAreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InteractiveAreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteractiveAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteractiveAreaMaxAggregateInputType
  }

  export type GetInteractiveAreaAggregateType<T extends InteractiveAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateInteractiveArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteractiveArea[P]>
      : GetScalarType<T[P], AggregateInteractiveArea[P]>
  }




  export type InteractiveAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractiveAreaWhereInput
    orderBy?: InteractiveAreaOrderByWithAggregationInput | InteractiveAreaOrderByWithAggregationInput[]
    by: InteractiveAreaScalarFieldEnum[] | InteractiveAreaScalarFieldEnum
    having?: InteractiveAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteractiveAreaCountAggregateInputType | true
    _avg?: InteractiveAreaAvgAggregateInputType
    _sum?: InteractiveAreaSumAggregateInputType
    _min?: InteractiveAreaMinAggregateInputType
    _max?: InteractiveAreaMaxAggregateInputType
  }

  export type InteractiveAreaGroupByOutputType = {
    id: number
    chairmanFullName: string
    chairmanPhoto: string
    phoneNumber: string | null
    email: string | null
    workingTime: string | null
    address: string
    membersCount: number
    placeId: number
    createdAt: Date
    updatedAt: Date | null
    _count: InteractiveAreaCountAggregateOutputType | null
    _avg: InteractiveAreaAvgAggregateOutputType | null
    _sum: InteractiveAreaSumAggregateOutputType | null
    _min: InteractiveAreaMinAggregateOutputType | null
    _max: InteractiveAreaMaxAggregateOutputType | null
  }

  type GetInteractiveAreaGroupByPayload<T extends InteractiveAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteractiveAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteractiveAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractiveAreaGroupByOutputType[P]>
            : GetScalarType<T[P], InteractiveAreaGroupByOutputType[P]>
        }
      >
    >


  export type InteractiveAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chairmanFullName?: boolean
    chairmanPhoto?: boolean
    phoneNumber?: boolean
    email?: boolean
    workingTime?: boolean
    address?: boolean
    membersCount?: boolean
    placeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interactiveArea"]>

  export type InteractiveAreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chairmanFullName?: boolean
    chairmanPhoto?: boolean
    phoneNumber?: boolean
    email?: boolean
    workingTime?: boolean
    address?: boolean
    membersCount?: boolean
    placeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interactiveArea"]>

  export type InteractiveAreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chairmanFullName?: boolean
    chairmanPhoto?: boolean
    phoneNumber?: boolean
    email?: boolean
    workingTime?: boolean
    address?: boolean
    membersCount?: boolean
    placeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interactiveArea"]>

  export type InteractiveAreaSelectScalar = {
    id?: boolean
    chairmanFullName?: boolean
    chairmanPhoto?: boolean
    phoneNumber?: boolean
    email?: boolean
    workingTime?: boolean
    address?: boolean
    membersCount?: boolean
    placeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InteractiveAreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chairmanFullName" | "chairmanPhoto" | "phoneNumber" | "email" | "workingTime" | "address" | "membersCount" | "placeId" | "createdAt" | "updatedAt", ExtArgs["result"]["interactiveArea"]>
  export type InteractiveAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }
  export type InteractiveAreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }
  export type InteractiveAreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }

  export type $InteractiveAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InteractiveArea"
    objects: {
      place: Prisma.$PlacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chairmanFullName: string
      chairmanPhoto: string
      phoneNumber: string | null
      email: string | null
      workingTime: string | null
      address: string
      membersCount: number
      placeId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["interactiveArea"]>
    composites: {}
  }

  type InteractiveAreaGetPayload<S extends boolean | null | undefined | InteractiveAreaDefaultArgs> = $Result.GetResult<Prisma.$InteractiveAreaPayload, S>

  type InteractiveAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteractiveAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteractiveAreaCountAggregateInputType | true
    }

  export interface InteractiveAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InteractiveArea'], meta: { name: 'InteractiveArea' } }
    /**
     * Find zero or one InteractiveArea that matches the filter.
     * @param {InteractiveAreaFindUniqueArgs} args - Arguments to find a InteractiveArea
     * @example
     * // Get one InteractiveArea
     * const interactiveArea = await prisma.interactiveArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractiveAreaFindUniqueArgs>(args: SelectSubset<T, InteractiveAreaFindUniqueArgs<ExtArgs>>): Prisma__InteractiveAreaClient<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InteractiveArea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractiveAreaFindUniqueOrThrowArgs} args - Arguments to find a InteractiveArea
     * @example
     * // Get one InteractiveArea
     * const interactiveArea = await prisma.interactiveArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractiveAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, InteractiveAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteractiveAreaClient<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InteractiveArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveAreaFindFirstArgs} args - Arguments to find a InteractiveArea
     * @example
     * // Get one InteractiveArea
     * const interactiveArea = await prisma.interactiveArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractiveAreaFindFirstArgs>(args?: SelectSubset<T, InteractiveAreaFindFirstArgs<ExtArgs>>): Prisma__InteractiveAreaClient<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InteractiveArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveAreaFindFirstOrThrowArgs} args - Arguments to find a InteractiveArea
     * @example
     * // Get one InteractiveArea
     * const interactiveArea = await prisma.interactiveArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractiveAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, InteractiveAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteractiveAreaClient<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InteractiveAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InteractiveAreas
     * const interactiveAreas = await prisma.interactiveArea.findMany()
     * 
     * // Get first 10 InteractiveAreas
     * const interactiveAreas = await prisma.interactiveArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interactiveAreaWithIdOnly = await prisma.interactiveArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteractiveAreaFindManyArgs>(args?: SelectSubset<T, InteractiveAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InteractiveArea.
     * @param {InteractiveAreaCreateArgs} args - Arguments to create a InteractiveArea.
     * @example
     * // Create one InteractiveArea
     * const InteractiveArea = await prisma.interactiveArea.create({
     *   data: {
     *     // ... data to create a InteractiveArea
     *   }
     * })
     * 
     */
    create<T extends InteractiveAreaCreateArgs>(args: SelectSubset<T, InteractiveAreaCreateArgs<ExtArgs>>): Prisma__InteractiveAreaClient<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InteractiveAreas.
     * @param {InteractiveAreaCreateManyArgs} args - Arguments to create many InteractiveAreas.
     * @example
     * // Create many InteractiveAreas
     * const interactiveArea = await prisma.interactiveArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteractiveAreaCreateManyArgs>(args?: SelectSubset<T, InteractiveAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InteractiveAreas and returns the data saved in the database.
     * @param {InteractiveAreaCreateManyAndReturnArgs} args - Arguments to create many InteractiveAreas.
     * @example
     * // Create many InteractiveAreas
     * const interactiveArea = await prisma.interactiveArea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InteractiveAreas and only return the `id`
     * const interactiveAreaWithIdOnly = await prisma.interactiveArea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InteractiveAreaCreateManyAndReturnArgs>(args?: SelectSubset<T, InteractiveAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InteractiveArea.
     * @param {InteractiveAreaDeleteArgs} args - Arguments to delete one InteractiveArea.
     * @example
     * // Delete one InteractiveArea
     * const InteractiveArea = await prisma.interactiveArea.delete({
     *   where: {
     *     // ... filter to delete one InteractiveArea
     *   }
     * })
     * 
     */
    delete<T extends InteractiveAreaDeleteArgs>(args: SelectSubset<T, InteractiveAreaDeleteArgs<ExtArgs>>): Prisma__InteractiveAreaClient<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InteractiveArea.
     * @param {InteractiveAreaUpdateArgs} args - Arguments to update one InteractiveArea.
     * @example
     * // Update one InteractiveArea
     * const interactiveArea = await prisma.interactiveArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteractiveAreaUpdateArgs>(args: SelectSubset<T, InteractiveAreaUpdateArgs<ExtArgs>>): Prisma__InteractiveAreaClient<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InteractiveAreas.
     * @param {InteractiveAreaDeleteManyArgs} args - Arguments to filter InteractiveAreas to delete.
     * @example
     * // Delete a few InteractiveAreas
     * const { count } = await prisma.interactiveArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteractiveAreaDeleteManyArgs>(args?: SelectSubset<T, InteractiveAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InteractiveAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InteractiveAreas
     * const interactiveArea = await prisma.interactiveArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteractiveAreaUpdateManyArgs>(args: SelectSubset<T, InteractiveAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InteractiveAreas and returns the data updated in the database.
     * @param {InteractiveAreaUpdateManyAndReturnArgs} args - Arguments to update many InteractiveAreas.
     * @example
     * // Update many InteractiveAreas
     * const interactiveArea = await prisma.interactiveArea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InteractiveAreas and only return the `id`
     * const interactiveAreaWithIdOnly = await prisma.interactiveArea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InteractiveAreaUpdateManyAndReturnArgs>(args: SelectSubset<T, InteractiveAreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InteractiveArea.
     * @param {InteractiveAreaUpsertArgs} args - Arguments to update or create a InteractiveArea.
     * @example
     * // Update or create a InteractiveArea
     * const interactiveArea = await prisma.interactiveArea.upsert({
     *   create: {
     *     // ... data to create a InteractiveArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InteractiveArea we want to update
     *   }
     * })
     */
    upsert<T extends InteractiveAreaUpsertArgs>(args: SelectSubset<T, InteractiveAreaUpsertArgs<ExtArgs>>): Prisma__InteractiveAreaClient<$Result.GetResult<Prisma.$InteractiveAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InteractiveAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveAreaCountArgs} args - Arguments to filter InteractiveAreas to count.
     * @example
     * // Count the number of InteractiveAreas
     * const count = await prisma.interactiveArea.count({
     *   where: {
     *     // ... the filter for the InteractiveAreas we want to count
     *   }
     * })
    **/
    count<T extends InteractiveAreaCountArgs>(
      args?: Subset<T, InteractiveAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractiveAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InteractiveArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InteractiveAreaAggregateArgs>(args: Subset<T, InteractiveAreaAggregateArgs>): Prisma.PrismaPromise<GetInteractiveAreaAggregateType<T>>

    /**
     * Group by InteractiveArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractiveAreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InteractiveAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractiveAreaGroupByArgs['orderBy'] }
        : { orderBy?: InteractiveAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InteractiveAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteractiveAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InteractiveArea model
   */
  readonly fields: InteractiveAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InteractiveArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractiveAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    place<T extends PlaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaceDefaultArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InteractiveArea model
   */
  interface InteractiveAreaFieldRefs {
    readonly id: FieldRef<"InteractiveArea", 'Int'>
    readonly chairmanFullName: FieldRef<"InteractiveArea", 'String'>
    readonly chairmanPhoto: FieldRef<"InteractiveArea", 'String'>
    readonly phoneNumber: FieldRef<"InteractiveArea", 'String'>
    readonly email: FieldRef<"InteractiveArea", 'String'>
    readonly workingTime: FieldRef<"InteractiveArea", 'String'>
    readonly address: FieldRef<"InteractiveArea", 'String'>
    readonly membersCount: FieldRef<"InteractiveArea", 'Int'>
    readonly placeId: FieldRef<"InteractiveArea", 'Int'>
    readonly createdAt: FieldRef<"InteractiveArea", 'DateTime'>
    readonly updatedAt: FieldRef<"InteractiveArea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InteractiveArea findUnique
   */
  export type InteractiveAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    /**
     * Filter, which InteractiveArea to fetch.
     */
    where: InteractiveAreaWhereUniqueInput
  }

  /**
   * InteractiveArea findUniqueOrThrow
   */
  export type InteractiveAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    /**
     * Filter, which InteractiveArea to fetch.
     */
    where: InteractiveAreaWhereUniqueInput
  }

  /**
   * InteractiveArea findFirst
   */
  export type InteractiveAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    /**
     * Filter, which InteractiveArea to fetch.
     */
    where?: InteractiveAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InteractiveAreas to fetch.
     */
    orderBy?: InteractiveAreaOrderByWithRelationInput | InteractiveAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InteractiveAreas.
     */
    cursor?: InteractiveAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InteractiveAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InteractiveAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InteractiveAreas.
     */
    distinct?: InteractiveAreaScalarFieldEnum | InteractiveAreaScalarFieldEnum[]
  }

  /**
   * InteractiveArea findFirstOrThrow
   */
  export type InteractiveAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    /**
     * Filter, which InteractiveArea to fetch.
     */
    where?: InteractiveAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InteractiveAreas to fetch.
     */
    orderBy?: InteractiveAreaOrderByWithRelationInput | InteractiveAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InteractiveAreas.
     */
    cursor?: InteractiveAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InteractiveAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InteractiveAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InteractiveAreas.
     */
    distinct?: InteractiveAreaScalarFieldEnum | InteractiveAreaScalarFieldEnum[]
  }

  /**
   * InteractiveArea findMany
   */
  export type InteractiveAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    /**
     * Filter, which InteractiveAreas to fetch.
     */
    where?: InteractiveAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InteractiveAreas to fetch.
     */
    orderBy?: InteractiveAreaOrderByWithRelationInput | InteractiveAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InteractiveAreas.
     */
    cursor?: InteractiveAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InteractiveAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InteractiveAreas.
     */
    skip?: number
    distinct?: InteractiveAreaScalarFieldEnum | InteractiveAreaScalarFieldEnum[]
  }

  /**
   * InteractiveArea create
   */
  export type InteractiveAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a InteractiveArea.
     */
    data: XOR<InteractiveAreaCreateInput, InteractiveAreaUncheckedCreateInput>
  }

  /**
   * InteractiveArea createMany
   */
  export type InteractiveAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InteractiveAreas.
     */
    data: InteractiveAreaCreateManyInput | InteractiveAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InteractiveArea createManyAndReturn
   */
  export type InteractiveAreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * The data used to create many InteractiveAreas.
     */
    data: InteractiveAreaCreateManyInput | InteractiveAreaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InteractiveArea update
   */
  export type InteractiveAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a InteractiveArea.
     */
    data: XOR<InteractiveAreaUpdateInput, InteractiveAreaUncheckedUpdateInput>
    /**
     * Choose, which InteractiveArea to update.
     */
    where: InteractiveAreaWhereUniqueInput
  }

  /**
   * InteractiveArea updateMany
   */
  export type InteractiveAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InteractiveAreas.
     */
    data: XOR<InteractiveAreaUpdateManyMutationInput, InteractiveAreaUncheckedUpdateManyInput>
    /**
     * Filter which InteractiveAreas to update
     */
    where?: InteractiveAreaWhereInput
    /**
     * Limit how many InteractiveAreas to update.
     */
    limit?: number
  }

  /**
   * InteractiveArea updateManyAndReturn
   */
  export type InteractiveAreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * The data used to update InteractiveAreas.
     */
    data: XOR<InteractiveAreaUpdateManyMutationInput, InteractiveAreaUncheckedUpdateManyInput>
    /**
     * Filter which InteractiveAreas to update
     */
    where?: InteractiveAreaWhereInput
    /**
     * Limit how many InteractiveAreas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InteractiveArea upsert
   */
  export type InteractiveAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the InteractiveArea to update in case it exists.
     */
    where: InteractiveAreaWhereUniqueInput
    /**
     * In case the InteractiveArea found by the `where` argument doesn't exist, create a new InteractiveArea with this data.
     */
    create: XOR<InteractiveAreaCreateInput, InteractiveAreaUncheckedCreateInput>
    /**
     * In case the InteractiveArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractiveAreaUpdateInput, InteractiveAreaUncheckedUpdateInput>
  }

  /**
   * InteractiveArea delete
   */
  export type InteractiveAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
    /**
     * Filter which InteractiveArea to delete.
     */
    where: InteractiveAreaWhereUniqueInput
  }

  /**
   * InteractiveArea deleteMany
   */
  export type InteractiveAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InteractiveAreas to delete
     */
    where?: InteractiveAreaWhereInput
    /**
     * Limit how many InteractiveAreas to delete.
     */
    limit?: number
  }

  /**
   * InteractiveArea without action
   */
  export type InteractiveAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractiveArea
     */
    select?: InteractiveAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InteractiveArea
     */
    omit?: InteractiveAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractiveAreaInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    id: number | null
    fileId: number | null
  }

  export type BannerSumAggregateOutputType = {
    id: number | null
    fileId: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: number | null
    type: $Enums.BannerTypeEnum | null
    url: string | null
    fileId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: number | null
    type: $Enums.BannerTypeEnum | null
    url: string | null
    fileId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    type: number
    url: number
    fileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    id?: true
    fileId?: true
  }

  export type BannerSumAggregateInputType = {
    id?: true
    fileId?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    type?: true
    url?: true
    fileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    type?: true
    url?: true
    fileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    type?: true
    url?: true
    fileId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: number
    type: $Enums.BannerTypeEnum
    url: string
    fileId: number
    createdAt: Date
    updatedAt: Date | null
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    fileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    fileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    fileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    file?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    type?: boolean
    url?: boolean
    fileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "url" | "fileId" | "createdAt" | "updatedAt", ExtArgs["result"]["banner"]>
  export type BannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }
  export type BannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }
  export type BannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FileDefaultArgs<ExtArgs>
  }

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {
      file: Prisma.$FilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.BannerTypeEnum
      url: string
      fileId: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'Int'>
    readonly type: FieldRef<"Banner", 'BannerTypeEnum'>
    readonly url: FieldRef<"Banner", 'String'>
    readonly fileId: FieldRef<"Banner", 'Int'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
  }


  /**
   * Model Partner
   */

  export type AggregatePartner = {
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  export type PartnerAvgAggregateOutputType = {
    id: number | null
    iconId: number | null
  }

  export type PartnerSumAggregateOutputType = {
    id: number | null
    iconId: number | null
  }

  export type PartnerMinAggregateOutputType = {
    id: number | null
    title: string | null
    iconId: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerMaxAggregateOutputType = {
    id: number | null
    title: string | null
    iconId: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerCountAggregateOutputType = {
    id: number
    title: number
    iconId: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerAvgAggregateInputType = {
    id?: true
    iconId?: true
  }

  export type PartnerSumAggregateInputType = {
    id?: true
    iconId?: true
  }

  export type PartnerMinAggregateInputType = {
    id?: true
    title?: true
    iconId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerMaxAggregateInputType = {
    id?: true
    title?: true
    iconId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerCountAggregateInputType = {
    id?: true
    title?: true
    iconId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partner to aggregate.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partners
    **/
    _count?: true | PartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerMaxAggregateInputType
  }

  export type GetPartnerAggregateType<T extends PartnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartner[P]>
      : GetScalarType<T[P], AggregatePartner[P]>
  }




  export type PartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithAggregationInput | PartnerOrderByWithAggregationInput[]
    by: PartnerScalarFieldEnum[] | PartnerScalarFieldEnum
    having?: PartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerCountAggregateInputType | true
    _avg?: PartnerAvgAggregateInputType
    _sum?: PartnerSumAggregateInputType
    _min?: PartnerMinAggregateInputType
    _max?: PartnerMaxAggregateInputType
  }

  export type PartnerGroupByOutputType = {
    id: number
    title: string
    iconId: number
    url: string
    createdAt: Date
    updatedAt: Date | null
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  type GetPartnerGroupByPayload<T extends PartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerGroupByOutputType[P]>
        }
      >
    >


  export type PartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    iconId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    icon?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    iconId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    icon?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    iconId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    icon?: boolean | FileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectScalar = {
    id?: boolean
    title?: boolean
    iconId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "iconId" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["partner"]>
  export type PartnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icon?: boolean | FileDefaultArgs<ExtArgs>
  }
  export type PartnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icon?: boolean | FileDefaultArgs<ExtArgs>
  }
  export type PartnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icon?: boolean | FileDefaultArgs<ExtArgs>
  }

  export type $PartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partner"
    objects: {
      icon: Prisma.$FilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      iconId: number
      url: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["partner"]>
    composites: {}
  }

  type PartnerGetPayload<S extends boolean | null | undefined | PartnerDefaultArgs> = $Result.GetResult<Prisma.$PartnerPayload, S>

  type PartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerCountAggregateInputType | true
    }

  export interface PartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partner'], meta: { name: 'Partner' } }
    /**
     * Find zero or one Partner that matches the filter.
     * @param {PartnerFindUniqueArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerFindUniqueArgs>(args: SelectSubset<T, PartnerFindUniqueArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerFindUniqueOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerFindFirstArgs>(args?: SelectSubset<T, PartnerFindFirstArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partner.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerWithIdOnly = await prisma.partner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerFindManyArgs>(args?: SelectSubset<T, PartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partner.
     * @param {PartnerCreateArgs} args - Arguments to create a Partner.
     * @example
     * // Create one Partner
     * const Partner = await prisma.partner.create({
     *   data: {
     *     // ... data to create a Partner
     *   }
     * })
     * 
     */
    create<T extends PartnerCreateArgs>(args: SelectSubset<T, PartnerCreateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partners.
     * @param {PartnerCreateManyArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerCreateManyArgs>(args?: SelectSubset<T, PartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partners and returns the data saved in the database.
     * @param {PartnerCreateManyAndReturnArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partners and only return the `id`
     * const partnerWithIdOnly = await prisma.partner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Partner.
     * @param {PartnerDeleteArgs} args - Arguments to delete one Partner.
     * @example
     * // Delete one Partner
     * const Partner = await prisma.partner.delete({
     *   where: {
     *     // ... filter to delete one Partner
     *   }
     * })
     * 
     */
    delete<T extends PartnerDeleteArgs>(args: SelectSubset<T, PartnerDeleteArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partner.
     * @param {PartnerUpdateArgs} args - Arguments to update one Partner.
     * @example
     * // Update one Partner
     * const partner = await prisma.partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerUpdateArgs>(args: SelectSubset<T, PartnerUpdateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partners.
     * @param {PartnerDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerDeleteManyArgs>(args?: SelectSubset<T, PartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerUpdateManyArgs>(args: SelectSubset<T, PartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners and returns the data updated in the database.
     * @param {PartnerUpdateManyAndReturnArgs} args - Arguments to update many Partners.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Partners and only return the `id`
     * const partnerWithIdOnly = await prisma.partner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Partner.
     * @param {PartnerUpsertArgs} args - Arguments to update or create a Partner.
     * @example
     * // Update or create a Partner
     * const partner = await prisma.partner.upsert({
     *   create: {
     *     // ... data to create a Partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partner we want to update
     *   }
     * })
     */
    upsert<T extends PartnerUpsertArgs>(args: SelectSubset<T, PartnerUpsertArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partner.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends PartnerCountArgs>(
      args?: Subset<T, PartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerAggregateArgs>(args: Subset<T, PartnerAggregateArgs>): Prisma.PrismaPromise<GetPartnerAggregateType<T>>

    /**
     * Group by Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerGroupByArgs['orderBy'] }
        : { orderBy?: PartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partner model
   */
  readonly fields: PartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    icon<T extends FileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileDefaultArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partner model
   */
  interface PartnerFieldRefs {
    readonly id: FieldRef<"Partner", 'Int'>
    readonly title: FieldRef<"Partner", 'String'>
    readonly iconId: FieldRef<"Partner", 'Int'>
    readonly url: FieldRef<"Partner", 'String'>
    readonly createdAt: FieldRef<"Partner", 'DateTime'>
    readonly updatedAt: FieldRef<"Partner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partner findUnique
   */
  export type PartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findUniqueOrThrow
   */
  export type PartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findFirst
   */
  export type PartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findFirstOrThrow
   */
  export type PartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findMany
   */
  export type PartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner create
   */
  export type PartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Partner.
     */
    data: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
  }

  /**
   * Partner createMany
   */
  export type PartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partner createManyAndReturn
   */
  export type PartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partner update
   */
  export type PartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Partner.
     */
    data: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
    /**
     * Choose, which Partner to update.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner updateMany
   */
  export type PartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
  }

  /**
   * Partner updateManyAndReturn
   */
  export type PartnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partner upsert
   */
  export type PartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Partner to update in case it exists.
     */
    where: PartnerWhereUniqueInput
    /**
     * In case the Partner found by the `where` argument doesn't exist, create a new Partner with this data.
     */
    create: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
    /**
     * In case the Partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
  }

  /**
   * Partner delete
   */
  export type PartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter which Partner to delete.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner deleteMany
   */
  export type PartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to delete
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to delete.
     */
    limit?: number
  }

  /**
   * Partner without action
   */
  export type PartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
    userId: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    parentId: number | null
    userId: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    languageCode: string | null
    type: $Enums.MenuTypeEnum | null
    newsType: $Enums.NewsTypeEnum | null
    isPin: boolean | null
    isVisible: boolean | null
    parentId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    languageCode: string | null
    type: $Enums.MenuTypeEnum | null
    newsType: $Enums.NewsTypeEnum | null
    isPin: boolean | null
    isVisible: boolean | null
    parentId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    name: number
    path: number
    languageCode: number
    type: number
    newsType: number
    isPin: number
    isVisible: number
    content: number
    parentId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    parentId?: true
    userId?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    parentId?: true
    userId?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    languageCode?: true
    type?: true
    newsType?: true
    isPin?: true
    isVisible?: true
    parentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    languageCode?: true
    type?: true
    newsType?: true
    isPin?: true
    isVisible?: true
    parentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    languageCode?: true
    type?: true
    newsType?: true
    isPin?: true
    isVisible?: true
    content?: true
    parentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    name: string
    path: string | null
    languageCode: string | null
    type: $Enums.MenuTypeEnum | null
    newsType: $Enums.NewsTypeEnum | null
    isPin: boolean
    isVisible: boolean
    content: JsonValue[]
    parentId: number | null
    userId: number | null
    createdAt: Date
    updatedAt: Date | null
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    languageCode?: boolean
    type?: boolean
    newsType?: boolean
    isPin?: boolean
    isVisible?: boolean
    content?: boolean
    parentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Menu$parentArgs<ExtArgs>
    children?: boolean | Menu$childrenArgs<ExtArgs>
    files?: boolean | Menu$filesArgs<ExtArgs>
    user?: boolean | Menu$userArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    languageCode?: boolean
    type?: boolean
    newsType?: boolean
    isPin?: boolean
    isVisible?: boolean
    content?: boolean
    parentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Menu$parentArgs<ExtArgs>
    user?: boolean | Menu$userArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    languageCode?: boolean
    type?: boolean
    newsType?: boolean
    isPin?: boolean
    isVisible?: boolean
    content?: boolean
    parentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Menu$parentArgs<ExtArgs>
    user?: boolean | Menu$userArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    id?: boolean
    name?: boolean
    path?: boolean
    languageCode?: boolean
    type?: boolean
    newsType?: boolean
    isPin?: boolean
    isVisible?: boolean
    content?: boolean
    parentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "path" | "languageCode" | "type" | "newsType" | "isPin" | "isVisible" | "content" | "parentId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["menu"]>
  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Menu$parentArgs<ExtArgs>
    children?: boolean | Menu$childrenArgs<ExtArgs>
    files?: boolean | Menu$filesArgs<ExtArgs>
    user?: boolean | Menu$userArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Menu$parentArgs<ExtArgs>
    user?: boolean | Menu$userArgs<ExtArgs>
  }
  export type MenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Menu$parentArgs<ExtArgs>
    user?: boolean | Menu$userArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      parent: Prisma.$MenuPayload<ExtArgs> | null
      children: Prisma.$MenuPayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      path: string | null
      languageCode: string | null
      type: $Enums.MenuTypeEnum | null
      newsType: $Enums.NewsTypeEnum | null
      isPin: boolean
      isVisible: boolean
      content: Prisma.JsonValue[]
      parentId: number | null
      userId: number | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {MenuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Menu$parentArgs<ExtArgs> = {}>(args?: Subset<T, Menu$parentArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Menu$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Menu$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Menu$filesArgs<ExtArgs> = {}>(args?: Subset<T, Menu$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Menu$userArgs<ExtArgs> = {}>(args?: Subset<T, Menu$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Menu model
   */
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'Int'>
    readonly name: FieldRef<"Menu", 'String'>
    readonly path: FieldRef<"Menu", 'String'>
    readonly languageCode: FieldRef<"Menu", 'String'>
    readonly type: FieldRef<"Menu", 'MenuTypeEnum'>
    readonly newsType: FieldRef<"Menu", 'NewsTypeEnum'>
    readonly isPin: FieldRef<"Menu", 'Boolean'>
    readonly isVisible: FieldRef<"Menu", 'Boolean'>
    readonly content: FieldRef<"Menu", 'Json[]'>
    readonly parentId: FieldRef<"Menu", 'Int'>
    readonly userId: FieldRef<"Menu", 'Int'>
    readonly createdAt: FieldRef<"Menu", 'DateTime'>
    readonly updatedAt: FieldRef<"Menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu updateManyAndReturn
   */
  export type MenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to delete.
     */
    limit?: number
  }

  /**
   * Menu.parent
   */
  export type Menu$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
  }

  /**
   * Menu.children
   */
  export type Menu$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu.files
   */
  export type Menu$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Menu.user
   */
  export type Menu$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model Appeal
   */

  export type AggregateAppeal = {
    _count: AppealCountAggregateOutputType | null
    _avg: AppealAvgAggregateOutputType | null
    _sum: AppealSumAggregateOutputType | null
    _min: AppealMinAggregateOutputType | null
    _max: AppealMaxAggregateOutputType | null
  }

  export type AppealAvgAggregateOutputType = {
    id: number | null
  }

  export type AppealSumAggregateOutputType = {
    id: number | null
  }

  export type AppealMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    phoneNumber: string | null
    option: string | null
    email: string | null
    questionOrSuggestion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppealMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    phoneNumber: string | null
    option: string | null
    email: string | null
    questionOrSuggestion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppealCountAggregateOutputType = {
    id: number
    fullName: number
    phoneNumber: number
    option: number
    email: number
    questionOrSuggestion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppealAvgAggregateInputType = {
    id?: true
  }

  export type AppealSumAggregateInputType = {
    id?: true
  }

  export type AppealMinAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    option?: true
    email?: true
    questionOrSuggestion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppealMaxAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    option?: true
    email?: true
    questionOrSuggestion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppealCountAggregateInputType = {
    id?: true
    fullName?: true
    phoneNumber?: true
    option?: true
    email?: true
    questionOrSuggestion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appeal to aggregate.
     */
    where?: AppealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appeals to fetch.
     */
    orderBy?: AppealOrderByWithRelationInput | AppealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appeals
    **/
    _count?: true | AppealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppealMaxAggregateInputType
  }

  export type GetAppealAggregateType<T extends AppealAggregateArgs> = {
        [P in keyof T & keyof AggregateAppeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppeal[P]>
      : GetScalarType<T[P], AggregateAppeal[P]>
  }




  export type AppealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppealWhereInput
    orderBy?: AppealOrderByWithAggregationInput | AppealOrderByWithAggregationInput[]
    by: AppealScalarFieldEnum[] | AppealScalarFieldEnum
    having?: AppealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppealCountAggregateInputType | true
    _avg?: AppealAvgAggregateInputType
    _sum?: AppealSumAggregateInputType
    _min?: AppealMinAggregateInputType
    _max?: AppealMaxAggregateInputType
  }

  export type AppealGroupByOutputType = {
    id: number
    fullName: string
    phoneNumber: string
    option: string
    email: string
    questionOrSuggestion: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: AppealCountAggregateOutputType | null
    _avg: AppealAvgAggregateOutputType | null
    _sum: AppealSumAggregateOutputType | null
    _min: AppealMinAggregateOutputType | null
    _max: AppealMaxAggregateOutputType | null
  }

  type GetAppealGroupByPayload<T extends AppealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppealGroupByOutputType[P]>
            : GetScalarType<T[P], AppealGroupByOutputType[P]>
        }
      >
    >


  export type AppealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    option?: boolean
    email?: boolean
    questionOrSuggestion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appeal"]>

  export type AppealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    option?: boolean
    email?: boolean
    questionOrSuggestion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appeal"]>

  export type AppealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    option?: boolean
    email?: boolean
    questionOrSuggestion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appeal"]>

  export type AppealSelectScalar = {
    id?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    option?: boolean
    email?: boolean
    questionOrSuggestion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phoneNumber" | "option" | "email" | "questionOrSuggestion" | "createdAt" | "updatedAt", ExtArgs["result"]["appeal"]>

  export type $AppealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appeal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      phoneNumber: string
      option: string
      email: string
      questionOrSuggestion: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["appeal"]>
    composites: {}
  }

  type AppealGetPayload<S extends boolean | null | undefined | AppealDefaultArgs> = $Result.GetResult<Prisma.$AppealPayload, S>

  type AppealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppealCountAggregateInputType | true
    }

  export interface AppealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appeal'], meta: { name: 'Appeal' } }
    /**
     * Find zero or one Appeal that matches the filter.
     * @param {AppealFindUniqueArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppealFindUniqueArgs>(args: SelectSubset<T, AppealFindUniqueArgs<ExtArgs>>): Prisma__AppealClient<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appeal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppealFindUniqueOrThrowArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppealFindUniqueOrThrowArgs>(args: SelectSubset<T, AppealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppealClient<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appeal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealFindFirstArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppealFindFirstArgs>(args?: SelectSubset<T, AppealFindFirstArgs<ExtArgs>>): Prisma__AppealClient<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appeal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealFindFirstOrThrowArgs} args - Arguments to find a Appeal
     * @example
     * // Get one Appeal
     * const appeal = await prisma.appeal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppealFindFirstOrThrowArgs>(args?: SelectSubset<T, AppealFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppealClient<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appeals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appeals
     * const appeals = await prisma.appeal.findMany()
     * 
     * // Get first 10 Appeals
     * const appeals = await prisma.appeal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appealWithIdOnly = await prisma.appeal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppealFindManyArgs>(args?: SelectSubset<T, AppealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appeal.
     * @param {AppealCreateArgs} args - Arguments to create a Appeal.
     * @example
     * // Create one Appeal
     * const Appeal = await prisma.appeal.create({
     *   data: {
     *     // ... data to create a Appeal
     *   }
     * })
     * 
     */
    create<T extends AppealCreateArgs>(args: SelectSubset<T, AppealCreateArgs<ExtArgs>>): Prisma__AppealClient<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appeals.
     * @param {AppealCreateManyArgs} args - Arguments to create many Appeals.
     * @example
     * // Create many Appeals
     * const appeal = await prisma.appeal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppealCreateManyArgs>(args?: SelectSubset<T, AppealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appeals and returns the data saved in the database.
     * @param {AppealCreateManyAndReturnArgs} args - Arguments to create many Appeals.
     * @example
     * // Create many Appeals
     * const appeal = await prisma.appeal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appeals and only return the `id`
     * const appealWithIdOnly = await prisma.appeal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppealCreateManyAndReturnArgs>(args?: SelectSubset<T, AppealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appeal.
     * @param {AppealDeleteArgs} args - Arguments to delete one Appeal.
     * @example
     * // Delete one Appeal
     * const Appeal = await prisma.appeal.delete({
     *   where: {
     *     // ... filter to delete one Appeal
     *   }
     * })
     * 
     */
    delete<T extends AppealDeleteArgs>(args: SelectSubset<T, AppealDeleteArgs<ExtArgs>>): Prisma__AppealClient<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appeal.
     * @param {AppealUpdateArgs} args - Arguments to update one Appeal.
     * @example
     * // Update one Appeal
     * const appeal = await prisma.appeal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppealUpdateArgs>(args: SelectSubset<T, AppealUpdateArgs<ExtArgs>>): Prisma__AppealClient<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appeals.
     * @param {AppealDeleteManyArgs} args - Arguments to filter Appeals to delete.
     * @example
     * // Delete a few Appeals
     * const { count } = await prisma.appeal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppealDeleteManyArgs>(args?: SelectSubset<T, AppealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appeals
     * const appeal = await prisma.appeal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppealUpdateManyArgs>(args: SelectSubset<T, AppealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appeals and returns the data updated in the database.
     * @param {AppealUpdateManyAndReturnArgs} args - Arguments to update many Appeals.
     * @example
     * // Update many Appeals
     * const appeal = await prisma.appeal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appeals and only return the `id`
     * const appealWithIdOnly = await prisma.appeal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppealUpdateManyAndReturnArgs>(args: SelectSubset<T, AppealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appeal.
     * @param {AppealUpsertArgs} args - Arguments to update or create a Appeal.
     * @example
     * // Update or create a Appeal
     * const appeal = await prisma.appeal.upsert({
     *   create: {
     *     // ... data to create a Appeal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appeal we want to update
     *   }
     * })
     */
    upsert<T extends AppealUpsertArgs>(args: SelectSubset<T, AppealUpsertArgs<ExtArgs>>): Prisma__AppealClient<$Result.GetResult<Prisma.$AppealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appeals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealCountArgs} args - Arguments to filter Appeals to count.
     * @example
     * // Count the number of Appeals
     * const count = await prisma.appeal.count({
     *   where: {
     *     // ... the filter for the Appeals we want to count
     *   }
     * })
    **/
    count<T extends AppealCountArgs>(
      args?: Subset<T, AppealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppealAggregateArgs>(args: Subset<T, AppealAggregateArgs>): Prisma.PrismaPromise<GetAppealAggregateType<T>>

    /**
     * Group by Appeal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppealGroupByArgs['orderBy'] }
        : { orderBy?: AppealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appeal model
   */
  readonly fields: AppealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appeal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appeal model
   */
  interface AppealFieldRefs {
    readonly id: FieldRef<"Appeal", 'Int'>
    readonly fullName: FieldRef<"Appeal", 'String'>
    readonly phoneNumber: FieldRef<"Appeal", 'String'>
    readonly option: FieldRef<"Appeal", 'String'>
    readonly email: FieldRef<"Appeal", 'String'>
    readonly questionOrSuggestion: FieldRef<"Appeal", 'String'>
    readonly createdAt: FieldRef<"Appeal", 'DateTime'>
    readonly updatedAt: FieldRef<"Appeal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appeal findUnique
   */
  export type AppealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * Filter, which Appeal to fetch.
     */
    where: AppealWhereUniqueInput
  }

  /**
   * Appeal findUniqueOrThrow
   */
  export type AppealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * Filter, which Appeal to fetch.
     */
    where: AppealWhereUniqueInput
  }

  /**
   * Appeal findFirst
   */
  export type AppealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * Filter, which Appeal to fetch.
     */
    where?: AppealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appeals to fetch.
     */
    orderBy?: AppealOrderByWithRelationInput | AppealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appeals.
     */
    cursor?: AppealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appeals.
     */
    distinct?: AppealScalarFieldEnum | AppealScalarFieldEnum[]
  }

  /**
   * Appeal findFirstOrThrow
   */
  export type AppealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * Filter, which Appeal to fetch.
     */
    where?: AppealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appeals to fetch.
     */
    orderBy?: AppealOrderByWithRelationInput | AppealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appeals.
     */
    cursor?: AppealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appeals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appeals.
     */
    distinct?: AppealScalarFieldEnum | AppealScalarFieldEnum[]
  }

  /**
   * Appeal findMany
   */
  export type AppealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * Filter, which Appeals to fetch.
     */
    where?: AppealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appeals to fetch.
     */
    orderBy?: AppealOrderByWithRelationInput | AppealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appeals.
     */
    cursor?: AppealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appeals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appeals.
     */
    skip?: number
    distinct?: AppealScalarFieldEnum | AppealScalarFieldEnum[]
  }

  /**
   * Appeal create
   */
  export type AppealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * The data needed to create a Appeal.
     */
    data: XOR<AppealCreateInput, AppealUncheckedCreateInput>
  }

  /**
   * Appeal createMany
   */
  export type AppealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appeals.
     */
    data: AppealCreateManyInput | AppealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appeal createManyAndReturn
   */
  export type AppealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * The data used to create many Appeals.
     */
    data: AppealCreateManyInput | AppealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appeal update
   */
  export type AppealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * The data needed to update a Appeal.
     */
    data: XOR<AppealUpdateInput, AppealUncheckedUpdateInput>
    /**
     * Choose, which Appeal to update.
     */
    where: AppealWhereUniqueInput
  }

  /**
   * Appeal updateMany
   */
  export type AppealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appeals.
     */
    data: XOR<AppealUpdateManyMutationInput, AppealUncheckedUpdateManyInput>
    /**
     * Filter which Appeals to update
     */
    where?: AppealWhereInput
    /**
     * Limit how many Appeals to update.
     */
    limit?: number
  }

  /**
   * Appeal updateManyAndReturn
   */
  export type AppealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * The data used to update Appeals.
     */
    data: XOR<AppealUpdateManyMutationInput, AppealUncheckedUpdateManyInput>
    /**
     * Filter which Appeals to update
     */
    where?: AppealWhereInput
    /**
     * Limit how many Appeals to update.
     */
    limit?: number
  }

  /**
   * Appeal upsert
   */
  export type AppealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * The filter to search for the Appeal to update in case it exists.
     */
    where: AppealWhereUniqueInput
    /**
     * In case the Appeal found by the `where` argument doesn't exist, create a new Appeal with this data.
     */
    create: XOR<AppealCreateInput, AppealUncheckedCreateInput>
    /**
     * In case the Appeal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppealUpdateInput, AppealUncheckedUpdateInput>
  }

  /**
   * Appeal delete
   */
  export type AppealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
    /**
     * Filter which Appeal to delete.
     */
    where: AppealWhereUniqueInput
  }

  /**
   * Appeal deleteMany
   */
  export type AppealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appeals to delete
     */
    where?: AppealWhereInput
    /**
     * Limit how many Appeals to delete.
     */
    limit?: number
  }

  /**
   * Appeal without action
   */
  export type AppealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appeal
     */
    select?: AppealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appeal
     */
    omit?: AppealOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    fullName: 'fullName',
    hashedPassword: 'hashedPassword',
    salt: 'salt',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TelegramUserScalarFieldEnum: {
    id: 'id',
    telegramId: 'telegramId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TelegramUserScalarFieldEnum = (typeof TelegramUserScalarFieldEnum)[keyof typeof TelegramUserScalarFieldEnum]


  export const AccountSessionScalarFieldEnum: {
    id: 'id',
    device: 'device',
    ip: 'ip',
    sessionId: 'sessionId',
    revoked: 'revoked',
    userId: 'userId',
    exp: 'exp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountSessionScalarFieldEnum = (typeof AccountSessionScalarFieldEnum)[keyof typeof AccountSessionScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    path: 'path',
    description: 'description',
    languageCode: 'languageCode',
    isArchived: 'isArchived',
    isCheck: 'isCheck',
    isTop: 'isTop',
    type: 'type',
    content: 'content',
    authorId: 'authorId',
    archivedAt: 'archivedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const NewsTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    languageCode: 'languageCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsTagScalarFieldEnum = (typeof NewsTagScalarFieldEnum)[keyof typeof NewsTagScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    href: 'href',
    fileName: 'fileName',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mimeType: 'mimeType',
    extension: 'extension',
    newsId: 'newsId',
    menuId: 'menuId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const PlaceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    name: 'name',
    languageCode: 'languageCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaceScalarFieldEnum = (typeof PlaceScalarFieldEnum)[keyof typeof PlaceScalarFieldEnum]


  export const InteractiveAreaScalarFieldEnum: {
    id: 'id',
    chairmanFullName: 'chairmanFullName',
    chairmanPhoto: 'chairmanPhoto',
    phoneNumber: 'phoneNumber',
    email: 'email',
    workingTime: 'workingTime',
    address: 'address',
    membersCount: 'membersCount',
    placeId: 'placeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InteractiveAreaScalarFieldEnum = (typeof InteractiveAreaScalarFieldEnum)[keyof typeof InteractiveAreaScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    type: 'type',
    url: 'url',
    fileId: 'fileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const PartnerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    iconId: 'iconId',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerScalarFieldEnum = (typeof PartnerScalarFieldEnum)[keyof typeof PartnerScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    languageCode: 'languageCode',
    type: 'type',
    newsType: 'newsType',
    isPin: 'isPin',
    isVisible: 'isVisible',
    content: 'content',
    parentId: 'parentId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const AppealScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phoneNumber: 'phoneNumber',
    option: 'option',
    email: 'email',
    questionOrSuggestion: 'questionOrSuggestion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppealScalarFieldEnum = (typeof AppealScalarFieldEnum)[keyof typeof AppealScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRoleEnum'
   */
  export type EnumUserRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoleEnum'>
    


  /**
   * Reference to a field of type 'UserRoleEnum[]'
   */
  export type ListEnumUserRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoleEnum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NewsTypeEnum'
   */
  export type EnumNewsTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsTypeEnum'>
    


  /**
   * Reference to a field of type 'NewsTypeEnum[]'
   */
  export type ListEnumNewsTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'BannerTypeEnum'
   */
  export type EnumBannerTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BannerTypeEnum'>
    


  /**
   * Reference to a field of type 'BannerTypeEnum[]'
   */
  export type ListEnumBannerTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BannerTypeEnum[]'>
    


  /**
   * Reference to a field of type 'MenuTypeEnum'
   */
  export type EnumMenuTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MenuTypeEnum'>
    


  /**
   * Reference to a field of type 'MenuTypeEnum[]'
   */
  export type ListEnumMenuTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MenuTypeEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    role?: EnumUserRoleEnumFilter<"User"> | $Enums.UserRoleEnum
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    telegramUser?: XOR<TelegramUserNullableScalarRelationFilter, TelegramUserWhereInput> | null
    accountSessions?: AccountSessionListRelationFilter
    news?: NewsListRelationFilter
    menus?: MenuListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    hashedPassword?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    telegramUser?: TelegramUserOrderByWithRelationInput
    accountSessions?: AccountSessionOrderByRelationAggregateInput
    news?: NewsOrderByRelationAggregateInput
    menus?: MenuOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    role?: EnumUserRoleEnumFilter<"User"> | $Enums.UserRoleEnum
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    telegramUser?: XOR<TelegramUserNullableScalarRelationFilter, TelegramUserWhereInput> | null
    accountSessions?: AccountSessionListRelationFilter
    news?: NewsListRelationFilter
    menus?: MenuListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    hashedPassword?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleEnumWithAggregatesFilter<"User"> | $Enums.UserRoleEnum
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type TelegramUserWhereInput = {
    AND?: TelegramUserWhereInput | TelegramUserWhereInput[]
    OR?: TelegramUserWhereInput[]
    NOT?: TelegramUserWhereInput | TelegramUserWhereInput[]
    id?: IntFilter<"TelegramUser"> | number
    telegramId?: BigIntFilter<"TelegramUser"> | bigint | number
    userId?: IntFilter<"TelegramUser"> | number
    createdAt?: DateTimeFilter<"TelegramUser"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TelegramUser"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TelegramUserOrderByWithRelationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TelegramUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TelegramUserWhereInput | TelegramUserWhereInput[]
    OR?: TelegramUserWhereInput[]
    NOT?: TelegramUserWhereInput | TelegramUserWhereInput[]
    telegramId?: BigIntFilter<"TelegramUser"> | bigint | number
    createdAt?: DateTimeFilter<"TelegramUser"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TelegramUser"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TelegramUserOrderByWithAggregationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TelegramUserCountOrderByAggregateInput
    _avg?: TelegramUserAvgOrderByAggregateInput
    _max?: TelegramUserMaxOrderByAggregateInput
    _min?: TelegramUserMinOrderByAggregateInput
    _sum?: TelegramUserSumOrderByAggregateInput
  }

  export type TelegramUserScalarWhereWithAggregatesInput = {
    AND?: TelegramUserScalarWhereWithAggregatesInput | TelegramUserScalarWhereWithAggregatesInput[]
    OR?: TelegramUserScalarWhereWithAggregatesInput[]
    NOT?: TelegramUserScalarWhereWithAggregatesInput | TelegramUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TelegramUser"> | number
    telegramId?: BigIntWithAggregatesFilter<"TelegramUser"> | bigint | number
    userId?: IntWithAggregatesFilter<"TelegramUser"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TelegramUser"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"TelegramUser"> | Date | string | null
  }

  export type AccountSessionWhereInput = {
    AND?: AccountSessionWhereInput | AccountSessionWhereInput[]
    OR?: AccountSessionWhereInput[]
    NOT?: AccountSessionWhereInput | AccountSessionWhereInput[]
    id?: IntFilter<"AccountSession"> | number
    device?: JsonFilter<"AccountSession">
    ip?: StringFilter<"AccountSession"> | string
    sessionId?: StringFilter<"AccountSession"> | string
    revoked?: BoolFilter<"AccountSession"> | boolean
    userId?: IntFilter<"AccountSession"> | number
    exp?: DateTimeFilter<"AccountSession"> | Date | string
    createdAt?: DateTimeFilter<"AccountSession"> | Date | string
    updatedAt?: DateTimeFilter<"AccountSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountSessionOrderByWithRelationInput = {
    id?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    revoked?: SortOrder
    userId?: SortOrder
    exp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionId?: string
    AND?: AccountSessionWhereInput | AccountSessionWhereInput[]
    OR?: AccountSessionWhereInput[]
    NOT?: AccountSessionWhereInput | AccountSessionWhereInput[]
    device?: JsonFilter<"AccountSession">
    ip?: StringFilter<"AccountSession"> | string
    revoked?: BoolFilter<"AccountSession"> | boolean
    userId?: IntFilter<"AccountSession"> | number
    exp?: DateTimeFilter<"AccountSession"> | Date | string
    createdAt?: DateTimeFilter<"AccountSession"> | Date | string
    updatedAt?: DateTimeFilter<"AccountSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionId">

  export type AccountSessionOrderByWithAggregationInput = {
    id?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    revoked?: SortOrder
    userId?: SortOrder
    exp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountSessionCountOrderByAggregateInput
    _avg?: AccountSessionAvgOrderByAggregateInput
    _max?: AccountSessionMaxOrderByAggregateInput
    _min?: AccountSessionMinOrderByAggregateInput
    _sum?: AccountSessionSumOrderByAggregateInput
  }

  export type AccountSessionScalarWhereWithAggregatesInput = {
    AND?: AccountSessionScalarWhereWithAggregatesInput | AccountSessionScalarWhereWithAggregatesInput[]
    OR?: AccountSessionScalarWhereWithAggregatesInput[]
    NOT?: AccountSessionScalarWhereWithAggregatesInput | AccountSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountSession"> | number
    device?: JsonWithAggregatesFilter<"AccountSession">
    ip?: StringWithAggregatesFilter<"AccountSession"> | string
    sessionId?: StringWithAggregatesFilter<"AccountSession"> | string
    revoked?: BoolWithAggregatesFilter<"AccountSession"> | boolean
    userId?: IntWithAggregatesFilter<"AccountSession"> | number
    exp?: DateTimeWithAggregatesFilter<"AccountSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AccountSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountSession"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: IntFilter<"News"> | number
    title?: StringFilter<"News"> | string
    path?: StringFilter<"News"> | string
    description?: StringFilter<"News"> | string
    languageCode?: StringNullableFilter<"News"> | string | null
    isArchived?: BoolFilter<"News"> | boolean
    isCheck?: BoolFilter<"News"> | boolean
    isTop?: BoolFilter<"News"> | boolean
    type?: EnumNewsTypeEnumFilter<"News"> | $Enums.NewsTypeEnum
    content?: JsonNullableListFilter<"News">
    authorId?: IntNullableFilter<"News"> | number | null
    archivedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    files?: FileListRelationFilter
    tags?: NewsTagListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    description?: SortOrder
    languageCode?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    isCheck?: SortOrder
    isTop?: SortOrder
    type?: SortOrder
    content?: SortOrder
    authorId?: SortOrderInput | SortOrder
    archivedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    files?: FileOrderByRelationAggregateInput
    tags?: NewsTagOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    path?: string
    languageCode_path?: NewsLanguageCodePathCompoundUniqueInput
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    description?: StringFilter<"News"> | string
    languageCode?: StringNullableFilter<"News"> | string | null
    isArchived?: BoolFilter<"News"> | boolean
    isCheck?: BoolFilter<"News"> | boolean
    isTop?: BoolFilter<"News"> | boolean
    type?: EnumNewsTypeEnumFilter<"News"> | $Enums.NewsTypeEnum
    content?: JsonNullableListFilter<"News">
    authorId?: IntNullableFilter<"News"> | number | null
    archivedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    files?: FileListRelationFilter
    tags?: NewsTagListRelationFilter
  }, "id" | "path" | "languageCode_path">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    description?: SortOrder
    languageCode?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    isCheck?: SortOrder
    isTop?: SortOrder
    type?: SortOrder
    content?: SortOrder
    authorId?: SortOrderInput | SortOrder
    archivedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"News"> | number
    title?: StringWithAggregatesFilter<"News"> | string
    path?: StringWithAggregatesFilter<"News"> | string
    description?: StringWithAggregatesFilter<"News"> | string
    languageCode?: StringNullableWithAggregatesFilter<"News"> | string | null
    isArchived?: BoolWithAggregatesFilter<"News"> | boolean
    isCheck?: BoolWithAggregatesFilter<"News"> | boolean
    isTop?: BoolWithAggregatesFilter<"News"> | boolean
    type?: EnumNewsTypeEnumWithAggregatesFilter<"News"> | $Enums.NewsTypeEnum
    content?: JsonNullableListFilter<"News">
    authorId?: IntNullableWithAggregatesFilter<"News"> | number | null
    archivedAt?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
  }

  export type NewsTagWhereInput = {
    AND?: NewsTagWhereInput | NewsTagWhereInput[]
    OR?: NewsTagWhereInput[]
    NOT?: NewsTagWhereInput | NewsTagWhereInput[]
    id?: IntFilter<"NewsTag"> | number
    name?: StringFilter<"NewsTag"> | string
    languageCode?: StringNullableFilter<"NewsTag"> | string | null
    createdAt?: DateTimeFilter<"NewsTag"> | Date | string
    updatedAt?: DateTimeNullableFilter<"NewsTag"> | Date | string | null
    news?: NewsListRelationFilter
  }

  export type NewsTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    languageCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    news?: NewsOrderByRelationAggregateInput
  }

  export type NewsTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    languageCode_name?: NewsTagLanguageCodeNameCompoundUniqueInput
    AND?: NewsTagWhereInput | NewsTagWhereInput[]
    OR?: NewsTagWhereInput[]
    NOT?: NewsTagWhereInput | NewsTagWhereInput[]
    languageCode?: StringNullableFilter<"NewsTag"> | string | null
    createdAt?: DateTimeFilter<"NewsTag"> | Date | string
    updatedAt?: DateTimeNullableFilter<"NewsTag"> | Date | string | null
    news?: NewsListRelationFilter
  }, "id" | "name" | "languageCode_name">

  export type NewsTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    languageCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: NewsTagCountOrderByAggregateInput
    _avg?: NewsTagAvgOrderByAggregateInput
    _max?: NewsTagMaxOrderByAggregateInput
    _min?: NewsTagMinOrderByAggregateInput
    _sum?: NewsTagSumOrderByAggregateInput
  }

  export type NewsTagScalarWhereWithAggregatesInput = {
    AND?: NewsTagScalarWhereWithAggregatesInput | NewsTagScalarWhereWithAggregatesInput[]
    OR?: NewsTagScalarWhereWithAggregatesInput[]
    NOT?: NewsTagScalarWhereWithAggregatesInput | NewsTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsTag"> | number
    name?: StringWithAggregatesFilter<"NewsTag"> | string
    languageCode?: StringNullableWithAggregatesFilter<"NewsTag"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NewsTag"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"NewsTag"> | Date | string | null
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    name?: StringFilter<"Contact"> | string
    href?: StringFilter<"Contact"> | string
    fileName?: StringNullableFilter<"Contact"> | string | null
    type?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    fileName?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    href?: StringFilter<"Contact"> | string
    fileName?: StringNullableFilter<"Contact"> | string | null
    type?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
  }, "id" | "name">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    fileName?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    name?: StringWithAggregatesFilter<"Contact"> | string
    href?: StringWithAggregatesFilter<"Contact"> | string
    fileName?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    type?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Contact"> | Date | string | null
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    name?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    extension?: StringFilter<"File"> | string
    newsId?: IntNullableFilter<"File"> | number | null
    menuId?: IntNullableFilter<"File"> | number | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    news?: XOR<NewsNullableScalarRelationFilter, NewsWhereInput> | null
    menu?: XOR<MenuNullableScalarRelationFilter, MenuWhereInput> | null
    banner?: BannerListRelationFilter
    Partner?: PartnerListRelationFilter
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    newsId?: SortOrderInput | SortOrder
    menuId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    news?: NewsOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
    banner?: BannerOrderByRelationAggregateInput
    Partner?: PartnerOrderByRelationAggregateInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    newsId_name?: FileNewsIdNameCompoundUniqueInput
    menuId_name?: FileMenuIdNameCompoundUniqueInput
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    name?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    extension?: StringFilter<"File"> | string
    newsId?: IntNullableFilter<"File"> | number | null
    menuId?: IntNullableFilter<"File"> | number | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeNullableFilter<"File"> | Date | string | null
    news?: XOR<NewsNullableScalarRelationFilter, NewsWhereInput> | null
    menu?: XOR<MenuNullableScalarRelationFilter, MenuWhereInput> | null
    banner?: BannerListRelationFilter
    Partner?: PartnerListRelationFilter
  }, "id" | "newsId_name" | "menuId_name">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    newsId?: SortOrderInput | SortOrder
    menuId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    name?: StringWithAggregatesFilter<"File"> | string
    mimeType?: StringWithAggregatesFilter<"File"> | string
    extension?: StringWithAggregatesFilter<"File"> | string
    newsId?: IntNullableWithAggregatesFilter<"File"> | number | null
    menuId?: IntNullableWithAggregatesFilter<"File"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"File"> | Date | string | null
  }

  export type PlaceWhereInput = {
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    id?: IntFilter<"Place"> | number
    title?: StringFilter<"Place"> | string
    name?: StringNullableFilter<"Place"> | string | null
    languageCode?: StringNullableFilter<"Place"> | string | null
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Place"> | Date | string | null
    interactiveArea?: InteractiveAreaListRelationFilter
  }

  export type PlaceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    interactiveArea?: InteractiveAreaOrderByRelationAggregateInput
  }

  export type PlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    name_title_languageCode?: PlaceNameTitleLanguageCodeCompoundUniqueInput
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    name?: StringNullableFilter<"Place"> | string | null
    languageCode?: StringNullableFilter<"Place"> | string | null
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Place"> | Date | string | null
    interactiveArea?: InteractiveAreaListRelationFilter
  }, "id" | "title" | "name_title_languageCode">

  export type PlaceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PlaceCountOrderByAggregateInput
    _avg?: PlaceAvgOrderByAggregateInput
    _max?: PlaceMaxOrderByAggregateInput
    _min?: PlaceMinOrderByAggregateInput
    _sum?: PlaceSumOrderByAggregateInput
  }

  export type PlaceScalarWhereWithAggregatesInput = {
    AND?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    OR?: PlaceScalarWhereWithAggregatesInput[]
    NOT?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Place"> | number
    title?: StringWithAggregatesFilter<"Place"> | string
    name?: StringNullableWithAggregatesFilter<"Place"> | string | null
    languageCode?: StringNullableWithAggregatesFilter<"Place"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Place"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Place"> | Date | string | null
  }

  export type InteractiveAreaWhereInput = {
    AND?: InteractiveAreaWhereInput | InteractiveAreaWhereInput[]
    OR?: InteractiveAreaWhereInput[]
    NOT?: InteractiveAreaWhereInput | InteractiveAreaWhereInput[]
    id?: IntFilter<"InteractiveArea"> | number
    chairmanFullName?: StringFilter<"InteractiveArea"> | string
    chairmanPhoto?: StringFilter<"InteractiveArea"> | string
    phoneNumber?: StringNullableFilter<"InteractiveArea"> | string | null
    email?: StringNullableFilter<"InteractiveArea"> | string | null
    workingTime?: StringNullableFilter<"InteractiveArea"> | string | null
    address?: StringFilter<"InteractiveArea"> | string
    membersCount?: IntFilter<"InteractiveArea"> | number
    placeId?: IntFilter<"InteractiveArea"> | number
    createdAt?: DateTimeFilter<"InteractiveArea"> | Date | string
    updatedAt?: DateTimeNullableFilter<"InteractiveArea"> | Date | string | null
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }

  export type InteractiveAreaOrderByWithRelationInput = {
    id?: SortOrder
    chairmanFullName?: SortOrder
    chairmanPhoto?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    workingTime?: SortOrderInput | SortOrder
    address?: SortOrder
    membersCount?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    place?: PlaceOrderByWithRelationInput
  }

  export type InteractiveAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InteractiveAreaWhereInput | InteractiveAreaWhereInput[]
    OR?: InteractiveAreaWhereInput[]
    NOT?: InteractiveAreaWhereInput | InteractiveAreaWhereInput[]
    chairmanFullName?: StringFilter<"InteractiveArea"> | string
    chairmanPhoto?: StringFilter<"InteractiveArea"> | string
    phoneNumber?: StringNullableFilter<"InteractiveArea"> | string | null
    email?: StringNullableFilter<"InteractiveArea"> | string | null
    workingTime?: StringNullableFilter<"InteractiveArea"> | string | null
    address?: StringFilter<"InteractiveArea"> | string
    membersCount?: IntFilter<"InteractiveArea"> | number
    placeId?: IntFilter<"InteractiveArea"> | number
    createdAt?: DateTimeFilter<"InteractiveArea"> | Date | string
    updatedAt?: DateTimeNullableFilter<"InteractiveArea"> | Date | string | null
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }, "id">

  export type InteractiveAreaOrderByWithAggregationInput = {
    id?: SortOrder
    chairmanFullName?: SortOrder
    chairmanPhoto?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    workingTime?: SortOrderInput | SortOrder
    address?: SortOrder
    membersCount?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: InteractiveAreaCountOrderByAggregateInput
    _avg?: InteractiveAreaAvgOrderByAggregateInput
    _max?: InteractiveAreaMaxOrderByAggregateInput
    _min?: InteractiveAreaMinOrderByAggregateInput
    _sum?: InteractiveAreaSumOrderByAggregateInput
  }

  export type InteractiveAreaScalarWhereWithAggregatesInput = {
    AND?: InteractiveAreaScalarWhereWithAggregatesInput | InteractiveAreaScalarWhereWithAggregatesInput[]
    OR?: InteractiveAreaScalarWhereWithAggregatesInput[]
    NOT?: InteractiveAreaScalarWhereWithAggregatesInput | InteractiveAreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InteractiveArea"> | number
    chairmanFullName?: StringWithAggregatesFilter<"InteractiveArea"> | string
    chairmanPhoto?: StringWithAggregatesFilter<"InteractiveArea"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"InteractiveArea"> | string | null
    email?: StringNullableWithAggregatesFilter<"InteractiveArea"> | string | null
    workingTime?: StringNullableWithAggregatesFilter<"InteractiveArea"> | string | null
    address?: StringWithAggregatesFilter<"InteractiveArea"> | string
    membersCount?: IntWithAggregatesFilter<"InteractiveArea"> | number
    placeId?: IntWithAggregatesFilter<"InteractiveArea"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InteractiveArea"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"InteractiveArea"> | Date | string | null
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: IntFilter<"Banner"> | number
    type?: EnumBannerTypeEnumFilter<"Banner"> | $Enums.BannerTypeEnum
    url?: StringFilter<"Banner"> | string
    fileId?: IntFilter<"Banner"> | number
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Banner"> | Date | string | null
    file?: XOR<FileScalarRelationFilter, FileWhereInput>
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    file?: FileOrderByWithRelationInput
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    type?: EnumBannerTypeEnumFilter<"Banner"> | $Enums.BannerTypeEnum
    url?: StringFilter<"Banner"> | string
    fileId?: IntFilter<"Banner"> | number
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Banner"> | Date | string | null
    file?: XOR<FileScalarRelationFilter, FileWhereInput>
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Banner"> | number
    type?: EnumBannerTypeEnumWithAggregatesFilter<"Banner"> | $Enums.BannerTypeEnum
    url?: StringWithAggregatesFilter<"Banner"> | string
    fileId?: IntWithAggregatesFilter<"Banner"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Banner"> | Date | string | null
  }

  export type PartnerWhereInput = {
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    id?: IntFilter<"Partner"> | number
    title?: StringFilter<"Partner"> | string
    iconId?: IntFilter<"Partner"> | number
    url?: StringFilter<"Partner"> | string
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Partner"> | Date | string | null
    icon?: XOR<FileScalarRelationFilter, FileWhereInput>
  }

  export type PartnerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    iconId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    icon?: FileOrderByWithRelationInput
  }

  export type PartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    title?: StringFilter<"Partner"> | string
    iconId?: IntFilter<"Partner"> | number
    url?: StringFilter<"Partner"> | string
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Partner"> | Date | string | null
    icon?: XOR<FileScalarRelationFilter, FileWhereInput>
  }, "id">

  export type PartnerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    iconId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PartnerCountOrderByAggregateInput
    _avg?: PartnerAvgOrderByAggregateInput
    _max?: PartnerMaxOrderByAggregateInput
    _min?: PartnerMinOrderByAggregateInput
    _sum?: PartnerSumOrderByAggregateInput
  }

  export type PartnerScalarWhereWithAggregatesInput = {
    AND?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    OR?: PartnerScalarWhereWithAggregatesInput[]
    NOT?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Partner"> | number
    title?: StringWithAggregatesFilter<"Partner"> | string
    iconId?: IntWithAggregatesFilter<"Partner"> | number
    url?: StringWithAggregatesFilter<"Partner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Partner"> | Date | string | null
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: IntFilter<"Menu"> | number
    name?: StringFilter<"Menu"> | string
    path?: StringNullableFilter<"Menu"> | string | null
    languageCode?: StringNullableFilter<"Menu"> | string | null
    type?: EnumMenuTypeEnumNullableFilter<"Menu"> | $Enums.MenuTypeEnum | null
    newsType?: EnumNewsTypeEnumNullableFilter<"Menu"> | $Enums.NewsTypeEnum | null
    isPin?: BoolFilter<"Menu"> | boolean
    isVisible?: BoolFilter<"Menu"> | boolean
    content?: JsonNullableListFilter<"Menu">
    parentId?: IntNullableFilter<"Menu"> | number | null
    userId?: IntNullableFilter<"Menu"> | number | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    parent?: XOR<MenuNullableScalarRelationFilter, MenuWhereInput> | null
    children?: MenuListRelationFilter
    files?: FileListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    newsType?: SortOrderInput | SortOrder
    isPin?: SortOrder
    isVisible?: SortOrder
    content?: SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    parent?: MenuOrderByWithRelationInput
    children?: MenuOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    path_parentId_name?: MenuPathParentIdNameCompoundUniqueInput
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    name?: StringFilter<"Menu"> | string
    path?: StringNullableFilter<"Menu"> | string | null
    languageCode?: StringNullableFilter<"Menu"> | string | null
    type?: EnumMenuTypeEnumNullableFilter<"Menu"> | $Enums.MenuTypeEnum | null
    newsType?: EnumNewsTypeEnumNullableFilter<"Menu"> | $Enums.NewsTypeEnum | null
    isPin?: BoolFilter<"Menu"> | boolean
    isVisible?: BoolFilter<"Menu"> | boolean
    content?: JsonNullableListFilter<"Menu">
    parentId?: IntNullableFilter<"Menu"> | number | null
    userId?: IntNullableFilter<"Menu"> | number | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    parent?: XOR<MenuNullableScalarRelationFilter, MenuWhereInput> | null
    children?: MenuListRelationFilter
    files?: FileListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "path_parentId_name">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrderInput | SortOrder
    languageCode?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    newsType?: SortOrderInput | SortOrder
    isPin?: SortOrder
    isVisible?: SortOrder
    content?: SortOrder
    parentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Menu"> | number
    name?: StringWithAggregatesFilter<"Menu"> | string
    path?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    languageCode?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    type?: EnumMenuTypeEnumNullableWithAggregatesFilter<"Menu"> | $Enums.MenuTypeEnum | null
    newsType?: EnumNewsTypeEnumNullableWithAggregatesFilter<"Menu"> | $Enums.NewsTypeEnum | null
    isPin?: BoolWithAggregatesFilter<"Menu"> | boolean
    isVisible?: BoolWithAggregatesFilter<"Menu"> | boolean
    content?: JsonNullableListFilter<"Menu">
    parentId?: IntNullableWithAggregatesFilter<"Menu"> | number | null
    userId?: IntNullableWithAggregatesFilter<"Menu"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Menu"> | Date | string | null
  }

  export type AppealWhereInput = {
    AND?: AppealWhereInput | AppealWhereInput[]
    OR?: AppealWhereInput[]
    NOT?: AppealWhereInput | AppealWhereInput[]
    id?: IntFilter<"Appeal"> | number
    fullName?: StringFilter<"Appeal"> | string
    phoneNumber?: StringFilter<"Appeal"> | string
    option?: StringFilter<"Appeal"> | string
    email?: StringFilter<"Appeal"> | string
    questionOrSuggestion?: StringNullableFilter<"Appeal"> | string | null
    createdAt?: DateTimeFilter<"Appeal"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Appeal"> | Date | string | null
  }

  export type AppealOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    option?: SortOrder
    email?: SortOrder
    questionOrSuggestion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type AppealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppealWhereInput | AppealWhereInput[]
    OR?: AppealWhereInput[]
    NOT?: AppealWhereInput | AppealWhereInput[]
    fullName?: StringFilter<"Appeal"> | string
    phoneNumber?: StringFilter<"Appeal"> | string
    option?: StringFilter<"Appeal"> | string
    email?: StringFilter<"Appeal"> | string
    questionOrSuggestion?: StringNullableFilter<"Appeal"> | string | null
    createdAt?: DateTimeFilter<"Appeal"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Appeal"> | Date | string | null
  }, "id">

  export type AppealOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    option?: SortOrder
    email?: SortOrder
    questionOrSuggestion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AppealCountOrderByAggregateInput
    _avg?: AppealAvgOrderByAggregateInput
    _max?: AppealMaxOrderByAggregateInput
    _min?: AppealMinOrderByAggregateInput
    _sum?: AppealSumOrderByAggregateInput
  }

  export type AppealScalarWhereWithAggregatesInput = {
    AND?: AppealScalarWhereWithAggregatesInput | AppealScalarWhereWithAggregatesInput[]
    OR?: AppealScalarWhereWithAggregatesInput[]
    NOT?: AppealScalarWhereWithAggregatesInput | AppealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appeal"> | number
    fullName?: StringWithAggregatesFilter<"Appeal"> | string
    phoneNumber?: StringWithAggregatesFilter<"Appeal"> | string
    option?: StringWithAggregatesFilter<"Appeal"> | string
    email?: StringWithAggregatesFilter<"Appeal"> | string
    questionOrSuggestion?: StringNullableWithAggregatesFilter<"Appeal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appeal"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Appeal"> | Date | string | null
  }

  export type UserCreateInput = {
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    telegramUser?: TelegramUserCreateNestedOneWithoutUserInput
    accountSessions?: AccountSessionCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    menus?: MenuCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    telegramUser?: TelegramUserUncheckedCreateNestedOneWithoutUserInput
    accountSessions?: AccountSessionUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    menus?: MenuUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramUser?: TelegramUserUpdateOneWithoutUserNestedInput
    accountSessions?: AccountSessionUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    menus?: MenuUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramUser?: TelegramUserUncheckedUpdateOneWithoutUserNestedInput
    accountSessions?: AccountSessionUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    menus?: MenuUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TelegramUserCreateInput = {
    telegramId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutTelegramUserInput
  }

  export type TelegramUserUncheckedCreateInput = {
    id?: number
    telegramId: bigint | number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TelegramUserUpdateInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTelegramUserNestedInput
  }

  export type TelegramUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TelegramUserCreateManyInput = {
    id?: number
    telegramId: bigint | number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TelegramUserUpdateManyMutationInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TelegramUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountSessionCreateInput = {
    device: JsonNullValueInput | InputJsonValue
    ip: string
    sessionId: string
    revoked?: boolean
    exp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountSessionsInput
  }

  export type AccountSessionUncheckedCreateInput = {
    id?: number
    device: JsonNullValueInput | InputJsonValue
    ip: string
    sessionId: string
    revoked?: boolean
    userId: number
    exp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountSessionUpdateInput = {
    device?: JsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    exp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountSessionsNestedInput
  }

  export type AccountSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    device?: JsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    exp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSessionCreateManyInput = {
    id?: number
    device: JsonNullValueInput | InputJsonValue
    ip: string
    sessionId: string
    revoked?: boolean
    userId: number
    exp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountSessionUpdateManyMutationInput = {
    device?: JsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    exp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    device?: JsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    exp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    author?: UserCreateNestedOneWithoutNewsInput
    files?: FileCreateNestedManyWithoutNewsInput
    tags?: NewsTagCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: number
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    authorId?: number | null
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    files?: FileUncheckedCreateNestedManyWithoutNewsInput
    tags?: NewsTagUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneWithoutNewsNestedInput
    files?: FileUpdateManyWithoutNewsNestedInput
    tags?: NewsTagUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FileUncheckedUpdateManyWithoutNewsNestedInput
    tags?: NewsTagUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id?: number
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    authorId?: number | null
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NewsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsTagCreateInput = {
    name: string
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    news?: NewsCreateNestedManyWithoutTagsInput
  }

  export type NewsTagUncheckedCreateInput = {
    id?: number
    name: string
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    news?: NewsUncheckedCreateNestedManyWithoutTagsInput
  }

  export type NewsTagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateManyWithoutTagsNestedInput
  }

  export type NewsTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type NewsTagCreateManyInput = {
    id?: number
    name: string
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NewsTagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactCreateInput = {
    name: string
    href: string
    fileName?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    name: string
    href: string
    fileName?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactCreateManyInput = {
    id?: number
    name: string
    href: string
    fileName?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileCreateInput = {
    name: string
    mimeType: string
    extension: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    news?: NewsCreateNestedOneWithoutFilesInput
    menu?: MenuCreateNestedOneWithoutFilesInput
    banner?: BannerCreateNestedManyWithoutFileInput
    Partner?: PartnerCreateNestedManyWithoutIconInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    name: string
    mimeType: string
    extension: string
    newsId?: number | null
    menuId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    banner?: BannerUncheckedCreateNestedManyWithoutFileInput
    Partner?: PartnerUncheckedCreateNestedManyWithoutIconInput
  }

  export type FileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateOneWithoutFilesNestedInput
    menu?: MenuUpdateOneWithoutFilesNestedInput
    banner?: BannerUpdateManyWithoutFileNestedInput
    Partner?: PartnerUpdateManyWithoutIconNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    newsId?: NullableIntFieldUpdateOperationsInput | number | null
    menuId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banner?: BannerUncheckedUpdateManyWithoutFileNestedInput
    Partner?: PartnerUncheckedUpdateManyWithoutIconNestedInput
  }

  export type FileCreateManyInput = {
    id?: number
    name: string
    mimeType: string
    extension: string
    newsId?: number | null
    menuId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    newsId?: NullableIntFieldUpdateOperationsInput | number | null
    menuId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlaceCreateInput = {
    title: string
    name?: string | null
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    interactiveArea?: InteractiveAreaCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUncheckedCreateInput = {
    id?: number
    title: string
    name?: string | null
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    interactiveArea?: InteractiveAreaUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactiveArea?: InteractiveAreaUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    interactiveArea?: InteractiveAreaUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceCreateManyInput = {
    id?: number
    title: string
    name?: string | null
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlaceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InteractiveAreaCreateInput = {
    chairmanFullName: string
    chairmanPhoto: string
    phoneNumber?: string | null
    email?: string | null
    workingTime?: string | null
    address: string
    membersCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    place: PlaceCreateNestedOneWithoutInteractiveAreaInput
  }

  export type InteractiveAreaUncheckedCreateInput = {
    id?: number
    chairmanFullName: string
    chairmanPhoto: string
    phoneNumber?: string | null
    email?: string | null
    workingTime?: string | null
    address: string
    membersCount?: number
    placeId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type InteractiveAreaUpdateInput = {
    chairmanFullName?: StringFieldUpdateOperationsInput | string
    chairmanPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workingTime?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    place?: PlaceUpdateOneRequiredWithoutInteractiveAreaNestedInput
  }

  export type InteractiveAreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chairmanFullName?: StringFieldUpdateOperationsInput | string
    chairmanPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workingTime?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    placeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InteractiveAreaCreateManyInput = {
    id?: number
    chairmanFullName: string
    chairmanPhoto: string
    phoneNumber?: string | null
    email?: string | null
    workingTime?: string | null
    address: string
    membersCount?: number
    placeId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type InteractiveAreaUpdateManyMutationInput = {
    chairmanFullName?: StringFieldUpdateOperationsInput | string
    chairmanPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workingTime?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InteractiveAreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chairmanFullName?: StringFieldUpdateOperationsInput | string
    chairmanPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workingTime?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    placeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannerCreateInput = {
    type: $Enums.BannerTypeEnum
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    file: FileCreateNestedOneWithoutBannerInput
  }

  export type BannerUncheckedCreateInput = {
    id?: number
    type: $Enums.BannerTypeEnum
    url: string
    fileId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BannerUpdateInput = {
    type?: EnumBannerTypeEnumFieldUpdateOperationsInput | $Enums.BannerTypeEnum
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file?: FileUpdateOneRequiredWithoutBannerNestedInput
  }

  export type BannerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumBannerTypeEnumFieldUpdateOperationsInput | $Enums.BannerTypeEnum
    url?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannerCreateManyInput = {
    id?: number
    type: $Enums.BannerTypeEnum
    url: string
    fileId: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BannerUpdateManyMutationInput = {
    type?: EnumBannerTypeEnumFieldUpdateOperationsInput | $Enums.BannerTypeEnum
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumBannerTypeEnumFieldUpdateOperationsInput | $Enums.BannerTypeEnum
    url?: StringFieldUpdateOperationsInput | string
    fileId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PartnerCreateInput = {
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    icon: FileCreateNestedOneWithoutPartnerInput
  }

  export type PartnerUncheckedCreateInput = {
    id?: number
    title: string
    iconId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PartnerUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icon?: FileUpdateOneRequiredWithoutPartnerNestedInput
  }

  export type PartnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    iconId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PartnerCreateManyInput = {
    id?: number
    title: string
    iconId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PartnerUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PartnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    iconId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuCreateInput = {
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    parent?: MenuCreateNestedOneWithoutChildrenInput
    children?: MenuCreateNestedManyWithoutParentInput
    files?: FileCreateNestedManyWithoutMenuInput
    user?: UserCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    parentId?: number | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    files?: FileUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
    files?: FileUpdateManyWithoutMenuNestedInput
    user?: UserUpdateOneWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    files?: FileUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: number
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    parentId?: number | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MenuUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppealCreateInput = {
    fullName: string
    phoneNumber: string
    option: string
    email: string
    questionOrSuggestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppealUncheckedCreateInput = {
    id?: number
    fullName: string
    phoneNumber: string
    option: string
    email: string
    questionOrSuggestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppealUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionOrSuggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionOrSuggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppealCreateManyInput = {
    id?: number
    fullName: string
    phoneNumber: string
    option: string
    email: string
    questionOrSuggestion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AppealUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionOrSuggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionOrSuggestion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumFilter<$PrismaModel> | $Enums.UserRoleEnum
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TelegramUserNullableScalarRelationFilter = {
    is?: TelegramUserWhereInput | null
    isNot?: TelegramUserWhereInput | null
  }

  export type AccountSessionListRelationFilter = {
    every?: AccountSessionWhereInput
    some?: AccountSessionWhereInput
    none?: AccountSessionWhereInput
  }

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    hashedPassword?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    hashedPassword?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    hashedPassword?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumUserRoleEnumFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TelegramUserCountOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramUserAvgOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    userId?: SortOrder
  }

  export type TelegramUserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramUserMinOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramUserSumOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    userId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountSessionCountOrderByAggregateInput = {
    id?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    revoked?: SortOrder
    userId?: SortOrder
    exp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AccountSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    revoked?: SortOrder
    userId?: SortOrder
    exp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSessionMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    revoked?: SortOrder
    userId?: SortOrder
    exp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumNewsTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsTypeEnum | EnumNewsTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsTypeEnumFilter<$PrismaModel> | $Enums.NewsTypeEnum
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type NewsTagListRelationFilter = {
    every?: NewsTagWhereInput
    some?: NewsTagWhereInput
    none?: NewsTagWhereInput
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsLanguageCodePathCompoundUniqueInput = {
    languageCode: string
    path: string
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    description?: SortOrder
    languageCode?: SortOrder
    isArchived?: SortOrder
    isCheck?: SortOrder
    isTop?: SortOrder
    type?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    archivedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    description?: SortOrder
    languageCode?: SortOrder
    isArchived?: SortOrder
    isCheck?: SortOrder
    isTop?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    archivedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    description?: SortOrder
    languageCode?: SortOrder
    isArchived?: SortOrder
    isCheck?: SortOrder
    isTop?: SortOrder
    type?: SortOrder
    authorId?: SortOrder
    archivedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumNewsTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsTypeEnum | EnumNewsTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.NewsTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumNewsTypeEnumFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NewsTagLanguageCodeNameCompoundUniqueInput = {
    languageCode: string
    name: string
  }

  export type NewsTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    fileName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    fileName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    href?: SortOrder
    fileName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsNullableScalarRelationFilter = {
    is?: NewsWhereInput | null
    isNot?: NewsWhereInput | null
  }

  export type MenuNullableScalarRelationFilter = {
    is?: MenuWhereInput | null
    isNot?: MenuWhereInput | null
  }

  export type BannerListRelationFilter = {
    every?: BannerWhereInput
    some?: BannerWhereInput
    none?: BannerWhereInput
  }

  export type PartnerListRelationFilter = {
    every?: PartnerWhereInput
    some?: PartnerWhereInput
    none?: PartnerWhereInput
  }

  export type BannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileNewsIdNameCompoundUniqueInput = {
    newsId: number
    name: string
  }

  export type FileMenuIdNameCompoundUniqueInput = {
    menuId: number
    name: string
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    newsId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    menuId?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    newsId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    extension?: SortOrder
    newsId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
    newsId?: SortOrder
    menuId?: SortOrder
  }

  export type InteractiveAreaListRelationFilter = {
    every?: InteractiveAreaWhereInput
    some?: InteractiveAreaWhereInput
    none?: InteractiveAreaWhereInput
  }

  export type InteractiveAreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaceNameTitleLanguageCodeCompoundUniqueInput = {
    name: string
    title: string
    languageCode: string
  }

  export type PlaceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlaceScalarRelationFilter = {
    is?: PlaceWhereInput
    isNot?: PlaceWhereInput
  }

  export type InteractiveAreaCountOrderByAggregateInput = {
    id?: SortOrder
    chairmanFullName?: SortOrder
    chairmanPhoto?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    workingTime?: SortOrder
    address?: SortOrder
    membersCount?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InteractiveAreaAvgOrderByAggregateInput = {
    id?: SortOrder
    membersCount?: SortOrder
    placeId?: SortOrder
  }

  export type InteractiveAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    chairmanFullName?: SortOrder
    chairmanPhoto?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    workingTime?: SortOrder
    address?: SortOrder
    membersCount?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InteractiveAreaMinOrderByAggregateInput = {
    id?: SortOrder
    chairmanFullName?: SortOrder
    chairmanPhoto?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    workingTime?: SortOrder
    address?: SortOrder
    membersCount?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InteractiveAreaSumOrderByAggregateInput = {
    id?: SortOrder
    membersCount?: SortOrder
    placeId?: SortOrder
  }

  export type EnumBannerTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.BannerTypeEnum | EnumBannerTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.BannerTypeEnum[] | ListEnumBannerTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.BannerTypeEnum[] | ListEnumBannerTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumBannerTypeEnumFilter<$PrismaModel> | $Enums.BannerTypeEnum
  }

  export type FileScalarRelationFilter = {
    is?: FileWhereInput
    isNot?: FileWhereInput
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    fileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
  }

  export type EnumBannerTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BannerTypeEnum | EnumBannerTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.BannerTypeEnum[] | ListEnumBannerTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.BannerTypeEnum[] | ListEnumBannerTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumBannerTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.BannerTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBannerTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumBannerTypeEnumFilter<$PrismaModel>
  }

  export type PartnerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    iconId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerAvgOrderByAggregateInput = {
    id?: SortOrder
    iconId?: SortOrder
  }

  export type PartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    iconId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    iconId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerSumOrderByAggregateInput = {
    id?: SortOrder
    iconId?: SortOrder
  }

  export type EnumMenuTypeEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MenuTypeEnum | EnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.MenuTypeEnum[] | ListEnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MenuTypeEnum[] | ListEnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMenuTypeEnumNullableFilter<$PrismaModel> | $Enums.MenuTypeEnum | null
  }

  export type EnumNewsTypeEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsTypeEnum | EnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNewsTypeEnumNullableFilter<$PrismaModel> | $Enums.NewsTypeEnum | null
  }

  export type MenuPathParentIdNameCompoundUniqueInput = {
    path: string
    parentId: number
    name: string
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    languageCode?: SortOrder
    type?: SortOrder
    newsType?: SortOrder
    isPin?: SortOrder
    isVisible?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    languageCode?: SortOrder
    type?: SortOrder
    newsType?: SortOrder
    isPin?: SortOrder
    isVisible?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    languageCode?: SortOrder
    type?: SortOrder
    newsType?: SortOrder
    isPin?: SortOrder
    isVisible?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    userId?: SortOrder
  }

  export type EnumMenuTypeEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MenuTypeEnum | EnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.MenuTypeEnum[] | ListEnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MenuTypeEnum[] | ListEnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMenuTypeEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.MenuTypeEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMenuTypeEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumMenuTypeEnumNullableFilter<$PrismaModel>
  }

  export type EnumNewsTypeEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsTypeEnum | EnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNewsTypeEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.NewsTypeEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNewsTypeEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumNewsTypeEnumNullableFilter<$PrismaModel>
  }

  export type AppealCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    option?: SortOrder
    email?: SortOrder
    questionOrSuggestion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppealAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppealMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    option?: SortOrder
    email?: SortOrder
    questionOrSuggestion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppealMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    option?: SortOrder
    email?: SortOrder
    questionOrSuggestion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppealSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TelegramUserCreateNestedOneWithoutUserInput = {
    create?: XOR<TelegramUserCreateWithoutUserInput, TelegramUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: TelegramUserCreateOrConnectWithoutUserInput
    connect?: TelegramUserWhereUniqueInput
  }

  export type AccountSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountSessionCreateWithoutUserInput, AccountSessionUncheckedCreateWithoutUserInput> | AccountSessionCreateWithoutUserInput[] | AccountSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountSessionCreateOrConnectWithoutUserInput | AccountSessionCreateOrConnectWithoutUserInput[]
    createMany?: AccountSessionCreateManyUserInputEnvelope
    connect?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
  }

  export type NewsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type MenuCreateNestedManyWithoutUserInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type TelegramUserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TelegramUserCreateWithoutUserInput, TelegramUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: TelegramUserCreateOrConnectWithoutUserInput
    connect?: TelegramUserWhereUniqueInput
  }

  export type AccountSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountSessionCreateWithoutUserInput, AccountSessionUncheckedCreateWithoutUserInput> | AccountSessionCreateWithoutUserInput[] | AccountSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountSessionCreateOrConnectWithoutUserInput | AccountSessionCreateOrConnectWithoutUserInput[]
    createMany?: AccountSessionCreateManyUserInputEnvelope
    connect?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.UserRoleEnum
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TelegramUserUpdateOneWithoutUserNestedInput = {
    create?: XOR<TelegramUserCreateWithoutUserInput, TelegramUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: TelegramUserCreateOrConnectWithoutUserInput
    upsert?: TelegramUserUpsertWithoutUserInput
    disconnect?: TelegramUserWhereInput | boolean
    delete?: TelegramUserWhereInput | boolean
    connect?: TelegramUserWhereUniqueInput
    update?: XOR<XOR<TelegramUserUpdateToOneWithWhereWithoutUserInput, TelegramUserUpdateWithoutUserInput>, TelegramUserUncheckedUpdateWithoutUserInput>
  }

  export type AccountSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountSessionCreateWithoutUserInput, AccountSessionUncheckedCreateWithoutUserInput> | AccountSessionCreateWithoutUserInput[] | AccountSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountSessionCreateOrConnectWithoutUserInput | AccountSessionCreateOrConnectWithoutUserInput[]
    upsert?: AccountSessionUpsertWithWhereUniqueWithoutUserInput | AccountSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountSessionCreateManyUserInputEnvelope
    set?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
    disconnect?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
    delete?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
    connect?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
    update?: AccountSessionUpdateWithWhereUniqueWithoutUserInput | AccountSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountSessionUpdateManyWithWhereWithoutUserInput | AccountSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountSessionScalarWhereInput | AccountSessionScalarWhereInput[]
  }

  export type NewsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type MenuUpdateManyWithoutUserNestedInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutUserInput | MenuUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutUserInput | MenuUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutUserInput | MenuUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TelegramUserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TelegramUserCreateWithoutUserInput, TelegramUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: TelegramUserCreateOrConnectWithoutUserInput
    upsert?: TelegramUserUpsertWithoutUserInput
    disconnect?: TelegramUserWhereInput | boolean
    delete?: TelegramUserWhereInput | boolean
    connect?: TelegramUserWhereUniqueInput
    update?: XOR<XOR<TelegramUserUpdateToOneWithWhereWithoutUserInput, TelegramUserUpdateWithoutUserInput>, TelegramUserUncheckedUpdateWithoutUserInput>
  }

  export type AccountSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountSessionCreateWithoutUserInput, AccountSessionUncheckedCreateWithoutUserInput> | AccountSessionCreateWithoutUserInput[] | AccountSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountSessionCreateOrConnectWithoutUserInput | AccountSessionCreateOrConnectWithoutUserInput[]
    upsert?: AccountSessionUpsertWithWhereUniqueWithoutUserInput | AccountSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountSessionCreateManyUserInputEnvelope
    set?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
    disconnect?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
    delete?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
    connect?: AccountSessionWhereUniqueInput | AccountSessionWhereUniqueInput[]
    update?: AccountSessionUpdateWithWhereUniqueWithoutUserInput | AccountSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountSessionUpdateManyWithWhereWithoutUserInput | AccountSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountSessionScalarWhereInput | AccountSessionScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type MenuUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutUserInput | MenuUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutUserInput | MenuUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutUserInput | MenuUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTelegramUserInput = {
    create?: XOR<UserCreateWithoutTelegramUserInput, UserUncheckedCreateWithoutTelegramUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutTelegramUserInput
    connect?: UserWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutTelegramUserNestedInput = {
    create?: XOR<UserCreateWithoutTelegramUserInput, UserUncheckedCreateWithoutTelegramUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutTelegramUserInput
    upsert?: UserUpsertWithoutTelegramUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTelegramUserInput, UserUpdateWithoutTelegramUserInput>, UserUncheckedUpdateWithoutTelegramUserInput>
  }

  export type UserCreateNestedOneWithoutAccountSessionsInput = {
    create?: XOR<UserCreateWithoutAccountSessionsInput, UserUncheckedCreateWithoutAccountSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountSessionsNestedInput = {
    create?: XOR<UserCreateWithoutAccountSessionsInput, UserUncheckedCreateWithoutAccountSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountSessionsInput
    upsert?: UserUpsertWithoutAccountSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountSessionsInput, UserUpdateWithoutAccountSessionsInput>, UserUncheckedUpdateWithoutAccountSessionsInput>
  }

  export type NewsCreatecontentInput = {
    set: InputJsonValue[]
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type FileCreateNestedManyWithoutNewsInput = {
    create?: XOR<FileCreateWithoutNewsInput, FileUncheckedCreateWithoutNewsInput> | FileCreateWithoutNewsInput[] | FileUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutNewsInput | FileCreateOrConnectWithoutNewsInput[]
    createMany?: FileCreateManyNewsInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NewsTagCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput> | NewsTagCreateWithoutNewsInput[] | NewsTagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput | NewsTagCreateOrConnectWithoutNewsInput[]
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<FileCreateWithoutNewsInput, FileUncheckedCreateWithoutNewsInput> | FileCreateWithoutNewsInput[] | FileUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutNewsInput | FileCreateOrConnectWithoutNewsInput[]
    createMany?: FileCreateManyNewsInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NewsTagUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput> | NewsTagCreateWithoutNewsInput[] | NewsTagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput | NewsTagCreateOrConnectWithoutNewsInput[]
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumNewsTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.NewsTypeEnum
  }

  export type NewsUpdatecontentInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type UserUpdateOneWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type FileUpdateManyWithoutNewsNestedInput = {
    create?: XOR<FileCreateWithoutNewsInput, FileUncheckedCreateWithoutNewsInput> | FileCreateWithoutNewsInput[] | FileUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutNewsInput | FileCreateOrConnectWithoutNewsInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutNewsInput | FileUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: FileCreateManyNewsInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutNewsInput | FileUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: FileUpdateManyWithWhereWithoutNewsInput | FileUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type NewsTagUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput> | NewsTagCreateWithoutNewsInput[] | NewsTagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput | NewsTagCreateOrConnectWithoutNewsInput[]
    upsert?: NewsTagUpsertWithWhereUniqueWithoutNewsInput | NewsTagUpsertWithWhereUniqueWithoutNewsInput[]
    set?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    disconnect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    delete?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    update?: NewsTagUpdateWithWhereUniqueWithoutNewsInput | NewsTagUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsTagUpdateManyWithWhereWithoutNewsInput | NewsTagUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FileUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<FileCreateWithoutNewsInput, FileUncheckedCreateWithoutNewsInput> | FileCreateWithoutNewsInput[] | FileUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: FileCreateOrConnectWithoutNewsInput | FileCreateOrConnectWithoutNewsInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutNewsInput | FileUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: FileCreateManyNewsInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutNewsInput | FileUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: FileUpdateManyWithWhereWithoutNewsInput | FileUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type NewsTagUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput> | NewsTagCreateWithoutNewsInput[] | NewsTagUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: NewsTagCreateOrConnectWithoutNewsInput | NewsTagCreateOrConnectWithoutNewsInput[]
    upsert?: NewsTagUpsertWithWhereUniqueWithoutNewsInput | NewsTagUpsertWithWhereUniqueWithoutNewsInput[]
    set?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    disconnect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    delete?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    connect?: NewsTagWhereUniqueInput | NewsTagWhereUniqueInput[]
    update?: NewsTagUpdateWithWhereUniqueWithoutNewsInput | NewsTagUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: NewsTagUpdateManyWithWhereWithoutNewsInput | NewsTagUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
  }

  export type NewsCreateNestedManyWithoutTagsInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput> | NewsCreateWithoutTagsInput[] | NewsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput | NewsCreateOrConnectWithoutTagsInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput> | NewsCreateWithoutTagsInput[] | NewsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput | NewsCreateOrConnectWithoutTagsInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUpdateManyWithoutTagsNestedInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput> | NewsCreateWithoutTagsInput[] | NewsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput | NewsCreateOrConnectWithoutTagsInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTagsInput | NewsUpsertWithWhereUniqueWithoutTagsInput[]
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTagsInput | NewsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTagsInput | NewsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput> | NewsCreateWithoutTagsInput[] | NewsUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTagsInput | NewsCreateOrConnectWithoutTagsInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTagsInput | NewsUpsertWithWhereUniqueWithoutTagsInput[]
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTagsInput | NewsUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTagsInput | NewsUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsCreateNestedOneWithoutFilesInput = {
    create?: XOR<NewsCreateWithoutFilesInput, NewsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutFilesInput
    connect?: NewsWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutFilesInput = {
    create?: XOR<MenuCreateWithoutFilesInput, MenuUncheckedCreateWithoutFilesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutFilesInput
    connect?: MenuWhereUniqueInput
  }

  export type BannerCreateNestedManyWithoutFileInput = {
    create?: XOR<BannerCreateWithoutFileInput, BannerUncheckedCreateWithoutFileInput> | BannerCreateWithoutFileInput[] | BannerUncheckedCreateWithoutFileInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutFileInput | BannerCreateOrConnectWithoutFileInput[]
    createMany?: BannerCreateManyFileInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type PartnerCreateNestedManyWithoutIconInput = {
    create?: XOR<PartnerCreateWithoutIconInput, PartnerUncheckedCreateWithoutIconInput> | PartnerCreateWithoutIconInput[] | PartnerUncheckedCreateWithoutIconInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutIconInput | PartnerCreateOrConnectWithoutIconInput[]
    createMany?: PartnerCreateManyIconInputEnvelope
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
  }

  export type BannerUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<BannerCreateWithoutFileInput, BannerUncheckedCreateWithoutFileInput> | BannerCreateWithoutFileInput[] | BannerUncheckedCreateWithoutFileInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutFileInput | BannerCreateOrConnectWithoutFileInput[]
    createMany?: BannerCreateManyFileInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type PartnerUncheckedCreateNestedManyWithoutIconInput = {
    create?: XOR<PartnerCreateWithoutIconInput, PartnerUncheckedCreateWithoutIconInput> | PartnerCreateWithoutIconInput[] | PartnerUncheckedCreateWithoutIconInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutIconInput | PartnerCreateOrConnectWithoutIconInput[]
    createMany?: PartnerCreateManyIconInputEnvelope
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
  }

  export type NewsUpdateOneWithoutFilesNestedInput = {
    create?: XOR<NewsCreateWithoutFilesInput, NewsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutFilesInput
    upsert?: NewsUpsertWithoutFilesInput
    disconnect?: NewsWhereInput | boolean
    delete?: NewsWhereInput | boolean
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutFilesInput, NewsUpdateWithoutFilesInput>, NewsUncheckedUpdateWithoutFilesInput>
  }

  export type MenuUpdateOneWithoutFilesNestedInput = {
    create?: XOR<MenuCreateWithoutFilesInput, MenuUncheckedCreateWithoutFilesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutFilesInput
    upsert?: MenuUpsertWithoutFilesInput
    disconnect?: MenuWhereInput | boolean
    delete?: MenuWhereInput | boolean
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutFilesInput, MenuUpdateWithoutFilesInput>, MenuUncheckedUpdateWithoutFilesInput>
  }

  export type BannerUpdateManyWithoutFileNestedInput = {
    create?: XOR<BannerCreateWithoutFileInput, BannerUncheckedCreateWithoutFileInput> | BannerCreateWithoutFileInput[] | BannerUncheckedCreateWithoutFileInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutFileInput | BannerCreateOrConnectWithoutFileInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutFileInput | BannerUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: BannerCreateManyFileInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutFileInput | BannerUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutFileInput | BannerUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type PartnerUpdateManyWithoutIconNestedInput = {
    create?: XOR<PartnerCreateWithoutIconInput, PartnerUncheckedCreateWithoutIconInput> | PartnerCreateWithoutIconInput[] | PartnerUncheckedCreateWithoutIconInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutIconInput | PartnerCreateOrConnectWithoutIconInput[]
    upsert?: PartnerUpsertWithWhereUniqueWithoutIconInput | PartnerUpsertWithWhereUniqueWithoutIconInput[]
    createMany?: PartnerCreateManyIconInputEnvelope
    set?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    disconnect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    delete?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    update?: PartnerUpdateWithWhereUniqueWithoutIconInput | PartnerUpdateWithWhereUniqueWithoutIconInput[]
    updateMany?: PartnerUpdateManyWithWhereWithoutIconInput | PartnerUpdateManyWithWhereWithoutIconInput[]
    deleteMany?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
  }

  export type BannerUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<BannerCreateWithoutFileInput, BannerUncheckedCreateWithoutFileInput> | BannerCreateWithoutFileInput[] | BannerUncheckedCreateWithoutFileInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutFileInput | BannerCreateOrConnectWithoutFileInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutFileInput | BannerUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: BannerCreateManyFileInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutFileInput | BannerUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutFileInput | BannerUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type PartnerUncheckedUpdateManyWithoutIconNestedInput = {
    create?: XOR<PartnerCreateWithoutIconInput, PartnerUncheckedCreateWithoutIconInput> | PartnerCreateWithoutIconInput[] | PartnerUncheckedCreateWithoutIconInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutIconInput | PartnerCreateOrConnectWithoutIconInput[]
    upsert?: PartnerUpsertWithWhereUniqueWithoutIconInput | PartnerUpsertWithWhereUniqueWithoutIconInput[]
    createMany?: PartnerCreateManyIconInputEnvelope
    set?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    disconnect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    delete?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    update?: PartnerUpdateWithWhereUniqueWithoutIconInput | PartnerUpdateWithWhereUniqueWithoutIconInput[]
    updateMany?: PartnerUpdateManyWithWhereWithoutIconInput | PartnerUpdateManyWithWhereWithoutIconInput[]
    deleteMany?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
  }

  export type InteractiveAreaCreateNestedManyWithoutPlaceInput = {
    create?: XOR<InteractiveAreaCreateWithoutPlaceInput, InteractiveAreaUncheckedCreateWithoutPlaceInput> | InteractiveAreaCreateWithoutPlaceInput[] | InteractiveAreaUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: InteractiveAreaCreateOrConnectWithoutPlaceInput | InteractiveAreaCreateOrConnectWithoutPlaceInput[]
    createMany?: InteractiveAreaCreateManyPlaceInputEnvelope
    connect?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
  }

  export type InteractiveAreaUncheckedCreateNestedManyWithoutPlaceInput = {
    create?: XOR<InteractiveAreaCreateWithoutPlaceInput, InteractiveAreaUncheckedCreateWithoutPlaceInput> | InteractiveAreaCreateWithoutPlaceInput[] | InteractiveAreaUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: InteractiveAreaCreateOrConnectWithoutPlaceInput | InteractiveAreaCreateOrConnectWithoutPlaceInput[]
    createMany?: InteractiveAreaCreateManyPlaceInputEnvelope
    connect?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
  }

  export type InteractiveAreaUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<InteractiveAreaCreateWithoutPlaceInput, InteractiveAreaUncheckedCreateWithoutPlaceInput> | InteractiveAreaCreateWithoutPlaceInput[] | InteractiveAreaUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: InteractiveAreaCreateOrConnectWithoutPlaceInput | InteractiveAreaCreateOrConnectWithoutPlaceInput[]
    upsert?: InteractiveAreaUpsertWithWhereUniqueWithoutPlaceInput | InteractiveAreaUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: InteractiveAreaCreateManyPlaceInputEnvelope
    set?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
    disconnect?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
    delete?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
    connect?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
    update?: InteractiveAreaUpdateWithWhereUniqueWithoutPlaceInput | InteractiveAreaUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: InteractiveAreaUpdateManyWithWhereWithoutPlaceInput | InteractiveAreaUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: InteractiveAreaScalarWhereInput | InteractiveAreaScalarWhereInput[]
  }

  export type InteractiveAreaUncheckedUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<InteractiveAreaCreateWithoutPlaceInput, InteractiveAreaUncheckedCreateWithoutPlaceInput> | InteractiveAreaCreateWithoutPlaceInput[] | InteractiveAreaUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: InteractiveAreaCreateOrConnectWithoutPlaceInput | InteractiveAreaCreateOrConnectWithoutPlaceInput[]
    upsert?: InteractiveAreaUpsertWithWhereUniqueWithoutPlaceInput | InteractiveAreaUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: InteractiveAreaCreateManyPlaceInputEnvelope
    set?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
    disconnect?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
    delete?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
    connect?: InteractiveAreaWhereUniqueInput | InteractiveAreaWhereUniqueInput[]
    update?: InteractiveAreaUpdateWithWhereUniqueWithoutPlaceInput | InteractiveAreaUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: InteractiveAreaUpdateManyWithWhereWithoutPlaceInput | InteractiveAreaUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: InteractiveAreaScalarWhereInput | InteractiveAreaScalarWhereInput[]
  }

  export type PlaceCreateNestedOneWithoutInteractiveAreaInput = {
    create?: XOR<PlaceCreateWithoutInteractiveAreaInput, PlaceUncheckedCreateWithoutInteractiveAreaInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutInteractiveAreaInput
    connect?: PlaceWhereUniqueInput
  }

  export type PlaceUpdateOneRequiredWithoutInteractiveAreaNestedInput = {
    create?: XOR<PlaceCreateWithoutInteractiveAreaInput, PlaceUncheckedCreateWithoutInteractiveAreaInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutInteractiveAreaInput
    upsert?: PlaceUpsertWithoutInteractiveAreaInput
    connect?: PlaceWhereUniqueInput
    update?: XOR<XOR<PlaceUpdateToOneWithWhereWithoutInteractiveAreaInput, PlaceUpdateWithoutInteractiveAreaInput>, PlaceUncheckedUpdateWithoutInteractiveAreaInput>
  }

  export type FileCreateNestedOneWithoutBannerInput = {
    create?: XOR<FileCreateWithoutBannerInput, FileUncheckedCreateWithoutBannerInput>
    connectOrCreate?: FileCreateOrConnectWithoutBannerInput
    connect?: FileWhereUniqueInput
  }

  export type EnumBannerTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.BannerTypeEnum
  }

  export type FileUpdateOneRequiredWithoutBannerNestedInput = {
    create?: XOR<FileCreateWithoutBannerInput, FileUncheckedCreateWithoutBannerInput>
    connectOrCreate?: FileCreateOrConnectWithoutBannerInput
    upsert?: FileUpsertWithoutBannerInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutBannerInput, FileUpdateWithoutBannerInput>, FileUncheckedUpdateWithoutBannerInput>
  }

  export type FileCreateNestedOneWithoutPartnerInput = {
    create?: XOR<FileCreateWithoutPartnerInput, FileUncheckedCreateWithoutPartnerInput>
    connectOrCreate?: FileCreateOrConnectWithoutPartnerInput
    connect?: FileWhereUniqueInput
  }

  export type FileUpdateOneRequiredWithoutPartnerNestedInput = {
    create?: XOR<FileCreateWithoutPartnerInput, FileUncheckedCreateWithoutPartnerInput>
    connectOrCreate?: FileCreateOrConnectWithoutPartnerInput
    upsert?: FileUpsertWithoutPartnerInput
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutPartnerInput, FileUpdateWithoutPartnerInput>, FileUncheckedUpdateWithoutPartnerInput>
  }

  export type MenuCreatecontentInput = {
    set: InputJsonValue[]
  }

  export type MenuCreateNestedOneWithoutChildrenInput = {
    create?: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MenuCreateOrConnectWithoutChildrenInput
    connect?: MenuWhereUniqueInput
  }

  export type MenuCreateNestedManyWithoutParentInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutMenuInput = {
    create?: XOR<FileCreateWithoutMenuInput, FileUncheckedCreateWithoutMenuInput> | FileCreateWithoutMenuInput[] | FileUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: FileCreateOrConnectWithoutMenuInput | FileCreateOrConnectWithoutMenuInput[]
    createMany?: FileCreateManyMenuInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMenusInput = {
    create?: XOR<UserCreateWithoutMenusInput, UserUncheckedCreateWithoutMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenusInput
    connect?: UserWhereUniqueInput
  }

  export type MenuUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<FileCreateWithoutMenuInput, FileUncheckedCreateWithoutMenuInput> | FileCreateWithoutMenuInput[] | FileUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: FileCreateOrConnectWithoutMenuInput | FileCreateOrConnectWithoutMenuInput[]
    createMany?: FileCreateManyMenuInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NullableEnumMenuTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.MenuTypeEnum | null
  }

  export type NullableEnumNewsTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.NewsTypeEnum | null
  }

  export type MenuUpdatecontentInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type MenuUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MenuCreateOrConnectWithoutChildrenInput
    upsert?: MenuUpsertWithoutChildrenInput
    disconnect?: MenuWhereInput | boolean
    delete?: MenuWhereInput | boolean
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutChildrenInput, MenuUpdateWithoutChildrenInput>, MenuUncheckedUpdateWithoutChildrenInput>
  }

  export type MenuUpdateManyWithoutParentNestedInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutParentInput | MenuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutParentInput | MenuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutParentInput | MenuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type FileUpdateManyWithoutMenuNestedInput = {
    create?: XOR<FileCreateWithoutMenuInput, FileUncheckedCreateWithoutMenuInput> | FileCreateWithoutMenuInput[] | FileUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: FileCreateOrConnectWithoutMenuInput | FileCreateOrConnectWithoutMenuInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutMenuInput | FileUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: FileCreateManyMenuInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutMenuInput | FileUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: FileUpdateManyWithWhereWithoutMenuInput | FileUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type UserUpdateOneWithoutMenusNestedInput = {
    create?: XOR<UserCreateWithoutMenusInput, UserUncheckedCreateWithoutMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenusInput
    upsert?: UserUpsertWithoutMenusInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMenusInput, UserUpdateWithoutMenusInput>, UserUncheckedUpdateWithoutMenusInput>
  }

  export type MenuUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutParentInput | MenuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutParentInput | MenuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutParentInput | MenuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<FileCreateWithoutMenuInput, FileUncheckedCreateWithoutMenuInput> | FileCreateWithoutMenuInput[] | FileUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: FileCreateOrConnectWithoutMenuInput | FileCreateOrConnectWithoutMenuInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutMenuInput | FileUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: FileCreateManyMenuInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutMenuInput | FileUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: FileUpdateManyWithWhereWithoutMenuInput | FileUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumFilter<$PrismaModel> | $Enums.UserRoleEnum
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoleEnum | EnumUserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoleEnum[] | ListEnumUserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumUserRoleEnumFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumNewsTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsTypeEnum | EnumNewsTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsTypeEnumFilter<$PrismaModel> | $Enums.NewsTypeEnum
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumNewsTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsTypeEnum | EnumNewsTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.NewsTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumNewsTypeEnumFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBannerTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.BannerTypeEnum | EnumBannerTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.BannerTypeEnum[] | ListEnumBannerTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.BannerTypeEnum[] | ListEnumBannerTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumBannerTypeEnumFilter<$PrismaModel> | $Enums.BannerTypeEnum
  }

  export type NestedEnumBannerTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BannerTypeEnum | EnumBannerTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.BannerTypeEnum[] | ListEnumBannerTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.BannerTypeEnum[] | ListEnumBannerTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumBannerTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.BannerTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBannerTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumBannerTypeEnumFilter<$PrismaModel>
  }

  export type NestedEnumMenuTypeEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MenuTypeEnum | EnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.MenuTypeEnum[] | ListEnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MenuTypeEnum[] | ListEnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMenuTypeEnumNullableFilter<$PrismaModel> | $Enums.MenuTypeEnum | null
  }

  export type NestedEnumNewsTypeEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsTypeEnum | EnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNewsTypeEnumNullableFilter<$PrismaModel> | $Enums.NewsTypeEnum | null
  }

  export type NestedEnumMenuTypeEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MenuTypeEnum | EnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.MenuTypeEnum[] | ListEnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MenuTypeEnum[] | ListEnumMenuTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMenuTypeEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.MenuTypeEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMenuTypeEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumMenuTypeEnumNullableFilter<$PrismaModel>
  }

  export type NestedEnumNewsTypeEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsTypeEnum | EnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NewsTypeEnum[] | ListEnumNewsTypeEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNewsTypeEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.NewsTypeEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNewsTypeEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumNewsTypeEnumNullableFilter<$PrismaModel>
  }

  export type TelegramUserCreateWithoutUserInput = {
    telegramId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TelegramUserUncheckedCreateWithoutUserInput = {
    id?: number
    telegramId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TelegramUserCreateOrConnectWithoutUserInput = {
    where: TelegramUserWhereUniqueInput
    create: XOR<TelegramUserCreateWithoutUserInput, TelegramUserUncheckedCreateWithoutUserInput>
  }

  export type AccountSessionCreateWithoutUserInput = {
    device: JsonNullValueInput | InputJsonValue
    ip: string
    sessionId: string
    revoked?: boolean
    exp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountSessionUncheckedCreateWithoutUserInput = {
    id?: number
    device: JsonNullValueInput | InputJsonValue
    ip: string
    sessionId: string
    revoked?: boolean
    exp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountSessionCreateOrConnectWithoutUserInput = {
    where: AccountSessionWhereUniqueInput
    create: XOR<AccountSessionCreateWithoutUserInput, AccountSessionUncheckedCreateWithoutUserInput>
  }

  export type AccountSessionCreateManyUserInputEnvelope = {
    data: AccountSessionCreateManyUserInput | AccountSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NewsCreateWithoutAuthorInput = {
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    files?: FileCreateNestedManyWithoutNewsInput
    tags?: NewsTagCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    files?: FileUncheckedCreateNestedManyWithoutNewsInput
    tags?: NewsTagUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsCreateManyAuthorInputEnvelope = {
    data: NewsCreateManyAuthorInput | NewsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type MenuCreateWithoutUserInput = {
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    parent?: MenuCreateNestedOneWithoutChildrenInput
    children?: MenuCreateNestedManyWithoutParentInput
    files?: FileCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    files?: FileUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutUserInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput>
  }

  export type MenuCreateManyUserInputEnvelope = {
    data: MenuCreateManyUserInput | MenuCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TelegramUserUpsertWithoutUserInput = {
    update: XOR<TelegramUserUpdateWithoutUserInput, TelegramUserUncheckedUpdateWithoutUserInput>
    create: XOR<TelegramUserCreateWithoutUserInput, TelegramUserUncheckedCreateWithoutUserInput>
    where?: TelegramUserWhereInput
  }

  export type TelegramUserUpdateToOneWithWhereWithoutUserInput = {
    where?: TelegramUserWhereInput
    data: XOR<TelegramUserUpdateWithoutUserInput, TelegramUserUncheckedUpdateWithoutUserInput>
  }

  export type TelegramUserUpdateWithoutUserInput = {
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TelegramUserUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountSessionWhereUniqueInput
    update: XOR<AccountSessionUpdateWithoutUserInput, AccountSessionUncheckedUpdateWithoutUserInput>
    create: XOR<AccountSessionCreateWithoutUserInput, AccountSessionUncheckedCreateWithoutUserInput>
  }

  export type AccountSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountSessionWhereUniqueInput
    data: XOR<AccountSessionUpdateWithoutUserInput, AccountSessionUncheckedUpdateWithoutUserInput>
  }

  export type AccountSessionUpdateManyWithWhereWithoutUserInput = {
    where: AccountSessionScalarWhereInput
    data: XOR<AccountSessionUpdateManyMutationInput, AccountSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountSessionScalarWhereInput = {
    AND?: AccountSessionScalarWhereInput | AccountSessionScalarWhereInput[]
    OR?: AccountSessionScalarWhereInput[]
    NOT?: AccountSessionScalarWhereInput | AccountSessionScalarWhereInput[]
    id?: IntFilter<"AccountSession"> | number
    device?: JsonFilter<"AccountSession">
    ip?: StringFilter<"AccountSession"> | string
    sessionId?: StringFilter<"AccountSession"> | string
    revoked?: BoolFilter<"AccountSession"> | boolean
    userId?: IntFilter<"AccountSession"> | number
    exp?: DateTimeFilter<"AccountSession"> | Date | string
    createdAt?: DateTimeFilter<"AccountSession"> | Date | string
    updatedAt?: DateTimeFilter<"AccountSession"> | Date | string
  }

  export type NewsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: IntFilter<"News"> | number
    title?: StringFilter<"News"> | string
    path?: StringFilter<"News"> | string
    description?: StringFilter<"News"> | string
    languageCode?: StringNullableFilter<"News"> | string | null
    isArchived?: BoolFilter<"News"> | boolean
    isCheck?: BoolFilter<"News"> | boolean
    isTop?: BoolFilter<"News"> | boolean
    type?: EnumNewsTypeEnumFilter<"News"> | $Enums.NewsTypeEnum
    content?: JsonNullableListFilter<"News">
    authorId?: IntNullableFilter<"News"> | number | null
    archivedAt?: DateTimeNullableFilter<"News"> | Date | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeNullableFilter<"News"> | Date | string | null
  }

  export type MenuUpsertWithWhereUniqueWithoutUserInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutUserInput, MenuUncheckedUpdateWithoutUserInput>
    create: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutUserInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutUserInput, MenuUncheckedUpdateWithoutUserInput>
  }

  export type MenuUpdateManyWithWhereWithoutUserInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutUserInput>
  }

  export type MenuScalarWhereInput = {
    AND?: MenuScalarWhereInput | MenuScalarWhereInput[]
    OR?: MenuScalarWhereInput[]
    NOT?: MenuScalarWhereInput | MenuScalarWhereInput[]
    id?: IntFilter<"Menu"> | number
    name?: StringFilter<"Menu"> | string
    path?: StringNullableFilter<"Menu"> | string | null
    languageCode?: StringNullableFilter<"Menu"> | string | null
    type?: EnumMenuTypeEnumNullableFilter<"Menu"> | $Enums.MenuTypeEnum | null
    newsType?: EnumNewsTypeEnumNullableFilter<"Menu"> | $Enums.NewsTypeEnum | null
    isPin?: BoolFilter<"Menu"> | boolean
    isVisible?: BoolFilter<"Menu"> | boolean
    content?: JsonNullableListFilter<"Menu">
    parentId?: IntNullableFilter<"Menu"> | number | null
    userId?: IntNullableFilter<"Menu"> | number | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
  }

  export type UserCreateWithoutTelegramUserInput = {
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accountSessions?: AccountSessionCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    menus?: MenuCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTelegramUserInput = {
    id?: number
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    accountSessions?: AccountSessionUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    menus?: MenuUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTelegramUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTelegramUserInput, UserUncheckedCreateWithoutTelegramUserInput>
  }

  export type UserUpsertWithoutTelegramUserInput = {
    update: XOR<UserUpdateWithoutTelegramUserInput, UserUncheckedUpdateWithoutTelegramUserInput>
    create: XOR<UserCreateWithoutTelegramUserInput, UserUncheckedCreateWithoutTelegramUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTelegramUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTelegramUserInput, UserUncheckedUpdateWithoutTelegramUserInput>
  }

  export type UserUpdateWithoutTelegramUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountSessions?: AccountSessionUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    menus?: MenuUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTelegramUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountSessions?: AccountSessionUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    menus?: MenuUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountSessionsInput = {
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    telegramUser?: TelegramUserCreateNestedOneWithoutUserInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    menus?: MenuCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountSessionsInput = {
    id?: number
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    telegramUser?: TelegramUserUncheckedCreateNestedOneWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    menus?: MenuUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountSessionsInput, UserUncheckedCreateWithoutAccountSessionsInput>
  }

  export type UserUpsertWithoutAccountSessionsInput = {
    update: XOR<UserUpdateWithoutAccountSessionsInput, UserUncheckedUpdateWithoutAccountSessionsInput>
    create: XOR<UserCreateWithoutAccountSessionsInput, UserUncheckedCreateWithoutAccountSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountSessionsInput, UserUncheckedUpdateWithoutAccountSessionsInput>
  }

  export type UserUpdateWithoutAccountSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramUser?: TelegramUserUpdateOneWithoutUserNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    menus?: MenuUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramUser?: TelegramUserUncheckedUpdateOneWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    menus?: MenuUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNewsInput = {
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    telegramUser?: TelegramUserCreateNestedOneWithoutUserInput
    accountSessions?: AccountSessionCreateNestedManyWithoutUserInput
    menus?: MenuCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    id?: number
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    telegramUser?: TelegramUserUncheckedCreateNestedOneWithoutUserInput
    accountSessions?: AccountSessionUncheckedCreateNestedManyWithoutUserInput
    menus?: MenuUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type FileCreateWithoutNewsInput = {
    name: string
    mimeType: string
    extension: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    menu?: MenuCreateNestedOneWithoutFilesInput
    banner?: BannerCreateNestedManyWithoutFileInput
    Partner?: PartnerCreateNestedManyWithoutIconInput
  }

  export type FileUncheckedCreateWithoutNewsInput = {
    id?: number
    name: string
    mimeType: string
    extension: string
    menuId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    banner?: BannerUncheckedCreateNestedManyWithoutFileInput
    Partner?: PartnerUncheckedCreateNestedManyWithoutIconInput
  }

  export type FileCreateOrConnectWithoutNewsInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutNewsInput, FileUncheckedCreateWithoutNewsInput>
  }

  export type FileCreateManyNewsInputEnvelope = {
    data: FileCreateManyNewsInput | FileCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type NewsTagCreateWithoutNewsInput = {
    name: string
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NewsTagUncheckedCreateWithoutNewsInput = {
    id?: number
    name: string
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NewsTagCreateOrConnectWithoutNewsInput = {
    where: NewsTagWhereUniqueInput
    create: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput>
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramUser?: TelegramUserUpdateOneWithoutUserNestedInput
    accountSessions?: AccountSessionUpdateManyWithoutUserNestedInput
    menus?: MenuUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramUser?: TelegramUserUncheckedUpdateOneWithoutUserNestedInput
    accountSessions?: AccountSessionUncheckedUpdateManyWithoutUserNestedInput
    menus?: MenuUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FileUpsertWithWhereUniqueWithoutNewsInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutNewsInput, FileUncheckedUpdateWithoutNewsInput>
    create: XOR<FileCreateWithoutNewsInput, FileUncheckedCreateWithoutNewsInput>
  }

  export type FileUpdateWithWhereUniqueWithoutNewsInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutNewsInput, FileUncheckedUpdateWithoutNewsInput>
  }

  export type FileUpdateManyWithWhereWithoutNewsInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutNewsInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: IntFilter<"File"> | number
    name?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    extension?: StringFilter<"File"> | string
    newsId?: IntNullableFilter<"File"> | number | null
    menuId?: IntNullableFilter<"File"> | number | null
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeNullableFilter<"File"> | Date | string | null
  }

  export type NewsTagUpsertWithWhereUniqueWithoutNewsInput = {
    where: NewsTagWhereUniqueInput
    update: XOR<NewsTagUpdateWithoutNewsInput, NewsTagUncheckedUpdateWithoutNewsInput>
    create: XOR<NewsTagCreateWithoutNewsInput, NewsTagUncheckedCreateWithoutNewsInput>
  }

  export type NewsTagUpdateWithWhereUniqueWithoutNewsInput = {
    where: NewsTagWhereUniqueInput
    data: XOR<NewsTagUpdateWithoutNewsInput, NewsTagUncheckedUpdateWithoutNewsInput>
  }

  export type NewsTagUpdateManyWithWhereWithoutNewsInput = {
    where: NewsTagScalarWhereInput
    data: XOR<NewsTagUpdateManyMutationInput, NewsTagUncheckedUpdateManyWithoutNewsInput>
  }

  export type NewsTagScalarWhereInput = {
    AND?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
    OR?: NewsTagScalarWhereInput[]
    NOT?: NewsTagScalarWhereInput | NewsTagScalarWhereInput[]
    id?: IntFilter<"NewsTag"> | number
    name?: StringFilter<"NewsTag"> | string
    languageCode?: StringNullableFilter<"NewsTag"> | string | null
    createdAt?: DateTimeFilter<"NewsTag"> | Date | string
    updatedAt?: DateTimeNullableFilter<"NewsTag"> | Date | string | null
  }

  export type NewsCreateWithoutTagsInput = {
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    author?: UserCreateNestedOneWithoutNewsInput
    files?: FileCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    authorId?: number | null
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    files?: FileUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutTagsInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput>
  }

  export type NewsUpsertWithWhereUniqueWithoutTagsInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutTagsInput, NewsUncheckedUpdateWithoutTagsInput>
    create: XOR<NewsCreateWithoutTagsInput, NewsUncheckedCreateWithoutTagsInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutTagsInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutTagsInput, NewsUncheckedUpdateWithoutTagsInput>
  }

  export type NewsUpdateManyWithWhereWithoutTagsInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutTagsInput>
  }

  export type NewsCreateWithoutFilesInput = {
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    author?: UserCreateNestedOneWithoutNewsInput
    tags?: NewsTagCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutFilesInput = {
    id?: number
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    authorId?: number | null
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tags?: NewsTagUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutFilesInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutFilesInput, NewsUncheckedCreateWithoutFilesInput>
  }

  export type MenuCreateWithoutFilesInput = {
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    parent?: MenuCreateNestedOneWithoutChildrenInput
    children?: MenuCreateNestedManyWithoutParentInput
    user?: UserCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutFilesInput = {
    id?: number
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    parentId?: number | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
  }

  export type MenuCreateOrConnectWithoutFilesInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutFilesInput, MenuUncheckedCreateWithoutFilesInput>
  }

  export type BannerCreateWithoutFileInput = {
    type: $Enums.BannerTypeEnum
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BannerUncheckedCreateWithoutFileInput = {
    id?: number
    type: $Enums.BannerTypeEnum
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BannerCreateOrConnectWithoutFileInput = {
    where: BannerWhereUniqueInput
    create: XOR<BannerCreateWithoutFileInput, BannerUncheckedCreateWithoutFileInput>
  }

  export type BannerCreateManyFileInputEnvelope = {
    data: BannerCreateManyFileInput | BannerCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type PartnerCreateWithoutIconInput = {
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PartnerUncheckedCreateWithoutIconInput = {
    id?: number
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PartnerCreateOrConnectWithoutIconInput = {
    where: PartnerWhereUniqueInput
    create: XOR<PartnerCreateWithoutIconInput, PartnerUncheckedCreateWithoutIconInput>
  }

  export type PartnerCreateManyIconInputEnvelope = {
    data: PartnerCreateManyIconInput | PartnerCreateManyIconInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithoutFilesInput = {
    update: XOR<NewsUpdateWithoutFilesInput, NewsUncheckedUpdateWithoutFilesInput>
    create: XOR<NewsCreateWithoutFilesInput, NewsUncheckedCreateWithoutFilesInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutFilesInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutFilesInput, NewsUncheckedUpdateWithoutFilesInput>
  }

  export type NewsUpdateWithoutFilesInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneWithoutNewsNestedInput
    tags?: NewsTagUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: NewsTagUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type MenuUpsertWithoutFilesInput = {
    update: XOR<MenuUpdateWithoutFilesInput, MenuUncheckedUpdateWithoutFilesInput>
    create: XOR<MenuCreateWithoutFilesInput, MenuUncheckedCreateWithoutFilesInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutFilesInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutFilesInput, MenuUncheckedUpdateWithoutFilesInput>
  }

  export type MenuUpdateWithoutFilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
    user?: UserUpdateOneWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
  }

  export type BannerUpsertWithWhereUniqueWithoutFileInput = {
    where: BannerWhereUniqueInput
    update: XOR<BannerUpdateWithoutFileInput, BannerUncheckedUpdateWithoutFileInput>
    create: XOR<BannerCreateWithoutFileInput, BannerUncheckedCreateWithoutFileInput>
  }

  export type BannerUpdateWithWhereUniqueWithoutFileInput = {
    where: BannerWhereUniqueInput
    data: XOR<BannerUpdateWithoutFileInput, BannerUncheckedUpdateWithoutFileInput>
  }

  export type BannerUpdateManyWithWhereWithoutFileInput = {
    where: BannerScalarWhereInput
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyWithoutFileInput>
  }

  export type BannerScalarWhereInput = {
    AND?: BannerScalarWhereInput | BannerScalarWhereInput[]
    OR?: BannerScalarWhereInput[]
    NOT?: BannerScalarWhereInput | BannerScalarWhereInput[]
    id?: IntFilter<"Banner"> | number
    type?: EnumBannerTypeEnumFilter<"Banner"> | $Enums.BannerTypeEnum
    url?: StringFilter<"Banner"> | string
    fileId?: IntFilter<"Banner"> | number
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Banner"> | Date | string | null
  }

  export type PartnerUpsertWithWhereUniqueWithoutIconInput = {
    where: PartnerWhereUniqueInput
    update: XOR<PartnerUpdateWithoutIconInput, PartnerUncheckedUpdateWithoutIconInput>
    create: XOR<PartnerCreateWithoutIconInput, PartnerUncheckedCreateWithoutIconInput>
  }

  export type PartnerUpdateWithWhereUniqueWithoutIconInput = {
    where: PartnerWhereUniqueInput
    data: XOR<PartnerUpdateWithoutIconInput, PartnerUncheckedUpdateWithoutIconInput>
  }

  export type PartnerUpdateManyWithWhereWithoutIconInput = {
    where: PartnerScalarWhereInput
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyWithoutIconInput>
  }

  export type PartnerScalarWhereInput = {
    AND?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
    OR?: PartnerScalarWhereInput[]
    NOT?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
    id?: IntFilter<"Partner"> | number
    title?: StringFilter<"Partner"> | string
    iconId?: IntFilter<"Partner"> | number
    url?: StringFilter<"Partner"> | string
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Partner"> | Date | string | null
  }

  export type InteractiveAreaCreateWithoutPlaceInput = {
    chairmanFullName: string
    chairmanPhoto: string
    phoneNumber?: string | null
    email?: string | null
    workingTime?: string | null
    address: string
    membersCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type InteractiveAreaUncheckedCreateWithoutPlaceInput = {
    id?: number
    chairmanFullName: string
    chairmanPhoto: string
    phoneNumber?: string | null
    email?: string | null
    workingTime?: string | null
    address: string
    membersCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type InteractiveAreaCreateOrConnectWithoutPlaceInput = {
    where: InteractiveAreaWhereUniqueInput
    create: XOR<InteractiveAreaCreateWithoutPlaceInput, InteractiveAreaUncheckedCreateWithoutPlaceInput>
  }

  export type InteractiveAreaCreateManyPlaceInputEnvelope = {
    data: InteractiveAreaCreateManyPlaceInput | InteractiveAreaCreateManyPlaceInput[]
    skipDuplicates?: boolean
  }

  export type InteractiveAreaUpsertWithWhereUniqueWithoutPlaceInput = {
    where: InteractiveAreaWhereUniqueInput
    update: XOR<InteractiveAreaUpdateWithoutPlaceInput, InteractiveAreaUncheckedUpdateWithoutPlaceInput>
    create: XOR<InteractiveAreaCreateWithoutPlaceInput, InteractiveAreaUncheckedCreateWithoutPlaceInput>
  }

  export type InteractiveAreaUpdateWithWhereUniqueWithoutPlaceInput = {
    where: InteractiveAreaWhereUniqueInput
    data: XOR<InteractiveAreaUpdateWithoutPlaceInput, InteractiveAreaUncheckedUpdateWithoutPlaceInput>
  }

  export type InteractiveAreaUpdateManyWithWhereWithoutPlaceInput = {
    where: InteractiveAreaScalarWhereInput
    data: XOR<InteractiveAreaUpdateManyMutationInput, InteractiveAreaUncheckedUpdateManyWithoutPlaceInput>
  }

  export type InteractiveAreaScalarWhereInput = {
    AND?: InteractiveAreaScalarWhereInput | InteractiveAreaScalarWhereInput[]
    OR?: InteractiveAreaScalarWhereInput[]
    NOT?: InteractiveAreaScalarWhereInput | InteractiveAreaScalarWhereInput[]
    id?: IntFilter<"InteractiveArea"> | number
    chairmanFullName?: StringFilter<"InteractiveArea"> | string
    chairmanPhoto?: StringFilter<"InteractiveArea"> | string
    phoneNumber?: StringNullableFilter<"InteractiveArea"> | string | null
    email?: StringNullableFilter<"InteractiveArea"> | string | null
    workingTime?: StringNullableFilter<"InteractiveArea"> | string | null
    address?: StringFilter<"InteractiveArea"> | string
    membersCount?: IntFilter<"InteractiveArea"> | number
    placeId?: IntFilter<"InteractiveArea"> | number
    createdAt?: DateTimeFilter<"InteractiveArea"> | Date | string
    updatedAt?: DateTimeNullableFilter<"InteractiveArea"> | Date | string | null
  }

  export type PlaceCreateWithoutInteractiveAreaInput = {
    title: string
    name?: string | null
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlaceUncheckedCreateWithoutInteractiveAreaInput = {
    id?: number
    title: string
    name?: string | null
    languageCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PlaceCreateOrConnectWithoutInteractiveAreaInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutInteractiveAreaInput, PlaceUncheckedCreateWithoutInteractiveAreaInput>
  }

  export type PlaceUpsertWithoutInteractiveAreaInput = {
    update: XOR<PlaceUpdateWithoutInteractiveAreaInput, PlaceUncheckedUpdateWithoutInteractiveAreaInput>
    create: XOR<PlaceCreateWithoutInteractiveAreaInput, PlaceUncheckedCreateWithoutInteractiveAreaInput>
    where?: PlaceWhereInput
  }

  export type PlaceUpdateToOneWithWhereWithoutInteractiveAreaInput = {
    where?: PlaceWhereInput
    data: XOR<PlaceUpdateWithoutInteractiveAreaInput, PlaceUncheckedUpdateWithoutInteractiveAreaInput>
  }

  export type PlaceUpdateWithoutInteractiveAreaInput = {
    title?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlaceUncheckedUpdateWithoutInteractiveAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileCreateWithoutBannerInput = {
    name: string
    mimeType: string
    extension: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    news?: NewsCreateNestedOneWithoutFilesInput
    menu?: MenuCreateNestedOneWithoutFilesInput
    Partner?: PartnerCreateNestedManyWithoutIconInput
  }

  export type FileUncheckedCreateWithoutBannerInput = {
    id?: number
    name: string
    mimeType: string
    extension: string
    newsId?: number | null
    menuId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Partner?: PartnerUncheckedCreateNestedManyWithoutIconInput
  }

  export type FileCreateOrConnectWithoutBannerInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutBannerInput, FileUncheckedCreateWithoutBannerInput>
  }

  export type FileUpsertWithoutBannerInput = {
    update: XOR<FileUpdateWithoutBannerInput, FileUncheckedUpdateWithoutBannerInput>
    create: XOR<FileCreateWithoutBannerInput, FileUncheckedCreateWithoutBannerInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutBannerInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutBannerInput, FileUncheckedUpdateWithoutBannerInput>
  }

  export type FileUpdateWithoutBannerInput = {
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateOneWithoutFilesNestedInput
    menu?: MenuUpdateOneWithoutFilesNestedInput
    Partner?: PartnerUpdateManyWithoutIconNestedInput
  }

  export type FileUncheckedUpdateWithoutBannerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    newsId?: NullableIntFieldUpdateOperationsInput | number | null
    menuId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Partner?: PartnerUncheckedUpdateManyWithoutIconNestedInput
  }

  export type FileCreateWithoutPartnerInput = {
    name: string
    mimeType: string
    extension: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    news?: NewsCreateNestedOneWithoutFilesInput
    menu?: MenuCreateNestedOneWithoutFilesInput
    banner?: BannerCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateWithoutPartnerInput = {
    id?: number
    name: string
    mimeType: string
    extension: string
    newsId?: number | null
    menuId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    banner?: BannerUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileCreateOrConnectWithoutPartnerInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutPartnerInput, FileUncheckedCreateWithoutPartnerInput>
  }

  export type FileUpsertWithoutPartnerInput = {
    update: XOR<FileUpdateWithoutPartnerInput, FileUncheckedUpdateWithoutPartnerInput>
    create: XOR<FileCreateWithoutPartnerInput, FileUncheckedCreateWithoutPartnerInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutPartnerInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutPartnerInput, FileUncheckedUpdateWithoutPartnerInput>
  }

  export type FileUpdateWithoutPartnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateOneWithoutFilesNestedInput
    menu?: MenuUpdateOneWithoutFilesNestedInput
    banner?: BannerUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutPartnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    newsId?: NullableIntFieldUpdateOperationsInput | number | null
    menuId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banner?: BannerUncheckedUpdateManyWithoutFileNestedInput
  }

  export type MenuCreateWithoutChildrenInput = {
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    parent?: MenuCreateNestedOneWithoutChildrenInput
    files?: FileCreateNestedManyWithoutMenuInput
    user?: UserCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    parentId?: number | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    files?: FileUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutChildrenInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
  }

  export type MenuCreateWithoutParentInput = {
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string | null
    children?: MenuCreateNestedManyWithoutParentInput
    files?: FileCreateNestedManyWithoutMenuInput
    user?: UserCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    files?: FileUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutParentInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput>
  }

  export type MenuCreateManyParentInputEnvelope = {
    data: MenuCreateManyParentInput | MenuCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutMenuInput = {
    name: string
    mimeType: string
    extension: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    news?: NewsCreateNestedOneWithoutFilesInput
    banner?: BannerCreateNestedManyWithoutFileInput
    Partner?: PartnerCreateNestedManyWithoutIconInput
  }

  export type FileUncheckedCreateWithoutMenuInput = {
    id?: number
    name: string
    mimeType: string
    extension: string
    newsId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    banner?: BannerUncheckedCreateNestedManyWithoutFileInput
    Partner?: PartnerUncheckedCreateNestedManyWithoutIconInput
  }

  export type FileCreateOrConnectWithoutMenuInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutMenuInput, FileUncheckedCreateWithoutMenuInput>
  }

  export type FileCreateManyMenuInputEnvelope = {
    data: FileCreateManyMenuInput | FileCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutMenusInput = {
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    telegramUser?: TelegramUserCreateNestedOneWithoutUserInput
    accountSessions?: AccountSessionCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutMenusInput = {
    id?: number
    username: string
    fullName: string
    hashedPassword: string
    salt: string
    role: $Enums.UserRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string | null
    telegramUser?: TelegramUserUncheckedCreateNestedOneWithoutUserInput
    accountSessions?: AccountSessionUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutMenusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMenusInput, UserUncheckedCreateWithoutMenusInput>
  }

  export type MenuUpsertWithoutChildrenInput = {
    update: XOR<MenuUpdateWithoutChildrenInput, MenuUncheckedUpdateWithoutChildrenInput>
    create: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutChildrenInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutChildrenInput, MenuUncheckedUpdateWithoutChildrenInput>
  }

  export type MenuUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    files?: FileUpdateManyWithoutMenuNestedInput
    user?: UserUpdateOneWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FileUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUpsertWithWhereUniqueWithoutParentInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutParentInput, MenuUncheckedUpdateWithoutParentInput>
    create: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutParentInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutParentInput, MenuUncheckedUpdateWithoutParentInput>
  }

  export type MenuUpdateManyWithWhereWithoutParentInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutParentInput>
  }

  export type FileUpsertWithWhereUniqueWithoutMenuInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutMenuInput, FileUncheckedUpdateWithoutMenuInput>
    create: XOR<FileCreateWithoutMenuInput, FileUncheckedCreateWithoutMenuInput>
  }

  export type FileUpdateWithWhereUniqueWithoutMenuInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutMenuInput, FileUncheckedUpdateWithoutMenuInput>
  }

  export type FileUpdateManyWithWhereWithoutMenuInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutMenuInput>
  }

  export type UserUpsertWithoutMenusInput = {
    update: XOR<UserUpdateWithoutMenusInput, UserUncheckedUpdateWithoutMenusInput>
    create: XOR<UserCreateWithoutMenusInput, UserUncheckedCreateWithoutMenusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMenusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMenusInput, UserUncheckedUpdateWithoutMenusInput>
  }

  export type UserUpdateWithoutMenusInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramUser?: TelegramUserUpdateOneWithoutUserNestedInput
    accountSessions?: AccountSessionUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleEnumFieldUpdateOperationsInput | $Enums.UserRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramUser?: TelegramUserUncheckedUpdateOneWithoutUserNestedInput
    accountSessions?: AccountSessionUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AccountSessionCreateManyUserInput = {
    id?: number
    device: JsonNullValueInput | InputJsonValue
    ip: string
    sessionId: string
    revoked?: boolean
    exp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCreateManyAuthorInput = {
    id?: number
    title: string
    path: string
    description: string
    languageCode?: string | null
    isArchived?: boolean
    isCheck?: boolean
    isTop?: boolean
    type: $Enums.NewsTypeEnum
    content?: NewsCreatecontentInput | InputJsonValue[]
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MenuCreateManyUserInput = {
    id?: number
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    parentId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AccountSessionUpdateWithoutUserInput = {
    device?: JsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    exp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    device?: JsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    exp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    device?: JsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    exp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FileUpdateManyWithoutNewsNestedInput
    tags?: NewsTagUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FileUncheckedUpdateManyWithoutNewsNestedInput
    tags?: NewsTagUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
    files?: FileUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    files?: FileUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileCreateManyNewsInput = {
    id?: number
    name: string
    mimeType: string
    extension: string
    menuId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FileUpdateWithoutNewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menu?: MenuUpdateOneWithoutFilesNestedInput
    banner?: BannerUpdateManyWithoutFileNestedInput
    Partner?: PartnerUpdateManyWithoutIconNestedInput
  }

  export type FileUncheckedUpdateWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    menuId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banner?: BannerUncheckedUpdateManyWithoutFileNestedInput
    Partner?: PartnerUncheckedUpdateManyWithoutIconNestedInput
  }

  export type FileUncheckedUpdateManyWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    menuId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsTagUpdateWithoutNewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsTagUncheckedUpdateWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsTagUncheckedUpdateManyWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneWithoutNewsNestedInput
    files?: FileUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    files?: FileUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    isCheck?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum
    content?: NewsUpdatecontentInput | InputJsonValue[]
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannerCreateManyFileInput = {
    id?: number
    type: $Enums.BannerTypeEnum
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PartnerCreateManyIconInput = {
    id?: number
    title: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BannerUpdateWithoutFileInput = {
    type?: EnumBannerTypeEnumFieldUpdateOperationsInput | $Enums.BannerTypeEnum
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannerUncheckedUpdateWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumBannerTypeEnumFieldUpdateOperationsInput | $Enums.BannerTypeEnum
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannerUncheckedUpdateManyWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumBannerTypeEnumFieldUpdateOperationsInput | $Enums.BannerTypeEnum
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PartnerUpdateWithoutIconInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PartnerUncheckedUpdateWithoutIconInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PartnerUncheckedUpdateManyWithoutIconInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InteractiveAreaCreateManyPlaceInput = {
    id?: number
    chairmanFullName: string
    chairmanPhoto: string
    phoneNumber?: string | null
    email?: string | null
    workingTime?: string | null
    address: string
    membersCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type InteractiveAreaUpdateWithoutPlaceInput = {
    chairmanFullName?: StringFieldUpdateOperationsInput | string
    chairmanPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workingTime?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InteractiveAreaUncheckedUpdateWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    chairmanFullName?: StringFieldUpdateOperationsInput | string
    chairmanPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workingTime?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InteractiveAreaUncheckedUpdateManyWithoutPlaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    chairmanFullName?: StringFieldUpdateOperationsInput | string
    chairmanPhoto?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workingTime?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuCreateManyParentInput = {
    id?: number
    name: string
    path?: string | null
    languageCode?: string | null
    type?: $Enums.MenuTypeEnum | null
    newsType?: $Enums.NewsTypeEnum | null
    isPin?: boolean
    isVisible?: boolean
    content?: MenuCreatecontentInput | InputJsonValue[]
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FileCreateManyMenuInput = {
    id?: number
    name: string
    mimeType: string
    extension: string
    newsId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MenuUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: MenuUpdateManyWithoutParentNestedInput
    files?: FileUpdateManyWithoutMenuNestedInput
    user?: UserUpdateOneWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    files?: FileUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: NullableStringFieldUpdateOperationsInput | string | null
    languageCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumMenuTypeEnumFieldUpdateOperationsInput | $Enums.MenuTypeEnum | null
    newsType?: NullableEnumNewsTypeEnumFieldUpdateOperationsInput | $Enums.NewsTypeEnum | null
    isPin?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    content?: MenuUpdatecontentInput | InputJsonValue[]
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileUpdateWithoutMenuInput = {
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateOneWithoutFilesNestedInput
    banner?: BannerUpdateManyWithoutFileNestedInput
    Partner?: PartnerUpdateManyWithoutIconNestedInput
  }

  export type FileUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    newsId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banner?: BannerUncheckedUpdateManyWithoutFileNestedInput
    Partner?: PartnerUncheckedUpdateManyWithoutIconNestedInput
  }

  export type FileUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    extension?: StringFieldUpdateOperationsInput | string
    newsId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}