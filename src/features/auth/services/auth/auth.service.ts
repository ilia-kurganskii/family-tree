import { UserModel } from "../../../../store/features/auth/models/user.model";
import { HttpService, httpService } from "../../../common/http/http.service";
import { LoginRequestDto, LoginResponseDto } from "./dto/login.dto";

export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  public async login(payload: LoginRequestDto): Promise<UserModel> {
    const data = await this.httpService.post<LoginResponseDto, LoginRequestDto>(
      "/auth/login",
      {
        email: payload.email,
        password: payload.password,
      }
    );
    return data.user;
  }
}

export const authService = new AuthService(httpService);
