import { UserModel } from "_old_react/src/store/features/auth/models/user.model";

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  user: UserModel;
}
