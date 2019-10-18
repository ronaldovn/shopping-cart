import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html'
})
export class CartFooterComponent  {
@Input() subTotal:number;
@Input() tax:number;
@Input() total:number;
promoCode:string="";

applyPromoCode()
{
  if(this.promoCode==="mua thu")
    alert("Bạn được giảm giá 30%");
}

}
