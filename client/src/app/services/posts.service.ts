import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../components/posts/post";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  postApiUrl = "http://localhost:3000/posts";
  constructor(private _http: HttpClient) {}

  //GET-ALL
  GET_Posts() {
    return this._http.get<any>(this.postApiUrl);
  }
  //GET-ONE
  GET_One_Post() {
    return this._http.get<Post>(this.postApiUrl);
  }
  //POST
  POST_New_Post(title, body, author) {
    let value = { title, body, author };
    console.log(title, body, author);
    return this._http.post<any>(this.postApiUrl, value);
  }
  //DELETE
  DELETE_Post(id) {
    return this._http.delete<Post>(this.postApiUrl + "/delete/" + id);
  }
  //PUT
  PUT_Post(id, value) {
    return this._http.put<Post>(this.postApiUrl + "/patch/" + id, value);
  }
}
