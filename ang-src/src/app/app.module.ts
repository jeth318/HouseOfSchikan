import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HeaderComponent } from './components/header/header.component';
import { MemberService } from './services/member.service';
import { TaskService } from './services/task.service';
import { HttpModule } from '@angular/http';
import { AdminComponent } from './components/admin/admin.component';
import { MemberComponent } from './components/member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HeaderComponent,
    AdminComponent,
    MemberComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MemberService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
