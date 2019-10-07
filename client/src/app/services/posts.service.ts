import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../components/posts/post";

let headers = new HttpHeaders().set("application/json;", "charset=utf-8");
@Injectable({
  providedIn: "root"
})
export class PostsService {
  postApiUrl = "http://localhost:3000/posts";
  posts: Observable<any>;
  constructor(private _http: HttpClient) {}

  //GET-ALL
  GET_Posts() {
    return this._http.get<Post[]>(this.postApiUrl);
  }
  //GET-ONE
  GET_One_Post() {
    return this._http.get<Post>(this.postApiUrl + { headers });
  }
  //POST
  POST_New_Post(id, value) {
    return this._http.post<Post>(this.postApiUrl + id, value + { headers });
  }
  //DELETE
  DELETE_Post(id) {
    return this._http.delete<Post>(this.postApiUrl + id + { headers });
  }
  //PUT
  PUT_Post(id, value) {
    return this._http.put<Post>(this.postApiUrl + id, value + { headers });
  }
}
