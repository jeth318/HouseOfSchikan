import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  sv:any;

  constructor() {
    this.headerText = "Roomies!";
    
}     
public headerText:String;

  ngOnInit() {
    this.sv = {
      firstDayOfWeek: 0,
      dayNames: ["Söndag", "Måndag", "Tisdag","Onsdag", "Torsdag", "Fredag", "Lördag"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    }
  }

}
