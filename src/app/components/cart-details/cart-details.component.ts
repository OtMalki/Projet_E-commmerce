import { Component, OnInit } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems : CartItem[] = [];
  totalPrice : number;
  totalQuantity : number;

  constructor(private cartService : CartServiceService) { }

  ngOnInit(): void {
    this.getCartDetails();
  }
  getCartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(data => {
      this.totalPrice = data;
    });
    this.cartService.totalQuantity.subscribe(data => {
      this.totalQuantity = data;
    });
  }

  addToCart(thisCartItem : CartItem) {
    this.cartService.updateCart(thisCartItem);
  }

  decrementFromCart(thisCartItem : CartItem) {
    this.cartService.updateCart(thisCartItem, false);
  }

  removeFromCart(item : CartItem) {
    this.cartService.removeItemFromCart(item);
  }
}
