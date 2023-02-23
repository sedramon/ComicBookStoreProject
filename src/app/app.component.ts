import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'comic_book_store';

  isLoggedIn: boolean = this.userService.getIsUserLoggedIn();

  constructor(private userService: UserService){}

  ngOnInit() {
    this.isLoggedIn = this.userService.getIsUserLoggedIn();
  }

  ngAfterViewInit() {
    this.isLoggedIn = this.userService.getIsUserLoggedIn();
    console.log(this.isLoggedIn);
  }
}
