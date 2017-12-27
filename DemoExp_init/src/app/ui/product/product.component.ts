import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/product/product.service';
import { Product } from '../../shared/interface/product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getProductList()
      .subscribe(data => this.products = data);
  }

}

