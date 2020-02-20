import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ProfileserviceService } from "../profileservice.service";

@Component({
  selector: "app-editcomponent",
  templateUrl: "./editcomponent.component.html",
  styleUrls: ["./editcomponent.component.css"]
})
export class EditcomponentComponent implements OnInit {
  constructor(private service: ProfileserviceService, private router: Router) {}

  ngOnInit(): void {}
  update(form: NgForm) {
    this.service.setUserProfile(form.value);
    this.router.navigate(["profile"]);
  }
}
