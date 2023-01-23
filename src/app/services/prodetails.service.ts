import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../components/common/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdetailsService {

  private baseUrl = "http://localhost:3000/products";

  constructor(private httpClient : HttpClient) { }

  getProductDetails() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl)
  }
}

interface GetProductDetailsResponse {
    id : number;
    sku : String;
    name : String;
    description : String;
    unitPrice : number;
    imageUrl : String;
    active : boolean;
    unitsInStock : Number;
    dateCreated : Date;
    lastUpdated : Date;
}
