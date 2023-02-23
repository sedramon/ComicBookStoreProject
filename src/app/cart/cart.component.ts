import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  displayedColumns = ['name', 'genre', 'author', 'price', 'removeFromCart'];
  cartSource = new MatTableDataSource<Comic>();

  constructor(private cartService: CartService, private dialog: MatDialog) {}

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
      data : {
        name : comic.name
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
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
}
