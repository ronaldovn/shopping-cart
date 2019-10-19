import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root"
})
export class CheckpromocodeService {

  checkPromoCode(code: string): number {
    //alert(code);
    if (code === "EVN") return 50;
    else return 100;
  }
}
