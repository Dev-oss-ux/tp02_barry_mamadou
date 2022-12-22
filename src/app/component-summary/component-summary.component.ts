import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-summary',
  templateUrl: './component-summary.component.html',
  styleUrls: ['./component-summary.component.css']
})
export class ComponentSummaryComponent {


  @Input() lastname : String = "";
  @Input() firstname : String = "";
  @Input() zipCode : Number = 0;
  @Input() tel : String = "";
  @Input() email : String = "";
  @Input() gender : String = "";
  @Input() login : String = "";
  @Input() password : String = "";
  @Input() passwordCheck : String = "";
  
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();


  Close () {
    this.change.emit(false);
  }




}
