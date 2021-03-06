import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { courseListComponent } from './courses/couser-list.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    courseListComponent,
    StartComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
