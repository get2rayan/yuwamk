import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
//import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  router: Router;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    console.log(routeParam);
    const productId = Number(routeParam.get('itemId'));

    this.product = products.find((x) => x.id == productId);
  }

  goBack(): void {
    this.router.navigate('/');
  }
}
