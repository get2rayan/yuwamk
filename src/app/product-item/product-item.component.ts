import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() item: Product;
  @Output() onShareClick: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  shareClick() {
    console.log('share clicked!');
    this.onShareClick.emit('emitted!');
  }
}
