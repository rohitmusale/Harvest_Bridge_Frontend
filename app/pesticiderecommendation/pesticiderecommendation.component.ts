import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pesticiderecommendation',
  templateUrl: './pesticiderecommendation.component.html',
  styleUrl: './pesticiderecommendation.component.css'
})
export class PesticiderecommendationComponent {
  @ViewChild('myForm') form:NgForm;
  filename: any;
  
  
  constructor() {
    this.form = {} as NgForm; // or initialize it with null or undefined
   
  }
  onSubmit(){
    console.log(this.form);
  }
}
