import { Component, OnInit } from "@angular/core";
import { Post } from "./post";
import { PostsService } from "../../services/posts.service";
import { NgForm } from "@angular/forms";
import { post } from "selenium-webdriver/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  title: "";
  body: "";
  author: "";

  constructor(private _PostsService: PostsService) {}

  ngOnInit() {
    this._PostsService.GET_Posts().subscribe(data => {
      this.posts = data;
    });
  }
  onaddpost(form: NgForm) {
    console.log(form.value);
    this._PostsService
      .POST_New_Post(form.value.title, form.value.author, form.value.body)
      .subscribe(result => {
        this.posts.push(form.value);
        console.log(result);
      });
  }
  OnSharePost(event) {
    console.log("OnSharePost:" + event.target.id);
  }
  OnDeletePost(id) {
    console.log("OnDeletePost:" + id);
  }
  OnEditPost(id) {
    console.log("OnEditPost:" + id);
  }
}
