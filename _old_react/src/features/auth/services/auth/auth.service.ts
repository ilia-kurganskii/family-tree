import { inject, injectable } from "inversify";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserModel } from "_old_react/src/store/features/auth/models/user.model";
import { HttpService } from "_old_react/src/features/common/http/http.service";
import { LoginRequestDto, LoginResponseDto } from "./dto/login.dto";

@injectable()
export class AuthService {
  @inject(HttpService)
  private readonly httpService!: HttpService;

  public login(payload: LoginRequestDto): Observable<UserModel> {
    return this.httpService
      .post<LoginResponseDto, LoginRequestDto>("/auth/login", {
        email: payload.email,
        password: payload.password,
      })
      .pipe(
        map((data) => {
          return data.user;
        })
      );
  }
}
