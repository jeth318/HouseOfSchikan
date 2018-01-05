import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HeaderComponent } from './components/header/header.component';
import { MemberService } from './services/member.service';
import { TaskService } from './services/task.service';
import { HttpModule } from '@angular/http';
import { MemberComponent } from './components/member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HeaderComponent,
    MemberComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule
  ],
  providers: [MemberService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
