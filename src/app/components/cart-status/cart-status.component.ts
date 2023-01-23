import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Product } from '../common/product';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  numberOfItems : number = 0;

  bill : number = 0;

  constructor(private  cartService : CartServiceService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {

    this.cartService.totalPrice.subscribe(data => {
      this.bill = data;
    });

    this.cartService.totalQuantity.subscribe(data => {
      this.numberOfItems = data;
    });
  }
}
