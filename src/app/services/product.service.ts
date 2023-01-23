import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../components/common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products/search/findBycategoryId?id=";

  private searchUrl = "http://localhost:8080/api/products/search/findByNameContaining?keyword=";

  constructor(private httpClient : HttpClient) { }
  getAllProduct() : Observable<Product[]> {
    return this.httpClient.get<Product[]> ("http://localhost:3000/products")
  }
  getProductList(categoryID : number) : Observable<Product[]> {
    return this.httpClient.get<Product[]> ("http://localhost:3000/products")
  }

  /*filter$ = (search:string,response: Product[]) => <Observable<Product[]>
    new Observable<Product[]>(
      subscriber => {
        console.log(response);
        subscriber.next(
          search.length == 0? {...response}:
            {
              ...response,
            }
        )
      }
    )*/

  searchProducts(query : String){
    return this.httpClient.get<Product[]> (`http://localhost:3000/products?q=${query}`)
  }
}

interface GetProductResponse {
  _embedded : {
    products : Product[];
  }
}
