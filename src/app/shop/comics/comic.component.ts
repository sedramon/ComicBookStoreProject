import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';
import { CartService } from 'src/app/cart/cart.service';
import { AddreviewComponent } from '../addreview/addreview.component';
import { AddtocartComponent } from '../addtocart/addtocart.component';
import { ReviewService } from '../review.service';
import { Comic, ShopService } from '../shop.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
})
export class ComicComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = [
    'name',
    'genre',
    'pages',
    'author',
    'dateOfRelease',
    'price',
    'review',
    'addToCart',
  ];
  shopSource = new MatTableDataSource<Comic>();

  constructor(
    private shopService: ShopService,
    private dialog: MatDialog,
    private cartService: CartService,
    private userService: UserService,
    public reviewService: ReviewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.shopSource.data = this.shopService.getShopList();
  }

  ngAfterViewInit(): void {
    this.shopSource.sort = this.sort;
    this.shopSource.paginator = this.paginator;
  }

  setComicStatus(comic: Comic, status: string){
    comic.status = status;
    console.log(comic);
  }

  addToCart(comic: Comic) {
    this.setComicStatus(comic, 'IN PROGRESS')
    console.log(this.userService.isUserLoggedIn)
    if (this.userService.getIsUserLoggedIn() == false) {
    this.router.navigate(['login']);
    return
    }
    console.log('added to cart ' + comic.name);
    const dialogRef = this.dialog.open(AddtocartComponent, {
      data: {
        name: comic.name,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cartService.addToCartList(comic);
      } else {
        return;
      }
    });
  }

  doFilter(filterValue: string) {
    this.shopSource.filter = filterValue.trim().toLowerCase();
  }
}
