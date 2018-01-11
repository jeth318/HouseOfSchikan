import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TaskService } from './services/task.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MemberService } from './services/member.service';
import { HeaderComponent } from './components/header/header.component';
import { MemberComponent } from './components/member/member.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberComponent,
    ScheduleComponent,
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
