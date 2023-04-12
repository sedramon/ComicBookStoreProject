import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'comic_book_store';
  profileOpened: boolean = false;

  isLoggedIn: boolean = this.userService.getIsUserLoggedIn();

  constructor(public userService: UserService,private dialog: MatDialog){}

  ngOnInit() {
    this.isLoggedIn = this.userService.getIsUserLoggedIn();
  }

  ngAfterViewInit() {
    this.isLoggedIn = this.userService.getIsUserLoggedIn();
    console.log(this.isLoggedIn);
  }


  openProfile(currentUserId: number) {
    this.profileOpened = true;
    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "25vw",
      data: {
        user: this.userService.getUserById(currentUserId)
      }
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }
}
