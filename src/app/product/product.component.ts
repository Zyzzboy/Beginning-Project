import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',                //bunu ister index.html'de ister başka bir html de kullanıp bu component'e(component+html) ulaşabiliriz, l
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productName = "Laptop";


  constructor() { }

  ngOnInit(): void {

  }

}
