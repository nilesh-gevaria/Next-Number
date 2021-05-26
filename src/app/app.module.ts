import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordConfirmComponent } from './forgot-password-confirm/forgot-password-confirm.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch : 'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'forgot-password-confirm', component: ForgotPasswordConfirmComponent },
  { path: 'change-password', component: ChangePasswordComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    ForgotPasswordComponent,
    ForgotPasswordConfirmComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}