import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../components/common/product-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = "http://localhost:3000/categories";

  constructor(private httpClient : HttpClient) { }

  getCategoryList() : Observable<ProductCategory> {
    return this.httpClient.get<ProductCategory> (this.baseUrl)
  }
}

interface GetResponse {
  _embedded : {
    productCategories : any[];
  }
}
