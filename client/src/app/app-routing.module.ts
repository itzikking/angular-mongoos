import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//components
import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RegisterComponent } from "./components/nav/autuntications/register/register.component";
import { LoginComponent } from "./components/nav/autuntications/login/login.component";

const routes: Routes = [
  { path: "posts", component: PostsComponent },
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  PostsComponent,
  HomeComponent,
  PageNotFoundComponent,
  RegisterComponent,
  LoginComponent
];
