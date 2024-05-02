import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductComponent } from './product/product.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { FprofileComponent } from './fprofile/fprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { FarmerprofileComponent } from './farmerprofile/farmerprofile.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CroprecommendationComponent } from './croprecommendation/croprecommendation.component';
import { FertilizerrecommendationComponent } from './fertilizerrecommendation/fertilizerrecommendation.component';
import { PesticiderecommendationComponent } from './pesticiderecommendation/pesticiderecommendation.component';
import { ConnectfarmerComponent } from './connectfarmer/connectfarmer.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { FarmertableComponent } from './farmertable/farmertable.component';
import { CustomertableComponent } from './customertable/customertable.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';




const appRoute: Routes=[
 
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'feature', component:FeatureComponent},
  {path:'login', children:[
    {path:'', component:LoginComponent},
    {path:'registration', component:RegistrationComponent},
  ]},
  {path:'fregister', component:RegistrationComponent},
  {path:'product', component:ProductComponent},
  {path:'adminprofile', children:[
    {path:'', component:AdminprofileComponent},
    
    {path:'farmertable', component:FarmertableComponent},
    {path:'customertable', component:CustomertableComponent},
  ] },
  {path:'farmerprofile', children:[
    {path:'', component:FarmerprofileComponent},
    {path:'croprecommendation', component:CroprecommendationComponent},
    {path:'fertilizerrecommendation', component:FertilizerrecommendationComponent},
    {path:'pesticiderecommendation', component:PesticiderecommendationComponent},
    {path:'addpost', component:AddpostComponent},
    {path:'addproduct', component:AddproductComponent},
    {path:'producttable', component:ProducttableComponent},
  ] },
  // {path:'farmerprofile', component:FarmerprofileComponent},
  {path:'customerprofile', children:[
    {path:'', component:CustomerprofileComponent},
    {path:'product', component:ProductComponent},
    {path:'orderdetails', component:OrderdetailsComponent},
    {path:'shoppingcart', children:[
      {path:'', component:ShoppingcartComponent},
      {path:'order', children:[
        {path:'', component:OrderComponent},
        {path:'payment', component:PaymentComponent},
      ]},
    ]},
    
    
    
  ]}, 
]
// const appRoute: Routes=[
//   {}
// ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    ProductComponent,
    HeroComponent,
    FeatureComponent,
    OrderComponent,
    PaymentComponent,
    FprofileComponent,
    AdminprofileComponent,
    FarmerprofileComponent,
    CustomerprofileComponent,
    ShoppingcartComponent,
    OrderdetailsComponent,
    CroprecommendationComponent,
    FertilizerrecommendationComponent,
    PesticiderecommendationComponent,
    ConnectfarmerComponent,
    AddpostComponent,
    ViewpostComponent,
    AddproductComponent,
    ProducttableComponent,
    FarmertableComponent,
    CustomertableComponent,
    FooterComponent,
    FarmerloginComponent,
 
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
