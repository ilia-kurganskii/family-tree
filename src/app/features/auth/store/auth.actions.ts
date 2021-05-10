// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AuthActions {
  export class LoginByEmail {
    static readonly type = '[Auth] Login';

    constructor(public payload: { email: string; password: string }) {}
  }

  export class Logout {
    static readonly type = '[Auth] Logout';
  }

  export class Refresh {
    static readonly type = '[Auth] Refresh Token';
  }
}
