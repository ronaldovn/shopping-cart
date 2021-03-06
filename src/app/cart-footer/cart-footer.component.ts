import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cart-footer",
  templateUrl: "./cart-footer.component.html"
})
export class CartFooterComponent {
  @Input() subTotal: number;
  @Input() tax: number;
  @Input() total: number;
  promoCode: string = "";
  @Output() onApplyPromoCode = new EventEmitter();
  @Input() numDisCount:number;

  applyPromoCode() {
    this.onApplyPromoCode.emit(this.promoCode);
    // if(this.promoCode==="mua thu")
    //   alert("Bạn được giảm giá 30%");
  }
}
