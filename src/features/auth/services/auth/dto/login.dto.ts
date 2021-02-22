import { UserModel } from "@store/features/auth/models/user.model";

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  user: UserModel;
}
