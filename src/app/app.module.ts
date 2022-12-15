import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './information/home/home.component';
import { AboutComponent } from './information/about/about.component';
import { ShopComponent } from './information/shop/shop.component';
import { ContactComponent } from './information/contact/contact.component';
import { TermsComponent } from './information/terms/terms.component';
import { PrivacyComponent } from './politics/privacy/privacy.component';
import { ShippingComponent } from './politics/shipping/shipping.component';
import { RefundComponent } from './politics/refund/refund.component';
import { TrackOrderComponent } from './politics/track-order/track-order.component';
import { PaymentComponent } from './politics/payment/payment.component';
import { HouseComponent } from './categories/house/house.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { PetsComponent } from './categories/pets/pets.component';
import { BeautyComponent } from './categories/beauty/beauty.component';
import { FitnessComponent } from './categories/fitness/fitness.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { BtnUpComponent } from './btn-up/btn-up.component';
import { ShopHouseComponent } from './shop-house/shop-house.component';
import { ShopTechComponent } from './shop-tech/shop-tech.component';
import { ShopBeautyComponent } from './shop-beauty/shop-beauty.component';
import { ShopPetsComponent } from './shop-pets/shop-pets.component';
import { ShopFitComponent } from './shop-fit/shop-fit.component';

const routes: Routes = [
 {path: '', component:HomeComponent},
 {path: 'nosotros', component:AboutComponent},
 {path: 'shop', component:ShopComponent},
 {path: 'contact', component:ContactComponent},
 {path: 'terms', component:TermsComponent},
 {path: 'privacy', component:PrivacyComponent},
 {path: 'shipping', component:ShippingComponent},
 {path: 'refund', component:RefundComponent},
 {path: 'track', component:TrackOrderComponent},
 {path: 'payment', component:PaymentComponent},
 {path: 'house', component:HouseComponent},
 {path: 'tech', component:TechnologyComponent},
 {path: 'pets', component:PetsComponent},
 {path: 'beauty', component:BeautyComponent},
 {path: 'fit', component:FitnessComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    TermsComponent,
    PrivacyComponent,
    ShippingComponent,
    RefundComponent,
    TrackOrderComponent,
    PaymentComponent,
    HouseComponent,
    TechnologyComponent,
    PetsComponent,
    BeautyComponent,
    FitnessComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    BtnUpComponent,
    ShopHouseComponent,
    ShopTechComponent,
    ShopBeautyComponent,
    ShopPetsComponent,
    ShopFitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
