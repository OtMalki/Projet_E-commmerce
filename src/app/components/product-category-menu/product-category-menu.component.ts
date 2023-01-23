import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductCategory } from '../common/product-category';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  categories : ProductCategory[];

  constructor(private categoryListService : CategoryService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() : void {
    this.categoryListService.getCategoryList().subscribe(
      data => {
        // @ts-ignore
        this.categories = data;
      });
  }

}
