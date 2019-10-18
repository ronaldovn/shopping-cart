import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi, 'vi');

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartMainComponent } from './cart-main/cart-main.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';

import { Product } from "./product.model";

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartMainComponent,
    CartFooterComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
