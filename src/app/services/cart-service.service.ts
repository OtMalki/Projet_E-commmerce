import { Injectable } from '@angular/core';
import { CartItem } from '../components/common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItems : CartItem[] = [];

  totalPrice : Subject<number> = new Subject<number>();
  totalQuantity : Subject<number> = new Subject<number>();

  constructor() { }

  updateCart(theCartItem : CartItem, addremove : boolean = true) : void {
    let founditem : Boolean = false;
    let existingCartItem : CartItem;

    if (this.cartItems.length > 0) {
      for (let tempCartItem of this.cartItems) {
        if (tempCartItem.id == theCartItem.id) {
          existingCartItem = tempCartItem;
          if (addremove == true) {
            tempCartItem.quantity++;
            tempCartItem.subTotal += tempCartItem.unitPrice;
          } else {
            tempCartItem.quantity--;
            tempCartItem.subTotal -= tempCartItem.unitPrice;
            if (tempCartItem.quantity == 0) {
              this.cartItems.splice(this.cartItems.indexOf(tempCartItem));
            }
          }
          founditem = true;
          break;
        }
      }
    }

    if (founditem != true) {
      existingCartItem = theCartItem;
      this.cartItems.push(existingCartItem!);
    }

    this.computeTotals(); 
  }

  removeItemFromCart(item : CartItem) {
    this.cartItems.splice(this.cartItems.indexOf(item));
    this.computeTotals();
  }

  computeTotals() : void {
    let totalPrice : number = 0;
    let totalQuantity : number = 0;

    for (let tempCartItem of this.cartItems) {
      totalPrice += (tempCartItem.quantity * tempCartItem.unitPrice);
      totalQuantity += tempCartItem.quantity;
    }

    this.totalPrice.next(totalPrice);
    this.totalQuantity.next(totalQuantity);
  }
}
