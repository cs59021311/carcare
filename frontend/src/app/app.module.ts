import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRouting } from './app.routing';
import { SharedsModule } from './shareds/shareds.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterMemberComponent } from './components/register-member/register-member.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    SharedsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
