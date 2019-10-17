import { Component, OnInit } from "@angular/core";
import { Post } from "./post";
import { PostsService } from "../../services/posts.service";
import { NgForm } from "@angular/forms";

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
      console.log("data" + JSON.stringify(data));
    });
  }
  onaddpost(form: NgForm) {
    console.log(form.value);
    this._PostsService
      .POST_New_Post(form.value.title, form.value.author, form.value.body)
      .subscribe(result => {
        this.posts.push({
          title: form.value.title,
          author: form.value.author,
          body: form.value.body,
          _id: result.id
        });
        console.log(this.posts);
      });
  }
  OnSharePost() {
    console.log("OnSharePost");
  }
  OnDeletePost = _id => {
    this._PostsService.DELETE_Post(_id).subscribe(result => {
      let newpost = this.posts.filter(post => post._id !== _id);
      console.log("idfrompostdelete: " + _id);
      this.posts = newpost;
      console.log(result), err => console.log(err);
    });
  };
  OnEditPost(id) {
    console.log("OnEditPost:" + id);
  }
}
