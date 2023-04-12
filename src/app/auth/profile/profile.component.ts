import { Component, Inject, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileForInput!: User;

  // MAT_DIALOG_DATA skladistimo podatke iz dialog boxa
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }

  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.user.id,
      username: this.data.user.username,
      email: this.data.user.email,
      password: this.data.user.password,
      dateOfBirth: this.data.dateOfBirth,
      address: this.data.user.address
    };
  }

  finishEditing(form: NgForm) {
    this.data.user.username = this.profileForInput.username;
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }

  changeIsEditing() {
    this.isEditing = !this.isEditing;
    console.log(this.isEditing);
  }

}
