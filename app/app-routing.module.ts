import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { LoginComponent } from './login/login.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { CroprecommendationComponent } from './croprecommendation/croprecommendation.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { FarmerprofileComponent } from './farmerprofile/farmerprofile.component';
import { FertilizerrecommendationComponent } from './fertilizerrecommendation/fertilizerrecommendation.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { PesticiderecommendationComponent } from './pesticiderecommendation/pesticiderecommendation.component';
import { ProductComponent } from './product/product.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
