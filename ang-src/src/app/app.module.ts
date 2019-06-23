import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { TaskService } from './services/task.service';
import { FormsModule } from '@angular/forms';
import { MemberService } from './services/member.service';
import { HeaderComponent } from './components/header/header.component';
import { MemberComponent } from './components/member/member.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhiteboardComponent } from './components/whiteboard/whiteboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberComponent,
    ScheduleComponent,
    WhiteboardComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    TaskService,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
