import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-croprecommendation',
  templateUrl: './croprecommendation.component.html',
  styleUrl: './croprecommendation.component.css'
})
export class CroprecommendationComponent {
  @ViewChild('myForm') form:NgForm;
  nitrogen: any;
  phosphorous: any;
  potassium:any;
  phlevel:any;
  rainfall:any;
  temp:any
  humidity:any
  
  constructor() {
    this.form = {} as NgForm; // or initialize it with null or undefined
   
  }
  onSubmit(){
    console.log(this.form);
  }
}
