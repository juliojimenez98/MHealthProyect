import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertaComponent } from './alerta/alerta.component';
import { LoginComponent } from './auth/login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'alerta', component: AlertaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
