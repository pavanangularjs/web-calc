import { Component, OnInit, Input } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  num = 0;

  selected = "Under 2";
  ccamnt = 0;
  deduction = 0;

  selectedid = "";

  constructor() {}

  ngOnInit() {}

  displayChildrenFields(event: any) {
    // var b=document.getElementById('panel');
    //b.innerHTML="";

    this.num = event.target.value;

    //for(var i=1;i<=parseInt(this.num);i++)
    //{
    //var temp =i;

    // }
    //this.displayDependentCare();
  }

  displayDependentCare(event: any) {
    this.ccamnt = parseInt(event.target.value);

    //this.sum+= parseInt(event.target.value);
    //for(var i=1;i<=parseInt(this.num);i++)
    //{
    //var x = "'earned'+i+'id'";
    //sum+= parseInt((<HTMLInputElement>document.getElementById(x)).value);

    //}
    //console.log(this.sum);
  }
  displayDependentSelected(event: any) {
    //for(var i=1;i<=parseInt(this.num);i++)
    //{
    //var x = "'earned'+i+'id'";
    //sum+= parseInt((<HTMLInputElement>document.getElementById(x)).value);

    //}
    this.selected = event.currentTarget.value;
    this.selectedid = event.currentTarget.id;

    var id = this.selectedid.substring(6, 7);
    console.log(id);

    if (this.selected === "Under 2") {
      var inputElement = <HTMLInputElement>(
        document.getElementById("max" + id + "id")
      );
      inputElement.value = "200";
    } else if (this.selected === "2 and older") {
      var inputElement = <HTMLInputElement>(
        document.getElementById("max" + id + "id")
      );
      inputElement.value = "175";
    }
  }
  /*
calculateDeduction()
{

	if(this.ccamnt>10)
		this.ccamnt = 10;

	this.sum+= this.ccamnt;
	console.log(this.sum);
	var inputElement = <HTMLInputElement>document.getElementById('earned1id');
	console.log(inputElement.value);

	var selectElement = <HTMLSelectElement>document.getElementById('select1id');
	console.log(selectElement.value);
}*/

  calcDeduction() {
    var sum = 0;
    for (var i = 1; i <= this.num; i++) {
      var x = "earned" + i + "id";
      var cc = <HTMLInputElement>document.getElementById(x);

      var y = "max" + i + "id";
      var z = "allow" + i + "id";
      var max = <HTMLInputElement>document.getElementById(y);
      var allow = <HTMLInputElement>document.getElementById(z);
      if (parseInt(cc.value) > parseInt(max.value)) allow.value = max.value;
      else allow.value = cc.value;

      sum += parseInt(allow.value);
    }

    this.deduction = sum;

    var ded = <HTMLInputElement>document.getElementById("totaldeduction");
    ded.value = this.deduction.toFixed(2);
  }

  get valueDeduction() {
    return this.deduction;
  }

  resetAll($event){
  	this.deduction=0;
  	this.num=0;
  	var ded = <HTMLInputElement>document.getElementById("totaldeduction");
    ded.value ='';
  }
}
