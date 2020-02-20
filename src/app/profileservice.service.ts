import { Injectable } from "@angular/core";
import { Userprofile } from "./userprofile";

@Injectable({
  providedIn: "root"
})
export class ProfileserviceService {
  userProfile: Userprofile = {
    name: "Angela Ayyash",
    contact: "aayyash@gmail.com",
    bio: "I love Angular!"
  };

  constructor() {}

  getUserProfile() {
    return this.userProfile;
  }
  setUserProfile(formValue) {
    this.userProfile = {
      name: formValue.name,
      contact: formValue.contact,
      bio: formValue.bio
    };
  }
}
