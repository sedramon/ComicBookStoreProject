import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComicComponent } from './shop/comics/comic.component';
import { AddreviewComponent } from './shop/addreview/addreview.component';
import { AddtocartComponent } from './shop/addtocart/addtocart.component';
import { CartComponent } from './cart/cart.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { UserService } from './auth/user.service';
import { ShopService } from './shop/shop.service';
import { CartService } from './cart/cart.service';
import { ReviewService } from './shop/review.service';
import { RemovefromcartComponent } from './cart/removefromcart/removefromcart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    WelcomeComponent,
    ComicComponent,
    AddreviewComponent,
    AddtocartComponent,
    CartComponent,
    RemovefromcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [UserService, ShopService, CartService, ReviewService],
  bootstrap: [AppComponent],
  entryComponents: [AddreviewComponent, ProfileComponent]
})
export class AppModule {}
