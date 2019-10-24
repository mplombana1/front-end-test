import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {

  constructor() {

   }

  ngOnInit() {
  }
  addMargin(){
    let container = document.getElementById('container')
    container.classList.toggle('open')
  }

  ngAfterViewInit() {
    this.addMargin();
    
}
}
