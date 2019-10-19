import { Component, DoCheck } from "@angular/core";
import { Product } from "./product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements DoCheck {
  //title = 'shopping-cart';
  products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      image:
        "https://scdn.thitruongsi.com/image/cached/size/w800-h0/img/product/2018/01/07/e8d9b0a0-f3aa-11e7-98a7-a9a3955606ba.jpg",
      price: 550000,
      quantity: 1
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      image:
        "https://top10daklak.com/wp-content/uploads/2018/11/shop-tui-xach-dep-buon-ma-thuot.jpg",
      price: 380000,
      quantity: 1
    }
  ];

  subTotal = 2000;
  tax = 10;
  total = 2010;
  numberItems: number = 0;
  totalItems: number = 0;

  // ngOnInit() {
  //   console.log("Khoi tao main");
  //   this.numberItems = 0;
  //   this.products.forEach(Product => {
  //     this.numberItems += Product.quantity;
  //   });
  // }
  ngDoCheck() {
    //console.log("Do check");
    let tongTien: number = 0;
    let thanhTien: number = 0;
    let tongSoLuong: number = 0;

    this.numberItems = 0;
    this.products.forEach(product => {
      tongSoLuong += product.quantity;
      tongTien += product.quantity * product.price;
    });
    this.numberItems = tongSoLuong;
    this.subTotal = tongTien;
    this.tax = tongTien * 0.1;
    this.total = tongTien + this.tax;
    //console.log("num",numberItems);
  }

  handleRemoveProduct(sanpham: Product) {
    const index = this.products.findIndex(product => product.id === sanpham.id);
    if (index !== -1) {
      this.products.splice(index, 1);
      alert("Đã xóa " + sanpham.name + "!");
      //this.numberItems=this.products.length;
      // for (let i = 0; i < this.products.length; i++) {
      //   this.numberItems += this.products[i].quantity;
      // }
    }
  }
  handleApplyPromoCode(code: string) {
    alert(code);
  }
  handleThayDoiSL(sanpham: Product) {
    //let numberItems: number = 0;
    //console.log("value:"+input);
    console.log("id:" + sanpham.id);
    // for (let i = 0; i < this.products.length; i++) {
    //   numberItems += this.products[i].quantity;
    // }
    //this.numberItems = numberItems;
  }
}
