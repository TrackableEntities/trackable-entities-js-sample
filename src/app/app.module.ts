import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildTrackableComponent } from './child-trackable/child-trackable.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildTrackableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
