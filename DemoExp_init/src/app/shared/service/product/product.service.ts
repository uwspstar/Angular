import { Injectable } from '@angular/core';
import { Product } from '../../interface/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const URL = "mockdata/products.json";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }
}

