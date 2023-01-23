import { Component } from '@angular/core';
import {Product} from "./components/common/product";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ProductService} from "./services/product.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchResult:undefined|Product[];
  title = 'ecommerce-project-front-tp';

  constructor(private route: Router, private product:ProductService) {}

  searchProduct(query: KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result:Product[] | undefined)=>{
        // @ts-ignore
        if(result.length>5){
          // @ts-ignore
          result.length=length
        }
        this.searchResult=result
      })
    }
  }

  submitSearch(val:String){
    this.route.navigate([`search/${val}`])
  }
}
