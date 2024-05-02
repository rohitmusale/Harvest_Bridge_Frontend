import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{

    // @ViewChild('myForm') form!:NgForm;
    // firstname!: string;
    // lastname!: string;
    // email!:any;
    // phone!:number;
    // age!:number;
    // gender!:string
    // address!:any
    // password!:any
    // cpassword!:any
    fregisterForm!:FormGroup;
    constructor(private regService: RegistrationService,
      private fb:FormBuilder){ }

    // registration: Registration = new Registration();
    // constructor(private registrationService: RegistrationService) {
    //   // this.form = {} as NgForm; // or initialize it with null or undefined
    //   // this.firstname="";
    //   // this.lastname="";
    // }
    ngOnInit(){
      this.fregisterForm = this.fb.group({
        fname:[null,[Validators.required]],
        lname:[null,[Validators.required]],
        email:[null,[Validators.required, Validators.email]],
        phone:[null,[Validators.required]],
        age:[null,[Validators.required]],
        gender:[null,[Validators.required]],
        address:[null,[Validators.required]],
        password:[null,[Validators.required]],
        cpassword:[null,[Validators.required]]

      })
    }
   register(){
      console.log(this.fregisterForm.value);
      this.regService.registerFarmer(this.fregisterForm.value).subscribe((res) =>{
        console.log(res)
      })    
    }
}
