import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ReviewService } from 'src/app/shop/review.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorExists!: boolean;
  errorText = '';

  constructor(
    private router: Router, 
    private userService: UserService,
    private cartService: CartService) {}

  onSubmit(form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUser(email);

    if (!user) {
      this.errorExists = true;
      this.errorText = 'User doesnt exist with that email...';
      return;
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = 'Password isnt correct...';
      return;
    }

    this.userService.setIsUserLoggedIn(true);
    this.cartService.emptyCart();
    console.log(this.userService.getCurrentUserId());
    console.log(this.userService.getIsUserLoggedIn());
    this.errorExists = false;
    this.router.navigate(['']);
  }
}
