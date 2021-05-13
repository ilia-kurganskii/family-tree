import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../app.const';
import { EnvironmentModel } from '../../shared/models/environment.model';
import { LoginInputDtoModel } from '../../api/models/login-input-dto.model';
import { TokenOutputDtoModel } from '../../api/models/token-output-dto.model';

@Injectable()
export class AuthService {
  private readonly host = this.env.backendHost;

  constructor(
    private readonly http: HttpClient,
    @Inject(ENVIRONMENT) private readonly env: EnvironmentModel
  ) {}

  loginByEmail(payload: LoginInputDtoModel): Observable<TokenOutputDtoModel> {
    return this.http.post<TokenOutputDtoModel>(
      `${this.host}/auth/login`,
      payload
    );
  }

  refreshToken(): Observable<void> {
    return this.http.post<void>(`${this.host}/auth/refresh`, null);
  }

  logout(): Observable<null> {
    return this.http.post<null>(`${this.host}/auth/logout`, null);
  }
}
