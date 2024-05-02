import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AddpostService } from './addpost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent {
  // @ViewChild('myForm') form:NgForm;
  //   filename: any;
  //   desc: any;

    addPostFrom!:FormGroup;
    constructor(private addPostService: AddpostService,
      private fb:FormBuilder){ }
      
    
      // this.form = {} as NgForm; // or initialize it with null or undefined
      
    
  ngOnInit(){
      this.addPostFrom = this.fb.group({
        pimg:[null,[Validators.required]],
        pdesc:[null,[Validators.required]]
      })
    }
   addPost(){
      console.log(this.addPostFrom.value);
      this.addPostService.postAddPost(this.addPostFrom.value).subscribe((res) =>{
        console.log(res);

        //this.addPostFrom.reset;
        
      })
    }
    // onSubmit(){
    //   console.log(this.form);
    // }
  
  }




