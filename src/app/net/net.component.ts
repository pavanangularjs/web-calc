import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
  selector: "app-net",
  templateUrl: "./net.component.html",
  styleUrls: ["./net.component.css"]
})
export class NetComponent implements OnInit {
  worksize = 0;
  show = false;
  totalnet = 0;
  childsupport = 0;
  otherunearned = 0;
  totalnetincome = 0;
  deficit = 0;
  failed = false;
  shownext = false;
  penalty = 0;
  spa = 0;
  familycap = 0;
  spaordeficit = 0;
  newgrant = 0;
  recoupment = 0;
  recurring = 0;
  sumtotal=0;
  constructor() {}

  ngOnInit() {

  }



  calcTotalGrossIncome(event: any) {
    var sum = 0;

    for (var i = 1; i <= this.worksize; i++) {
      var x = "selfemp" + i + "id";
      var cc = (<HTMLInputElement>document.getElementById(x)).value;

      var y = "otherear" + i + "id";
      var z = "grossinc" + i + "id";
      var max = (<HTMLInputElement>document.getElementById(y)).value;
      var allow = <HTMLInputElement>document.getElementById(z);

      console.log(Number(max) + Number(cc));
      console.log((Number(max) + Number(cc)).toFixed(2));
      allow.value = (Number(max) + Number(cc)).toFixed(2);
      var w = "workexp" + i + "id";
      var n = "netinc" + i + "id";
      var work = <HTMLInputElement>document.getElementById(w);
      if (Number(allow.value) > 0) work.value = Number(200).toFixed(0);
      else work.value = Number(200).toFixed(0);

      var net = <HTMLInputElement>document.getElementById(n);
      var nett = Number(allow.value) - Number(work.value);
      if (nett < 0) net.value = Number("0").toFixed(2);
      else net.value = (Number(allow.value) - Number(work.value)).toFixed(2);

      sum += Number(net.value);
    }
    this.sumtotal=sum;
    var totalded = (<HTMLInputElement>document.getElementById("totaldeduction"))
      .value;

    this.totalnet = sum - Number(totalded);
    this.totalnetincome = Math.round(this.totalnet);
  }
  calcTotalNetIncome(event: any) {
    //console.log(parseInt(HomeComponent.call('valueDeduction()')));

    //var totalded= (<HTMLInputElement>document.getElementById('totaldeduction')).value;
    console.log(this.totalnet);
    this.totalnetincome =
      Number(this.totalnet) +
      Number(this.childsupport) +
      Number(this.otherunearned);
    console.log(this.totalnetincome);
  }

  calcTotalDeficit(event: any) {
    this.deficit =
      this.totalnetincome -
      Number((<HTMLInputElement>document.getElementById("cnsstd")).value);

    if (this.deficit <= 0) {
      this.failed = true;
      
      var result=(<HTMLInputElement>document.getElementById("result12"));
      result.value='FAIL';
    }
    else{
    	var result=(<HTMLInputElement>document.getElementById('result12'));
      result.value='PASS';
    this.shownext = true;
}
  }

  calcPenalty(event: any) {
    var select = <HTMLSelectElement>document.getElementById("selectpenalty");
    console.log(select.selectedIndex);
    if (select.selectedIndex == 1)
      this.penalty = Number(0);
	if (select.selectedIndex == 1)
      this.penalty = Math.round(0.2 * this.newgrant);
    if (select.selectedIndex == 2)
      this.penalty = Math.round(0.4 * this.newgrant);

    this.recurring = this.newgrant - this.penalty;
  }

  calcLesser() {
    this.spaordeficit = this.deficit <= this.spa ? this.deficit : this.spa;

    this.newgrant = this.spaordeficit - this.recoupment;

    this.recurring = this.newgrant - this.penalty;
  }

  resetAll($event) {
    this.worksize = 0;
    this.show = false;
    this.totalnet = 0;
    this.childsupport = 0;
    this.otherunearned = 0;
    this.totalnetincome = 0;
    this.deficit = 0;
    this.failed = false;
    this.shownext = false;
    this.penalty = 0;
    this.spa = 0;
    this.familycap = 0;
    this.spaordeficit = 0;
    this.newgrant = 0;
    this.recoupment = 0;
    this.recurring = 0;
  }
}
