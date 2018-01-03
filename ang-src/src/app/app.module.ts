import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HeaderComponent } from './components/header/header.component';
import { MemberService } from './services/member.service';
import { TaskService } from './services/task.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MemberService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
