import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products: Product[];

  getProducts(): Product[] {
    this.products = [
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
    return this.products;
  }

  removeProduct(id:number){

    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
  updateQuanity():number{
    let numberItems:number = 0;
    this.products.forEach(product => {
      numberItems += product.quantity;      
    });
    return numberItems;
  }
  
}
