import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.showSettings = false;
    this.settingsBtnText = 'Hantera roomies';
    this.showSettings ? this.settingsBtnText == 'Göm inställningar' : 'Hantera roomies';
  }
  public showSettings: Boolean;
  public settingsBtnText: String;
  title = 'app';

  toggleSettings(){
    this.showSettings = !this.showSettings;
  }
}
