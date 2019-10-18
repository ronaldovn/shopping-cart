import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html'
})
export class CartFooterComponent  {
subTotal:number=35;
tax:number=10;
total:number=500;
}
