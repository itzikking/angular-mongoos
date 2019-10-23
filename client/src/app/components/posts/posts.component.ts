import { Component, OnInit, Inject } from "@angular/core";
import { Post } from "./post";
import { PostsService } from "../../services/posts.service";
import { NgForm } from "@angular/forms";
// import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

// export interface Edit {
//   title: string;
//   body: string;
//   author: string;
// }

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
  // dialog: any;

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
  //   OnEditPost(): void {
  //     const dialogRef = this.dialog.open(PostsComponent, {
  //       width: "250px",
  //       data: { title: this.title, body: this.body }
  //     });

  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log("The dialog was closed");
  //       this.body = result;
  //     });
  //   }
  // }
  // @Component({
  //   selector: "app-posts",
  //   templateUrl: "./posts.component.html"
  // })
  // export class DialogOverviewExampleDialog {
  //   constructor(
  //     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //     @Inject(MAT_DIALOG_DATA) public data: Edit
  //   ) {}

  //   onNoClick(): void {
  //     this.dialogRef.close();
  //   }
}
