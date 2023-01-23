import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../common/product';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CartItem } from '../common/cart-item';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[];
  data : Product[];
  currentCategoryId : number;
  keyword : String;

  constructor(private productService : ProductService,
              private route: ActivatedRoute,
              private cartService : CartServiceService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data => {this.data = data})
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() : void {
    if (this.route.snapshot.paramMap.has('keyword')) {
      this.keyword = this.route.snapshot.paramMap.get('keyword')!;
      console.log("Product List Component Routed with keyword " + this.keyword);
      this.productService.searchProducts(this.keyword).subscribe(
        data => {
          this.products = data;
        }
      );
    } else {
      if (this.route.snapshot.paramMap.has('id')) {
        this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;

      } else {
        this.currentCategoryId = 0;
      }
      this.productService.getProductList(this.currentCategoryId).subscribe(
        data => {
          if (this.currentCategoryId!=0)
            this.products = data.filter(product => product.categoryId === this.currentCategoryId);
          else
            this.products = this.data;
          console.log(this.products)
        }
      );
    }
  }

  searchProducts(search:string):void {
    /*this.products =  this.productService.filter$(search,this.data)
      .pipe(
        map(response => {return {products: response}})
      );*/
    if (search.length == 0) {
      this.products = this.data;
    } else {
    this.products = this.data.filter(product => product.name.toLowerCase().startsWith(search.toLowerCase()));
    }
    console.log(this.products);
  }

  addToCart(theProduct : Product) {
    let theCartItem : CartItem = new CartItem(theProduct);
    this.cartService.updateCart(theCartItem);
  }

}
