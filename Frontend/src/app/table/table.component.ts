import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({

  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']

})

export class TableComponent implements OnInit {

  // empForm: FormGroup;

   listData:any;
  empForm: FormGroup;

  constructor(private fb: FormBuilder) {

  this.listData = [];

    this.empForm = this.fb.group({

    empid: ['', Validators.required],

    empname: ['', Validators.required],

    city: ['', Validators.required],

    contactNo: ['', Validators.required],

    gender: ['', Validators.required]

     })

  }

public added():void {

     this.listData.push(this.empForm.value);

      this.empForm.reset();

   }

reset(){

this.empForm.reset();

}

editItem(){

 

}

removeItem(element: any){

this.listData.forEach((value: any,index: any)=>{

  if(value==element)

  this.listData.splice(index,1);

});

}

ngOnInit(){

}

}