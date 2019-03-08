import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import { AdUnit } from '../index/AdUnit';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  m;
  d;
  fd;
  date;
  angForm: FormGroup;
  adunits: AdUnit[];
dateunits:any[]=[1];
  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();;
    this.date=new Date();
    this.m=this.date.getUTCMonth(),
    this.d=this.date.getUTCDate(),
    this.fd=this.d+"."+this.m;
    console.log(this.fd);
  }

  createForm() {
    this.angForm = this.fb.group({
      // unit_name: ['', Validators.required ],
      // unit_price: ['', Validators.required ]
      sales_amount:['',Validators.required]
   });
  }

//   addAdUnit(unit_name, unit_price) {
//     this.adunitservice.addAdUnit(unit_name, unit_price);
// }
addAdUnit(sales_amount) {
  let isDone: boolean = false;
for (let index = 0; index < this.dateunits.length; index++) {
  if(this.fd==this.dateunits[index])
  {
    isDone=true;
    break
  }

}
  if(isDone==true){
    alert("already entered todays record go to view record and update")
  }
  else{
  this.adunitservice.addAdUnit(sales_amount, this.fd);
  }
}
   ngOnInit() {
    // this.date=new Date();
    // this.m=this.date.getUTCMonth(),
    // this.d=this.date.getUTCDate(),
    // this.fd=this.d+"."+this.m;
    // console.log(this.fd);
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
      this.adunits = data;
      console.log(this.adunits.length);
    this.adunits.forEach(element => {
        console.log(element.sales_date);
      this.dateunits.push(element.sales_date)
      });
   console.log(this.dateunits)
    });
    
  
  }

}
