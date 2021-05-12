import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './store/auth.state';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interseptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './components/login/login.module';

@NgModule({
  exports: [LoginComponent],
  providers: [
    AuthService,
    AuthState,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
  ],
  imports: [
    CommonModule,
    LoginModule,
    NgxsModule.forFeature([AuthState]),
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
