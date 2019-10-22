import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../components/posts/post";
import { Login, Register } from "../components/nav/autuntications/User";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  postApiUrl = "http://localhost:3000/posts";
  loginApiUrl = "http://localhost:3000/users/login";
  registerApiUrl = "http://localhost:3000/users/register";

  constructor(private _http: HttpClient) {}

  ///////////////POST///////////////
  GET_Posts() {
    //GET-ALL
    return this._http.get<any>(this.postApiUrl);
  }
  GET_One_Post() {
    //GET-ONE
    return this._http.get<Post>(this.postApiUrl);
  }
  POST_New_Post(title, body, author) {
    //POST
    const value = { title, body, author };
    console.log(title, body, author);
    return this._http.post<any>(this.postApiUrl, value);
  }
  DELETE_Post(id) {
    //DELETE
    return this._http.delete<Post>(this.postApiUrl + "/delete/" + id);
  }
  PUT_Post(id, value) {
    //PUT
    return this._http.put<Post>(this.postApiUrl + "/patch/" + id, value);
  }

  ///////////////USER///////////////
  POST_Login(username, password) {
    //POST-LOGIN
    const value = { username, password };
    console.log(value);
    return this._http.post<Login>(this.loginApiUrl, value);
  }
  POST_Register(RegisterData) {
    //POST-LOGIN
    console.log(RegisterData);
    return this._http.post<Register>(this.registerApiUrl, RegisterData);
  }
}
