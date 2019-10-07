import { Component, OnInit } from "@angular/core";
import {Post} from './post'
import {PostsService} from '../../services/posts.service'

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private _PostsService: PostsService) {}

  ngOnInit() {
    this._PostsService.GET_Posts().subscribe(data => {this.posts = data})
  }
}
