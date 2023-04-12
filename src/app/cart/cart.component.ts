import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../auth/user.service';
import { AddreviewComponent } from '../shop/addreview/addreview.component';
import { ReviewService } from '../shop/review.service';
import { Comic } from '../shop/shop.service';
import { CartService } from './cart.service';
import { RemovefromcartComponent } from './removefromcart/removefromcart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = [
    'name',
    'genre',
    'author',
    'price',
    'amount',
    'status',
    'arrived',
    'cancelled',
    'review',
    'removeFromCart',
  ];
  cartSource = new MatTableDataSource<Comic>();

  constructor(private cartService: CartService, 
    private dialog: MatDialog, 
    public reviewService: ReviewService) {}

  ngOnInit(): void {
    this.cartSource.data = this.cartService.getCartList();
  }

  ngAfterViewInit(): void {
    this.cartSource.sort = this.sort;
    this.cartSource.paginator = this.paginator;
  }

  listIsEmpty(): boolean {
    if (this.cartSource.data.length < 1) {
      return true;
    } else {
      return false;
    }
  }

  calculateTotal() {
    return this.cartService.calculateSum();
  }

  removeFromCart(comic: Comic) {
    console.log('removed ' + comic.name);
    const dialogRef = this.dialog.open(RemovefromcartComponent, {
      data: {
        name: comic.name,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cartService.removeFromCartList(comic);
        this.cartSource.data = this.cartService.getCartList();
      } else {
        return;
      }
    });
  }

  doFilter(filterValue: string) {
    this.cartSource.filter = filterValue.trim().toLowerCase();
  }

  leaveAReview(comic: Comic) {
    const dialogRef = this.dialog.open(AddreviewComponent, {
      width: '25%',
      height: '420px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        name: comic.name,
        comicId: comic.id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(this.reviewService.getReviewList());
      } else {
        return;
      }
    });
  }

  setComicStatus(comic: Comic, status: string) {
    comic.status = status;
  }

  addAmount(comic: Comic) {
    comic.amount++;
  }
}
