import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class pageFormulaire {

  constructor() { }

  ngLastname : String = "";
  ngFirstname : String = "";
  ngZipCode : Number = 0;
  ngTel : String = "";
  ngEmail : String = "";
  ngGender : String = "";
  ngLogin : String = "";
  ngPassword : String = "";
  ngPasswordCheck : String = "";

  showSummary = false


  clicChange (val : boolean) {
    this.showSummary = val
  }

}
