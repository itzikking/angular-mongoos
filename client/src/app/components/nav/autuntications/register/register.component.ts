import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/services/posts.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  username: "";
  password: "";
  gender: "";
  age: "";
  email: "";
  role = "USER";
  constructor(private _PostsService: PostsService) {}

  ngOnInit() {}

  Register(form: NgForm) {
    console.log(form);
    var RegisterData = {
      username: form.value.username,
      password: form.value.password,
      gender: form.value.gender,
      age: form.value.age,
      email: form.value.email,
      role: this.role
    };
    this._PostsService
      .POST_Register(RegisterData)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
