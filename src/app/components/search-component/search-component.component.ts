import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import {ActivatedRoute } from '@angular/router';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  searchResult:undefined|Product[];
  constructor(private activeRoute :ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    let query= this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query)
    query && this.product.searchProducts(query).subscribe((result)=>{
      this.searchResult=result
    })
  }


  /*searchProducts(keyword : String) : void {
    console.log("Search Products method captured " + keyword);
    this.router.navigateByUrl("/search/" + keyword);
  }*/

}
