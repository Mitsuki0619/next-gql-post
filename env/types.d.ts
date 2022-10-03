type Env = Partial<Readonly<typeof import("./env.local")>>;

declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly DATABASE_URL: string;
    readonly GOOGLE_CLIENT_ID: string;
    readonly GOOGLE_CLIENT_SECRET: string;
  }
}
