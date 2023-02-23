import { Comic } from '../shop/shop.service';

export class CartService {
  private cartList: Array<Comic> = [];

  calculateSum(): number {
    var sum = 0;
    this.cartList.map((comic) => (sum += comic.price));
    return sum;
  }

  getCartList() {
    return this.cartList;
  }

  addToCartList(comic: Comic) {
    this.cartList.push(comic);
  }

  removeFromCartList(comic : Comic) {
    for(var i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i] == comic) {
        this.cartList.splice(i, 1);
      }
    }
  }
}
