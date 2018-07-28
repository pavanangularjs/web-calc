import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gross',
  templateUrl: './gross.component.html',
  styleUrls: ['./gross.component.css']
})
export class GrossComponent implements OnInit {
	worksize = 0;
  ausize=0;
  totalnet = 0;
  childsupport = 0;
  otherunearned = 0;
  totalnetincome = 0;
  incstandard=0;
  shownext = false;
  deemed=0;
  totalunearned=0;
  constructor() { }
  
  ngOnInit() {
    
    
    var month = (<HTMLInputElement>document.getElementById("benefitDateMMid"));
   month.value=(Number(new Date().getMonth())+Number(1)).toFixed(0);
   var date = (<HTMLInputElement>document.getElementById("benefitDateDDid"));
   date.value=new Date().getDate().toFixed(0);
   var year = (<HTMLInputElement>document.getElementById("benefitDateYYYYid"));
   year.value=new Date().getFullYear().toFixed(0);
  }

  calcTotalNet(event: any) {
    var sum = 0;

    for (var i = 1; i <= this.worksize; i++) {
      var x = "self" + i + "id";
      var cc = (<HTMLInputElement>document.getElementById(x)).value;

      var y = "other" + i + "id";
      var z = "net" + i + "id";
      var max = (<HTMLInputElement>document.getElementById(y)).value;
      var allow = <HTMLInputElement>document.getElementById(z);

      allow.value = (Number(max) + Number(cc)).toFixed(2);
      

      sum += Number(allow.value);
    }
   
    this.totalnet = sum; 
    
    this.totalunearned= Number(this.childsupport)+Number(this.deemed)+Number(this.otherunearned);

    this.totalnetincome = Number(this.totalnet)+Number(this.totalunearned);
  }


  grossTest(event:any)
  {
  	this.incstandard=2000;
  	if(this.totalnetincome>this.incstandard){
  		
  		var result=(<HTMLInputElement>document.getElementById('result'));
  		result.value='FAIL';


  	}
  	else{
  		var result=(<HTMLInputElement>document.getElementById('result'));
  		result.value='PASS';
  		this.shownext=true;
  	}

  }

  resetAll($event){
  	this.worksize = 0;
  this.ausize=0
  this.totalnet = 0;
  this.childsupport = 0;
  this.otherunearned = 0;
  this.totalnetincome = 0;
  this.incstandard=0;
  this.deemed=0;
  this.totalunearned=0;
  this.shownext=false;
  var result=(<HTMLInputElement>document.getElementById('result'));
  result.value='';
  }



}
