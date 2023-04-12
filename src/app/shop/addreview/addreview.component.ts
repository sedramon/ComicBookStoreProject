import { Component, Inject } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { UserService } from 'src/app/auth/user.service';
import { Review, ReviewService } from '../review.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css'],
})
export class AddreviewComponent {

  reviewForInput: Review = {
    userId: this.userService.getCurrentUserId(),
    comicId: this.data.comicId,
    grade: 0
  };

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public reviewService: ReviewService,
    public userService: UserService,
    public shopService: ShopService,
    private ref: MatDialogRef<AddreviewComponent>
  ) {}

  ngOnInit(): void {
  }

  finishReviewing(form: NgForm) : Review{
    this.reviewForInput.grade = form.value.grade;
    this.reviewForInput.userId = this.userService.getCurrentUserId();
    this.reviewService.addReviewToList(this.reviewForInput);
    console.log(this.userService.getCurrentUserId());
    console.log(this.reviewForInput)
    return this.reviewForInput;
  }

}
