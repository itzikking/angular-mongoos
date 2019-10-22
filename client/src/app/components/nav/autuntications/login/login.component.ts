import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "src/app/services/posts.service";
import { Subscriber } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  constructor(private _Postservise: PostsService) {}

  ngOnInit() {}

  Login(form: NgForm) {
    console.log(form);
    this._Postservise
      .POST_Login(form.value.username, form.value.password)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
