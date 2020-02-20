import { Component, OnInit } from "@angular/core";
import { ProfileserviceService } from "../profileservice.service";
import { Userprofile } from "../userprofile";

@Component({
  selector: "app-profilecomponent",
  templateUrl: "./profilecomponent.component.html",
  styleUrls: ["./profilecomponent.component.css"]
})
export class ProfilecomponentComponent implements OnInit {
  userProfile: Userprofile;
  constructor(private service: ProfileserviceService) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
  }
}
