import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  errorExists!: boolean;
  errorText = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!this.userService.getUser(form.value.email)) {
      this.errorExists = false;
      this.userService.registerUser(
        form.value.email,
        form.value.username,
        form.value.password,
        form.value.dateOfBirth
      );
      this.router.navigate(['']);
    } else if (this.userService.getUserByPassword(form.value.password)) {
      this.errorExists = true;
      this.errorText = 'Password isnt available...';
    } else {
      this.errorExists = true;
      this.errorText = 'User with this email address already exists...';
    }
    console.log(form.value.email,
      form.value.username,
      form.value.password,
      form.value.dateOfBirth)
  }
}
