import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fertilizerrecommendation',
  templateUrl: './fertilizerrecommendation.component.html',
  styleUrl: './fertilizerrecommendation.component.css'
})
export class FertilizerrecommendationComponent {
  @ViewChild('myForm') form:NgForm;
  nitrogen: any;
  phosphorous: any;
  potassium:any;
  crop:any;
  
  constructor() {
    this.form = {} as NgForm; // or initialize it with null or undefined
    // this.firstname="";
    // this.lastname="";
  }
  
  onSubmit(){
    console.log(this.form);
  }
}
