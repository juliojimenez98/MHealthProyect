import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AlertaComponent } from './alerta/alerta.component';
import { HomeComponent } from './home/home.component';
import { ButtonDarkComponent } from './share/button-dark/button-dark.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    ProfileComponent,
    ChatComponent,
    NavbarComponent,
    RegisterComponent,
    AlertaComponent,
    HomeComponent,
    ButtonDarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
